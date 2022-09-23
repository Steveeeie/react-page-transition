import React, { memo } from 'react';
import { Transition, TransitionGroup } from 'react-transition-group';
import { animations } from './animations';
import { presets } from './presets';
import { PageTransitionGroup } from './PageTransitionGroup';
import { PageTransitionWrapper } from './PageTransitionWrapper';

interface Props {
  children: React.ReactNode;
  enterAnimation?: string | { name: string; delay: Number; onTop: Boolean };
  exitAnimation?: string | { name: string; delay: Number; onTop: Boolean };
  preset: string;
  transitionKey: string;
}

function PageTransition({
  children,
  enterAnimation: enterAnimationOverride,
  exitAnimation: exitAnimationOverride,
  preset,
  transitionKey,
  ...rest
}: Props) {
  const selectEnterAnimation = () => {
    if (enterAnimationOverride) {
      if (typeof enterAnimationOverride === 'string') {
        return animations[enterAnimationOverride];
      }
      return {
        ...animations[enterAnimationOverride.name],
        delay: enterAnimationOverride.delay,
        onTop: enterAnimationOverride.onTop
      };
    }
    if (preset) {
      return {
        ...animations[presets[preset].enter.name],
        delay: presets[preset].enter.delay,
        onTop: presets[preset].enter.onTop
      };
    }
    return 'rotateSlideIn';
  };

  const selectExitAnimation = () => {
    if (exitAnimationOverride) {
      if (typeof exitAnimationOverride === 'string') {
        return animations[exitAnimationOverride];
      }
      return {
        ...animations[exitAnimationOverride.name],
        delay: exitAnimationOverride.delay,
        onTop: exitAnimationOverride.onTop
      };
    }
    if (preset) {
      return {
        ...animations[presets[preset].exit.name],
        delay: presets[preset].exit.delay,
        onTop: presets[preset].exit.onTop
      };
    }
    return 'rotateSlideIn';
  };

  const enterAnimation = selectEnterAnimation();
  const exitAnimation = selectExitAnimation();
  const timeout = Math.max(enterAnimation.duration, exitAnimation.duration);

  return (
    <PageTransitionGroup {...rest}>
      <TransitionGroup component={null}>
        <Transition key={transitionKey} timeout={timeout}>
          {state => (
            <PageTransitionWrapper
              enterAnimation={enterAnimation}
              exitAnimation={exitAnimation}
              state={state}
            >
              {children}
            </PageTransitionWrapper>
          )}
        </Transition>
      </TransitionGroup>
    </PageTransitionGroup>
  );
}

export default memo(PageTransition);
