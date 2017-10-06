import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import YTSearch from 'youtube-api-search';
import { fetchVideos } from '../actions';

const API_KEY = 'AIzaSyDmb6Al9P1LrVQGctwbOzGmy7SS4emh2YI';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }
  youtubeSearch = (word) => {
    YTSearch({ key: API_KEY, term: word }, (videos) => {
      this.props.fetchVideos(videos);
    });
  }
  inputHandler = (event) => {
    const keyword = event.target.value;
    this.setState({ keyword });
    this.youtubeSearch(keyword);
  }
  render() {
    return (
      <div>
        <form className="form-group">
          <input
            type="text"
            onChange={this.inputHandler}
            value={this.state.keyword}
            placeholder="Type here..."
          />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { fetchVideos },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(SearchBar);
