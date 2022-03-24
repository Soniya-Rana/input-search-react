import React, { Component } from "react";

import { countries } from "../countriesList";

export default class FilterWhileSearching extends Component {
  state = {
    list: this.props.courseList,
    searchText: "",
    suggestions: [],
    suggestionIndex: 0,
    suggetsionActive: false,
    myRef: React.createRef(),
  };

  handleInput = (e) => {
    let tempInut = this.state.myRef.current.value.toLowerCase();
    this.setState({
      searchText: tempInut,
    });
    console.log(tempInut);
    if (tempInut.length > 1) {
      let filterSuggestion = countries.filter((suggestion) => {
        return suggestion.name
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase());
      });
      console.log(filterSuggestion);
      this.setState({
        suggestions: filterSuggestion,
        suggetsionActive: true,
      });
    } else {
      this.setState({
        suggestion: countries,
        suggetsionActive: false,
      });
    }
  };

  // handleKeyDown = () => {};

  render() {
    return (
      <div>
        <input
          ref={this.state.myRef}
          type="text"
          value={this.state.searchText}
          onChange={(e) => this.handleInput(e)}
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
