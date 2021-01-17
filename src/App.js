import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component.jsx';
import {SearchBox} from './components/search-box/search-box.component.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() { //This LifeCycle method of Component is used, where on mounting/rendering this, an API call is done to get the data and update it.
    fetch('https://jsonplaceholder.typicode.com/users') //As an API call donr using the in-built JS fetch().
      .then(response => response.json()) //This returns a new Promise, which then needs to be used.
      .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({searchField : e.target.value})
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster =>
        monster.name.toLowerCase().includes(searchField.toLowerCase())
      )

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
          placeholder='Search Monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

/*
Life Cycle Merhods, called at different stages when this component gets rendered.
componentDidMount - When the component is called certain functions can be done. Like an API request. Can use the fetch() -> Internal Javascript to do the API call.
This API call gives back the response in form of a Promise.
*/
export default App;
