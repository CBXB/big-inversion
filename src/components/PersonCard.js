import React, { useState } from 'react';

const PersonCard = props => {
    const [state, setState] = useState({bdage: props.age})
    
    const clickHandler = e => {setState({bdage: state.bdage + 1})}

    return(
        <div>
            <h1>{props.lastName},{props.firstName}</h1>
            <h3>Age: {state.bdage}</h3>
            <h3>Hair Color: {props.hairColor}</h3>
            <button onClick={clickHandler}> Birthday Button for {props.firstName} {props.lastName} </button>
        </div>
    );
}

export default PersonCard;