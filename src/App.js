import React, { Component } from 'react';
// @ts-ignore
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';


class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        this.setState({ monsters: users })
      });
  }
  monsterFilter(monster, searchField) {
    return `${monster.name.toLowerCase()} ${monster.email.toLowerCase()}`.includes(searchField.toLowerCase())
  }
  handleSearchChange = e => this.setState({ searchField: e.target.value });
  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster => this.monsterFilter(monster, searchField))
    return (
      <div className="App">
      <h1 className="App-title">Monsters Rolodex</h1>
        <SearchBox
          handleChange={this.handleSearchChange}
          placeholder={`search monsters`}
        />
        <CardList monsters={filteredMonsters} search={searchField}/>
      </div>
    );
  }
}
export default App;
