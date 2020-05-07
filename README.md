# React Page Transition

<img alt="License" src="https://img.shields.io/npm/l/@steveeeie/react-page-transition" /> <img alt="Version" src="https://img.shields.io/npm/v/@steveeeie/react-page-transition"> <img alt="Size" src="https://img.shields.io/bundlephobia/min/@steveeeie/react-page-transition"> <img alt="PRs" src="https://img.shields.io/badge/PRs-Welcome-brightgreenn">
<a href="https://www.twitter.com/steveeeie"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/steveeeie?style=social"></a>

## Demo

[View Demo](https://stevemeredith.com/react-page-transition)

## Description

⚛️💨 A React component that makes it easy to use the page transitions from the [Codedrops Page Transitions Demo](https://tympanus.net/Development/PageTransitions/).

<br/>

<p align="center">
<img src="https://github.com/Steveeeie/react-page-transition/blob/master/preview-1.gif?raw=true" alt="preview" width="100%" />  <br/>
<img src="https://github.com/Steveeeie/react-page-transition/blob/master/preview-2.gif?raw=true" alt="preview" width="100%" />
</p>

## Installation

`yarn add @steveeeie/react-page-transition`

or

`npm install @steveeeie/react-page-transition`

## Additional Modules

`npm install react-transition-group --save`
`npm install --save styled-components`

or

`yarn add react-transition-group`
`yarn add styled-components`

## Usage Example ( With React Router )

Wrap your routes inside the `PageTransition` component and pass one of the preset names to the `preset` prop, ([view the demo](https://stevemeredith.com/react-page-transition) for the full list of presets).

You will also need to pass the current `location.path` to the `transitionKey` prop, this is so that the internal `TransitionGroup` can track which components are entering and exiting.

```jsx
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';

function Routes() {
  return (
    <BrowserRouter>
      <Route
        render={({ location }) => (
          <PageTransition
            preset="moveToLeftFromRight"
            transitionKey={location.pathname}
          >
            <Switch location={location}>
              <Route to="/home" component={Home} />
              <Route to="/about" component={About} />
            </Switch>
          </PageTransition>
        )}
      />
    </BrowserRouter>
  );
}
```

## Props

`preset` - Accepts one of the available preset names as a string, ([view the demo](https://stevemeredith.com/react-page-transition) for the full list of presets).

`enterAnimation` - Accepts one of the available animation names as a string and overrides the enter animation, ([view the demo](https://stevemeredith.com/react-page-transition) for the full list of animations).

`exitAnimation` - Accepts one of the available animation names as a string and overrides the exit animation, ([view the demo](https://stevemeredith.com/react-page-transition) for the full list of animations).

`transitionKey` - Needs to be a unique identifier, it is used by the internal `TransitionGroup` to track which components are entering and exiting.
