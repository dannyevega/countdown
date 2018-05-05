import React, { Component } from 'react';
import './index.css';

export default class Timer extends Component {
  constructor(props){
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount = () => {
    this.timeRemainingTil(this.props.countdown);
  }

  componentDidMount() {
    setInterval(() => this.timeRemainingTil(this.props.countdown), 1000);
  }

  addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }

  timeRemainingTil = (countdown) => {
    const time = Date.parse(countdown) - Date.parse(new Date());
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    this.setState({ days, hours, minutes, seconds });
  }

  render(){
    return (
      <div>
        <div className='days'>{this.addZero(this.state.days)} days</div>
        <div className='hours'>{this.addZero(this.state.hours)} hours</div>
        <div className='minutes'>{this.addZero(this.state.minutes)} minutes</div>
        <div className='seconds'>{this.addZero(this.state.seconds)} seconds</div>
      </div>      
    )
  }
}