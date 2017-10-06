import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoSelected extends Component {
  render() {
    const video = this.props.selectedVideo.id;
    if (!video) {
      return <div>Select a video...</div>;
    }
    const url = `https://www.youtube.com/embed/${video.videoId}`;
    return (
      <div>
        <hr />
        <iframe title={video.videoId} src={url} />
        <div className="details">
          <div>{this.props.selectedVideo.snippet.title}</div>
          <div>{this.props.selectedVideo.snippet.description}</div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedVideo: state.selectedVideo
  };
}

export default connect(mapStateToProps, null)(VideoSelected);
