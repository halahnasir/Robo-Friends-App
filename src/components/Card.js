import React from 'react'

const Card = (props) => {
    return(
        <div className = 'bg-lightest-blue black dib br3 pa3 ma2 grow tc shadow-5'>
            <img src = {`https://robohash.org/${props.id}?200x200`} alt = 'robo'/>
            <div>
                <h2>{props.name}</h2>
                {/* <p>{props.username}</p> */}
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default Card