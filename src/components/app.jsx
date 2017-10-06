import React from 'react';
import { BrowserRouter as Route, Switch } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Home from './home';
import About from './about';
// import SelectedVideo from '../containers/video_selected';

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </div>
  );
};

export default App;
