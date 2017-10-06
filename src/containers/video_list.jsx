import React, { Component } from 'react';
import { connect } from 'react-redux';

import VideoItem from './video_item';

class VideoList extends Component {
  render() {
    console.log(this.props.videos);
    return (
      <div className="row">
        {this.props.videos.map(video => <VideoItem key={video.id.videoId} video={video} />)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

export default connect(mapStateToProps, null)(VideoList);
