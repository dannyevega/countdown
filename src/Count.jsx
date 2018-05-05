import React, { Component } from 'react';
import Timer from './Timer';
import { Form, FormControl, Button } from 'react-bootstrap';
import './index.css'

export default class Count extends Component {
  constructor(props){
    super(props);

    this.state = {
      countdown: 'December 25, 2018',
      newCountdown: ''
    }
  }

  handleChange = (e) => {
    let value = e.target.value ? e.target.value : '';
    this.setState({
      newCountdown: value
    });
  }

  changeDate = (e) => {
    e.preventDefault();
    this.setState({
      countdown: this.state.newCountdown,
      newCountdown: ''
    });
  }

  render(){
    return (
      <div className='count'>
        <h1>Countdown to {this.state.countdown}</h1>
        <h5>Please enter in 'Month Day, Year' format as seen above</h5>
        <Timer 
          countdown={this.state.countdown}
        />
        <Form inline onSubmit={this.changeDate}>
          <FormControl
            className="countdown-input"
            type='text'
            placeholder='new date'
            value={this.state.newCountdown}
            onChange={this.handleChange}
          />
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}