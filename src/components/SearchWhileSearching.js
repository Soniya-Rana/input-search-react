import React, { Component } from "react";
import { countryList } from "../Country";

export default class SearchWhileSearching extends Component {
  state = {
    filteredData: [],
  };

  handleChange = (e) => {
    let tempValue = e.target.value;
    console.log("tempValue", tempValue);
    let tempData = countryList.filter((item) => {
      return item.toLowerCase().includes(tempValue);
    });
    console.log("tempData", tempData);
    this.setState({
      filteredData: tempData,
    });
  };

  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="search country"
            onChange={(e) => this.handleChange(e)}
          />
        </div>
        <div>
          {this.state.filteredData.map((item) => {
            console.log(item);
            return <li key={item}>{item}</li>;
          })}
        </div>
      </div>
    );
  }
}
