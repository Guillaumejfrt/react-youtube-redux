import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../containers/search_bar';
import VideoList from '../containers/video_list';
import VideoSelected from '../containers/video_selected';

const Home = () => {
  return (
    <div className="app">
      <div>
        <strong>Home</strong> | <Link to="about">About</Link>
      </div>
      <hr />
      <div>
        <SearchBar />
      </div>
      <div>
        <VideoList />
      </div>
      <div>
        <VideoSelected />
      </div>
    </div>
  );
};

export default Home;
