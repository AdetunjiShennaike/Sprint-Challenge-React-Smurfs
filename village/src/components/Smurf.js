import React from 'react';

// import axios from 'axios'
// import { Link } from 'react-router-dom'

//styles 
import styled from 'styled-components'

let Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px dashed darkblue;
`



const Smurf = props => {
  console.log(props)
  let smurf = {}

  //logic to populate individual smurf page
  props.smurfs.map( event => {
   if(`${event.id}` === props.match.params.id) {
      smurf = event
    } 
  })

  let dSmurf = event => {
    event.preventDefault()
    props.deleteSmurf(smurf.id)
  }

  return (
  //ternary to make sure that the data is switched based on the home page and the individual smurf page
    !props.name 
  ? 
    <div className="Smurf">
      <div className='info'>
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
      </div>
      <div className='buttons'>
        <button>Update</button> 
        <button onClick={dSmurf}>Delete</button>
      </div>
    </div>    
  :
    <div className="Smurf">
      <div className='info'>
        <h3>{props.name}</h3>
        <strong>{props.height} tall</strong>
        <p>{props.age} smurf years old</p>        
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

