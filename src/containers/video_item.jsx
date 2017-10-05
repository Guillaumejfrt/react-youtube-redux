import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectedVideo } from '../actions';

class VideoItem extends Component {
  handleClick = () => {
    this.props.selectedVideo(this.props.video);
  }
  render() {
    const video = this.props.video.snippet;
    return (
      <div className="video-item" onClick={this.handleClick}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { selectedVideo },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(VideoItem);

