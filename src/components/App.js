import React from 'react'
import Card from './Card'
import robots from './robots'
import Search from './Search'


const App = () => {

    const robotList = robots.map(item => <Card 
        key = {item.id} 
        id = {item.id} 
        name = {item.name}
        username = {item.username} 
        email = {item.email}
        />)

    return(
        <div className = 'tc'>
            <h1>Robo Friends</h1>
            <Search/>
            {robotList}
        </div>
    )
}

export default App