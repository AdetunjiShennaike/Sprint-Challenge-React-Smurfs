import React, { Component } from 'react';
// import axios from 'axios'
import { Link } from 'react-router-dom'
import Smurf from './Smurf';


class Smurfs extends Component {

  dSmurf = event => {
    event.preventDefault()
    console.log(event)
    this.props.deleteSmurf()
  }

  render() {
    return (
      <div className="Smurfs">
        <h1>Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (              
              <div>
                <Link to={`/smurf/${smurf.id}`}>            
                  <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                  />
                </Link>
                <div className='buttons'>
                <button onclick={this.dSmurf}>Delete</button>
                </div> 
              </div> 
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
