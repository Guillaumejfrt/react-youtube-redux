import YTSearch from 'youtube-api-search';
const API_KEY = 'AIzaSyDmb6Al9P1LrVQGctwbOzGmy7SS4emh2YI';
// const URL = 'https://www.googleapis.com/youtube/v3/search';

export function fetchVideos(word) {
  YTSearch({ key: API_KEY, word }, (videos) => {
    console.log(videos);
    return {
      type: 'FETCH_VIDEO',
      payload: videos
    };
  });
}
