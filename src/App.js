import React, { Component } from 'react';
// @ts-ignore
import './App.css';
import { CardList } from './components/card-list/card-list.component';

class App extends Component {
  state = {
    monsters: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then( response => response.json() )
      .then( users => {
        console.log(users);
        this.setState({ monsters: users })

      });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}
export default App;
