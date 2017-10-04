import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }
  inputHandler = (event) => {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <div>
        <form className="form-group">
          <input type="text" onChange={this.inputHandler} value={this.state.value} />
          <button className="btn btn-danger">Search</button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
