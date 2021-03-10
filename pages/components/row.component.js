import styled from 'styled-components';

const Row = styled.li`
  margin-bottom: 0;
  padding: 0 5px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid grey;
`;

const Index = styled.p`
  width: 40px;
  padding: 5px;
  margin: 0;
  border-right: 1px solid grey;
`;

const Bet = styled.p`
  width: 50px;
  padding: 5px;
  margin: 0;
  border-right: 1px solid grey;
`;

const Result = styled.p`
  width: 50px;
  padding: 5px;
  margin: 0;
`;

export { Row, Index, Bet, Result };

export default () => {
  return '';
};
