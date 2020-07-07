<img alt="License" src="https://img.shields.io/npm/l/@steveeeie/react-page-transition" /> <img alt="Version" src="https://img.shields.io/npm/v/@steveeeie/react-page-transition"> <img alt="Size" src="https://img.shields.io/bundlephobia/min/@steveeeie/react-page-transition"> <img alt="PRs" src="https://img.shields.io/badge/PRs-Welcome-brightgreenn">
<a href="https://www.twitter.com/steveeeie"><img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/steveeeie?style=social"></a>

# React Page Transition

⚛️💨 A React component that makes it easy to use the page transitions from the Codedrops Page Transitions Demo [See Original](https://tympanus.net/Development/PageTransitions/).

### [View Basic Demo](https://codesandbox.io/s/basic-react-page-transition-demo-rk0uv)

### [View Advanced Demo](https://codesandbox.io/s/advanced-react-page-transition-demo-z8hmd)

---

<p align="center">
<img src="https://github.com/Steveeeie/react-page-transition/blob/master/preview-1.gif?raw=true" alt="preview" width="100%" />  <br/>
<img src="https://github.com/Steveeeie/react-page-transition/blob/master/preview-2.gif?raw=true" alt="preview" width="100%" />
</p>

---

## Usage with `react-router`

### 1. Install Package

`npm install @steveeeie/react-page-transition`

or

`yarn add @steveeeie/react-page-transition`

---

### 2. Install Dependencies

`npm install react-router react-router-dom react-transition-group styled-components`

or

`yarn add react-router react-router-dom react-transition-group styled-components`

---

### 3. Code Example

#### App.js

```jsx
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';
import './styles.css';

const Links = () => (
  <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </>
);

const Home = props => <h1>Home</h1>;

const About = props => <h1>About</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <Links />
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="moveToLeftFromRight"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
              </Switch>
            </PageTransition>
          );
        }}
      />
    </BrowserRouter>
  );
}
```

Wrap your routes inside the `PageTransition` component and pass one of the preset names to the `preset` prop. [View the advanced demo](https://codesandbox.io/s/advanced-react-page-transition-demo-z8hmd) for the full list of presets.

You will also need to pass the current `location.path` to the `transitionKey` prop, this is so that the internal `TransitionGroup` can track which components are entering and exiting.

---

#### styles.css

```css
html,
body,
#root {
  height: 100%;
}
```

`PageTransition` is styled with `height: 100%`. The parent containers need to be given a height for it to render correctly because of this.

---

## Props

| Prop             | Required | Type              | Description                                                         |
| ---------------- | -------- | ----------------- | ------------------------------------------------------------------- |
| `preset`         | No       | String            | Sets the enter and exit animations \*                               |
| `enterAnimation` | No       | String            | Sets the enter animation \*                                         |
| `exitAnimation`  | No       | String            | Sets the exit animation \*                                          |
| `transitionKey`  | Yes      | Unique Identifier | Used internally to track which components are entering and exiting. |

##### \* [View the advanced demo](https://codesandbox.io/s/advanced-react-page-transition-demo-z8hmd) for the full list of presets and animations.
