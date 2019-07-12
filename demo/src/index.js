import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import PageTransition from '../../src';
import animations from '../../src/animations';
import presets from '../../src/presets';
import * as Styles from './styles';

const pages = [
  {
    path: '/page-1',
    title: 'Page 1',
    color: '#1070CA'
  },
  {
    path: '/page-2',
    title: 'Page 2',
    color: '#EC4C47'
  },
  {
    path: '/page-3',
    title: 'Page 3',
    color: '#FDC162'
  },
  {
    path: '/page-4',
    title: 'Page 4',
    color: '#47B881'
  },
  {
    path: '/page-5',
    title: 'Page 5',
    color: '#425A70'
  },
  {
    path: '/page-6',
    title: 'Page 6',
    color: '#735DD0'
  }
];

function App() {
  const [preset, setPreset] = useState('moveToLeftFromRight');
  const [enterAnimation, setEnterAnimation] = useState('');
  const [exitAnimation, setExitAnimation] = useState('');
  const handlePresetChange = event => setPreset(event.target.value);
  const handleEnterAnimationChange = event => setEnterAnimation(event.target.value);
  const handleExitAnimationChange = event => setExitAnimation(event.target.value);

  return (
    <Router>
      <Route
        render={({ location }) => (
          <>
            <Styles.Global />

            <Styles.NavWrapper>
              <Styles.Nav>
                {pages.map((page, index) => (
                  <Styles.NavLink as={Link} key={index} to={page.path}>
                    {page.title}
                  </Styles.NavLink>
                ))}
              </Styles.Nav>
            </Styles.NavWrapper>

            <PageTransition
              preset={preset}
              transitionKey={location.pathname}
              enterAnimation={enterAnimation}
              exitAnimation={exitAnimation}>
              <Switch location={location}>
                {pages.map(page => {
                  return (
                    <Route
                      exact
                      path={page.path}
                      render={() => (
                        <Styles.Page color={page.color}>
                          <Styles.Container>
                            <Styles.Title>
                              React <strong>Page Transitions</strong>
                            </Styles.Title>

                            <Styles.Description>
                              A React component that makes it easy to use the page transitions from
                              the{' '}
                              <a
                                href="https://tympanus.net/Development/PageTransitions/"
                                target="_blank"
                                rel="nofollow">
                                Codedrops Page Transitions Demo
                              </a>
                            </Styles.Description>

                            <Styles.Github>
                              View the usage instructions and source code on{' '}
                              <a
                                href="https://github.com/Steveeeie/react-page-transition"
                                target="_blank"
                                rel="nofollow">
                                Github
                              </a>
                            </Styles.Github>

                            <Styles.Settings>
                              <Styles.Field fullWidth>
                                <Styles.Label>Preset: </Styles.Label>
                                <Styles.Select value={preset} onChange={handlePresetChange}>
                                  {Object.keys(presets).map(key => (
                                    <option key={key} value={key}>
                                      {key}
                                    </option>
                                  ))}
                                </Styles.Select>
                              </Styles.Field>

                              <Styles.Field>
                                <Styles.Label>Enter Override: </Styles.Label>
                                <Styles.Select
                                  value={enterAnimation}
                                  onChange={handleEnterAnimationChange}>
                                  <option value="">None</option>
                                  {Object.keys(animations).map(key => (
                                    <option key={key} value={key}>
                                      {key}
                                    </option>
                                  ))}
                                </Styles.Select>
                              </Styles.Field>

                              <Styles.Field>
                                <Styles.Label>Exit Override: </Styles.Label>
                                <Styles.Select
                                  value={exitAnimation}
                                  onChange={handleExitAnimationChange}>
                                  <option value="">None</option>
                                  {Object.keys(animations).map(key => (
                                    <option key={key} value={key}>
                                      {key}
                                    </option>
                                  ))}
                                </Styles.Select>
                              </Styles.Field>
                            </Styles.Settings>
                          </Styles.Container>
                        </Styles.Page>
                      )}
                    />
                  );
                })}
                <Route exact path="/" render={() => <Redirect to="/page-1" />} />
              </Switch>
            </PageTransition>
          </>
        )}
      />
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
