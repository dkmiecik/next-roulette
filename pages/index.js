import React from 'react';

import Head from 'next/head';
import styles from '../styles/Home.module.css';

import Button from './components/button.component';
import Scores from './components/scores.component';
import Roulette from './components/roulette.component';
import Loader from './components/loader.component';

export default class Home extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      position: 0,
      color: '',
      bets: [],
      currentBetId: '',
      loading: false,
    };
  }

  createBet = async (color) => {
    const response = await fetch('/api/bet', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ bet: color }),
    });
    const { betId } = await response.json();
    this.setState({
      currentBetId: betId,
    });
  };

  spinRoulette = async () => {
    const response = await fetch('/api/roulette', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { position, color } = await response.json();
    this.setState({
      position: position,
      color,
    });
  };

  updateBet = async () => {
    const { currentBetId, color } = this.state;
    await fetch('/api/bet', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({ currentBetId, score: color }),
    });
  };

  getBets = async () => {
    const response = await fetch('/api/bet', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'GET',
    });
    const { bets } = await response.json();
    this.setState({
      bets,
    });
  };

  drawANumber = async (color) => {
    this.setState({
      loading: true,
    });
    await this.spinRoulette();
    await this.createBet(color);
    await this.updateBet();
    setTimeout(async () => {
      await this.getBets();
      this.setState({ loading: false });
    }, 5000);
  };

  saveBets = () => {
    const { bets } = this.state;
    sessionStorage.setItem('bets', JSON.stringify(bets));
  };

  componentDidMount() {
    const bets = JSON.parse(sessionStorage.getItem('bets'));
    this.setState({
      bets: bets || [],
    });
    window.addEventListener('beforeunload', this.saveBets);
  }

  componentWillUnmount() {
    this.saveBets();
    window.removeEventListener('beforeunload', this.saveBets);
  }

  render() {
    const { position, loading, bets } = this.state;
    return (
      <div className={styles.container}>
        <Head>
          <title>Roulette App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Roulette!</h1>

          <section>
            <h3>Please place a bet!</h3>
            {loading ? (
              <Loader />
            ) : (
              <div>
                <Button
                  clickHandler={this.drawANumber.bind(this, 'red')}
                  label={'Red'}
                  type={'red'}
                />
                <Button
                  clickHandler={this.drawANumber.bind(this, 'black')}
                  label={'Black'}
                  type={'black'}
                />
              </div>
            )}
          </section>

          <div className={styles.grid}>
            <Roulette rotation={position} loading={loading} />
            <Scores loading={loading} scores={bets} />
          </div>
        </main>

        <footer className={styles.footer}>
          <a href="https://gorzko.dev" target="_blank" rel="noopener noreferrer">
            Powered by{' Damian Kmiecik '}
          </a>
        </footer>
      </div>
    );
  }
}
