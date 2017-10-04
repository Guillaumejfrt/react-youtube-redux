import React, { Component } from 'react';

class VideoList extends Component {
  render() {
    return (
      <div>
        <h1>List</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

export default VideoList;
