import React from 'react';

import Score from './score.component';
import Loader from './loader.component';
import { Row, Index, Bet, Result } from './row.component';

const Scores = ({ scores, loading }) =>
  loading ? (
    <Loader />
  ) : (
    <ul>
      <Row>
        <Index>No.</Index>
        <Bet>Bet</Bet>
        <Result>Result</Result>
      </Row>
      {scores && scores.map((score, index) => <Score key={score.id} score={score} index={index} />)}
    </ul>
  );

export default Scores;
