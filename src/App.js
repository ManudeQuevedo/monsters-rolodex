import React, { Component } from "react"
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from "./components/search-box/search-box.components";
import "./App.css"

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users") // <-- Fetch URL 
    .then(response => response.json()) // <-- Taking response to be converted to JSON
    .then(users => this.setState({ monsters: users })) // <-- Taking the data and  injecting it directly to our monsters array.
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value})
  }

  render() {
    const { monsters, searchField } = this.state // We're grabbing the state data
    const filteredMonsters = monsters.filter(monster => 
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      ) // This function makes our search bar work by filtering the props and matching them. 

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={ this.handleChange }
        />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;
