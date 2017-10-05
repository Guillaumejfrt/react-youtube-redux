import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoList extends Component {
  render() {
    console.log(this.props.videos);
    return (
      <div>
        {this.props.videos.map(video => <div key={video.id.videoId}>{video.id.videoId}</div>)}
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
