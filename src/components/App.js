import React, { Component} from 'react'
import CardList from './CardList'
import Search from './Search'
import Scroll from './Scroll'

class App extends Component {
    constructor() {
      super()
      this.state = {
        robots: [],
        searchfield: ''
      }
    }
  
    componentDidMount(){
      fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(response => response.json())
      .then(user => {this.setState( { robots: user } ) })
    }

    onSearchChange = (event) => {
      this.setState({ searchfield: event.target.value })
    }
  
    render(){
      const { robots, searchfield } = this.state;
      const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
      })
      if(this.state.robots.length === 0)
      {
        return <h1>Loading...</h1>
      }
      else{
        return (
          <div className='tc'>
            <h1 className='f1 sans-serif light-blue hover-blue'>RoboFriends</h1>
            <Search searchChange={this.onSearchChange}/>
            <Scroll>
              <CardList robots={filteredRobots} />
            </Scroll>
          </div>
        );
      }
    }
  }
  
  export default App;