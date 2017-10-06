import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import logger from 'redux-logger';
import { BrowserRouter as Router } from 'react-router-dom';
import { createHistory as history } from 'history';

import App from './components/app';
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
      <App />
    </Router>
  </Provider>,
  document.querySelector('.container')
);
