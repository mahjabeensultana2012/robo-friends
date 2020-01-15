import React from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: '',
    };
  }

  handleChange = event => {
    console.log(event.target.value);
  };

  render() {
    return (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox handleChange={this.handleChange} />
        <CardList robots={this.state.robots} />
      </div>
    );
  }
}

export default App;
