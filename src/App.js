import React, { Component } from "react";
import FilterWhileSearching from "./components/FilterWhileSearching.js";
// import SearchWhileSearching from "./components/SearchWhileSearching";

export default class App extends Component {
  render() {
    return (
      <div>
        <FilterWhileSearching />
        {/* <SearchWhileSearching /> */}
      </div>
    );
  }
}
