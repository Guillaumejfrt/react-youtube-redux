// const URL = 'https://www.googleapis.com/youtube/v3/search';
export function fetchVideos(videos) {
  return {
    type: 'FETCH_VIDEO',
    payload: videos
  };
}

export function selectedVideo(video) {
  return {
    type: 'SELECTED_VIDEO',
    payload: video
  };
}
