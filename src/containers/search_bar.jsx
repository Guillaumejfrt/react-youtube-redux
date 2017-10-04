import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchVideos } from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ''
    };
  }
  inputHandler = (event) => {
    const keyword = event.target.value;
    this.setState({ keyword });
    this.props.fetchVideos(keyword);
  }
  render() {
    return (
      <div>
        <form className="form-group">
          <input type="text" onChange={this.inputHandler} value={this.state.keyword} />
          <button className="btn btn-danger">Search</button>
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
