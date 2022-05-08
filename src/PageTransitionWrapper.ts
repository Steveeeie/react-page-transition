import styled, { css } from 'styled-components';
import { TransitionStatus } from 'react-transition-group';
import { Animation } from './animations';
import { createAnimationStyles } from './createAnimationStyles';

interface Props {
  state: TransitionStatus;
  enterAnimation: Animation;
  exitAnimation: Animation;
}

const stateMap = {
  entering: ({ enterAnimation }: { enterAnimation: Animation }) => {
    return css`
      ${createAnimationStyles(enterAnimation)};
    `;
  },
  exiting: ({ exitAnimation }: { exitAnimation: Animation }) => {
    return css`
      ${createAnimationStyles(exitAnimation)};
    `;
  }
};

const PageTransitionWrapper = styled.div<Props>`
  backface-visibility: hidden;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: absolute;
  top: 0;
  transform-style: preserve-3d;
  transform: translate3d(0, 0, 0);
  width: 100%;
  will-change: transform;

  ${({ state }) => stateMap[state]};
`;

export { PageTransitionWrapper };
