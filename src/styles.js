import styled, { css } from 'styled-components';

const createAnimationStyles = ({ keyframes, delay, duration, timing, fill, origin, onTop }) => css`
  animation-name: ${keyframes};
  animation-delay: ${delay};
  animation-duration: ${duration}ms;
  animation-timing-function: ${timing};
  animation-fill-mode: ${fill};
  transform-origin: ${origin || '50% 50%'};

  ${onTop &&
    css`
      z-index: 1;
    `}
`;

const stateMap = {
  entering: ({ enterAnimation }) => {
    return css`
      ${createAnimationStyles(enterAnimation)};
    `;
  },
  exiting: ({ exitAnimation }) => {
    return css`
      ${createAnimationStyles(exitAnimation)};
    `;
  }
};

export const PageTransitionGroup = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  perspective: 1200px;
  overflow: hidden;
`;

export const PageTransition = styled.div`
  backface-visibility: hidden;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
  width: 100%;

  ${({ state }) => stateMap[state]};
`;
