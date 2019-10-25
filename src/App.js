import React, { Component } from 'react';
// @ts-ignore
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  state = {
    monsters: [],
    searchField: ''
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        console.log(users);
        this.setState({ monsters: users })

      });
  }

  render() {
    const { searchField, monsters } = this.state;
    const filteredMonsters = monsters.filter(monster =>
        `${monster.name.toLowerCase()} ${monster.email.toLowerCase()}`.includes(searchField)
     )
    return (
      <div className="App">
        <input
          type="search"
          placeholder="search monsters"
          onChange={e => this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters} search={searchField} />
      </div>
    );
  }
}
export default App;
