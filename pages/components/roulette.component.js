import React from 'react';
import styled, { keyframes } from 'styled-components';

const Roulette = ({ rotation, loading }) => (
  <Container>
    <Wheel
      $loading={loading}
      rotation={rotation}
      src="/assets/roulette-wheel-icon-by-vexels.png"
      alt="Roulette wheel"
    />
    <Rotation $loading={loading}>
      <Stage>
        <Ball />
      </Stage>
    </Rotation>
  </Container>
);

export default Roulette;

const spin = (rotation) => keyframes`
      0%   { transform: rotate(0deg); }
      100% { transform: rotate(${720 + rotation}deg); }
    `;

const Wheel = styled.img`
  animation-name: ${(props) => (props.$loading ? spin(props.rotation) : '')};
  animation-duration: 4s;
  animation-iteration-count: normal;
  transform: rotate(${(props) => props.rotation}deg);
`;

const Container = styled.div`
  position: relative;
`;

const spinBall = keyframes`
    0%   { transform: rotate(   0deg); }
    50%  { transform: rotate(-360deg); }
    80%  { transform: rotate(-630deg); }
    100% { transform: rotate(-720deg); }
    `;

const Rotation = styled.div`
  position: absolute;
  width: 347px;
  height: 345px;
  top: 84px;
  left: 83px;
  animation: ${(props) => (props.$loading ? spinBall : '')} 4s linear normal;
`;

const Stage = styled.section`
  position: absolute;
  top: 27px;
  right: 165px;
  width: 15px;
  height: 15px;
  perspective: 60px;
  perspective-origin: 50% 50%;
`;

const Ball = styled.figure`
  display: block;
  background: black;
  margin: 0;
  border-radius: 50%;
  height: 15px;
  width: 15px;
  background: radial-gradient(circle at 5px 5px, #ffffff, #000);
`;
