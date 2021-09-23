import React, { Component} from 'react'
import CardList from './CardList'
import Search from './Search'
import robots from './robots'
class App extends Component {
    constructor() {
      super()
      this.state = {
        robots: robots,
        searchfield: ''
      }
    }
  
    
    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }
  
    render() {
      const { robots, searchfield } = this.state;
      const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      return (
          <div className='tc'>
            <h1 className='f1 sans-serif light-blue hover-blue'>RoboFriends</h1>
            <Search searchChange={this.onSearchChange}/>
              <CardList robots={filteredRobots} />
          </div>
        );
    }
  }
  
  export default App;