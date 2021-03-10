import React from 'react';
import { Row, Index, Bet, Result } from './row.component';

const Score = ({ score, index }) =>
  score ? (
    <Row>
      <Index>{index + 1}</Index>
      <Bet>{score.bet}</Bet>
      <Result>{score.score ? 'Win!' : 'Lose!'}</Result>
    </Row>
  ) : null;

export default Score;
