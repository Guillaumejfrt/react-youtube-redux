import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyDmb6Al9P1LrVQGctwbOzGmy7SS4emh2YI';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ''
    };
  }
  videoSearch = (word) => {
    YTSearch({ key: API_KEY, term: word }, (videos) => {
      console.log(videos);
    });
  }
  inputHandler = (event) => {
    const word = event.target.value;
    this.setState({ word });
    this.videoSearch(word);
  }
  render() {
    return (
      <div>
        <form className="form-group">
          <input type="text" onChange={this.inputHandler} value={this.state.word} />
          <button className="btn btn-danger">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
