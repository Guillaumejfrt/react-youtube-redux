import React, { Component } from 'react';
import { connect } from 'react-redux';

class VideoSelected extends Component {
  render() {
    const video = this.props.selectedVideo.id;
    if (!video) {
      return <div>Loading...</div>;
    }
    const url = `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
    console.log(url);
    return (
      <div>
        <iframe className="embed-responsive-item" className="embed-responsive-item" url={url} />
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
