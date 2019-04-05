import React from 'react';


const Smurf = props => {
  console.log(props)
  let smurf = {}

  props.smurfs.map( event => {
   if(`${event.id}` === props.match.params.id) {
      smurf = event
    } 
  })
  console.log(smurf, smurf.name)
  
  return (
    !props.name 
  ? 
      <div className="Smurf">
        <h3>{smurf.name}</h3>
        <strong>{smurf.height} tall</strong>
        <p>{smurf.age} smurf years old</p>
        <div className='buttons'>
          <button>Update</button> 
          <button>Delete</button>
        </div>
      </div>
    
  :
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

