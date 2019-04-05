import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom'


//import components
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Smurf from './components/Smurf';
import SmurfUpdate from './components/SmurfUpdate';

//import ajax tool
import axios from 'axios'

//styling
import styled from 'styled-components'

let Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 2rem;
  margin: 10px;
  
`


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      name: '',
      age: '',
      height: ''
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  componentDidMount() {
    axios.get('http://localhost:3333/smurfs')
    .then( res => {
      this.setState({
        smurfs: res.data
      })
    })
    .catch( err => {
      console.log(err)
    })
  }

  //new smurf
  addSmurf = newSmurf => {
    axios.post('http://localhost:3333/smurfs', newSmurf)
    .then( res => {
      // console.log(res)
      this.setState({
        smurfs: res.data
      })
      this.props.history.push('/')
    })
    .catch( err => {
      console.log(err)
    })


    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  //handler for the
  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  //delete function
  deleteSmurf = id => {
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then( res => {
      console.log(res)
      this.setState({
        smurfs: res.data
      })
      this.props.history.push('/')
    })
    .catch( err => {
      console.log(err)
    })
  }


  render() {
    console.log(this.state.smurfs)
    return (
      <div>
        <div>
          <Nav>
            <NavLink className='nav' exact to='/'>
              Smurf List
            </NavLink>
            <NavLink className='nav' exact to='/smurfForm'>
              Add Smurf
            </NavLink>
          </Nav>
        </div>
        <div className="App">
          <Route path='/smurfForm' 
            render={ props => <SmurfForm {...props} addSmurf={this.addSmurf}/>}
          />
          <Route path='/updateSmurf' 
            render={ props => <SmurfUpdate {...props} smurfs={this.state.smurfs} currentSmurf={this.currentSmurf}/>}
          />
          <Route exact path='/' 
            render={ props => <Smurfs {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}/>}
          />
          <Route path='/smurf/:id'
            render={props => <Smurf {...props} smurfs={this.state.smurfs} deleteSmurf={this.deleteSmurf}/>}
          />
        </div>
      </div>
    );
  }
}

export default App;
