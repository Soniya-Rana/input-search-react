import React, { Component } from "react";

import { countries } from "../countriesList";

export default class FilterList extends Component {
  state = {
    list: this.props.courseList,
    searchText: "",
    suggestions: [],
    suggestionIndex: 0,
    suggetsionActive: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchText !== this.state.searchText) {
      let tempValue = this.state.searchText;
      let tempData = countries.filter((item) => {
        return item.name.toLowerCase().includes(tempValue);
      });
      this.setState({
        suggestions: tempData,
        suggetsionActive: true,
      });
    }
  }

  render() {
    return (
      <div>
        <input
          ref={this.state.myRef}
          type="text"
          onChange={(e) => this.setState({ searchText: e.target.value })}
        />
        <br />
        <ul>
          {this.state.suggetsionActive
            ? this.state.suggestions.map((item, idx) => {
                return <li key={idx}>{item.name}</li>;
              })
            : countries.map((item, idx) => {
                return <li key={idx}>{item.name}</li>;
              })}
        </ul>
      </div>
    );
  }
}
