import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

import Home from './components/home';
import About from './components/about';
import videosReducer from './reducers/videos_reducer';
import selectedVideoReducer from './reducers/selected_video_reducer';
import '../assets/stylesheets/application.scss';

// State and reducers
const initialState = {
  videos: [],
  selectedVideo: {}
};

const reducers = combineReducers({
  videos: videosReducer,
  selectedVideo: selectedVideoReducer
});

const middlewares = applyMiddleware(reduxPromise, logger);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} >
          <Route path="/about" exact component={About} />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('.container')
);
