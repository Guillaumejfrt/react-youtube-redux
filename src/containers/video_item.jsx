import React, { Component } from 'react';

class VideoItem extends Component {
  render() {
    const video = this.props.video.snippet;
    return (
      <div>
        <div className="media-left">
          <img className="media-object" src={video.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="media-heading">{video.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
