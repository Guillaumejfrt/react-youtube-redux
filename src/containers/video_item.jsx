import React, { Component } from 'react';

class VideoItem extends Component {
  render() {
    const video = this.props.video.snippet;
    return (
      <div className="video-item">
        <div>
          <img src={video.thumbnails.default.url} alt="" />
        </div>
        <div>
          <p>{video.title}</p>
        </div>
      </div>
    );
  }
}

export default VideoItem;
