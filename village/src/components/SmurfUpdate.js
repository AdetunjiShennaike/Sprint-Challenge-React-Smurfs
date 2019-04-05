import React, { Component } from 'react';

//import ajax requesting tool
import axios from 'axios'

class SmurfUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: '',
      // currentSmurf= props.currentSmurf
    };
  }

  updateSmurf = event => {
    event.preventDefault();
    // add code to create the smurf using the api
    // let newSmurf = {
    //   name: this.state.name,
    //   age: this.state.age,
    //   height: this.state.height
    // }

    // console.log(newSmurf)
    // axios.put(`http://localhost:3333/smurfs/${id}`)
    // .then( res => {
    //   console.log(res)
    //   this.props.history.push('/')
    // })
    // .catch( err => {
    //   console.log(err)
    // })


    // this.setState({
    //   name: '',
    //   age: '',
    //   height: ''
    // });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfUpdate;
