import React, { Component } from "react";

const itemStyle = {
  flex:"1 0 auto", 
  flexDirection: "col",
  textAlign: "center"
}

const countStyle = {
  fontSize:"2.2rem",
fontFamily:'New Font',
}

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }
  componentWillMount() {
    this.getTimeUntil(this.props.datetime);
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.datetime), 1000);
  }
  leading0(num) {
    return num < 10 ? "0" + num : num;
  }
  getTimeUntil(datatime) {
    const time = Date.parse(datatime) - Date.parse(new Date());
    if (time < 0) {
      this.setState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    } else {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
      const days = Math.floor(time / (1000 * 60 * 60 * 24));
      this.setState({ days, hours, minutes, seconds });
    }
  }
  render() {
    return (
      <div style={{"display":"flex"}}>
        <div className="countdown-days" style={itemStyle}>
          <div style={countStyle}>{this.leading0(this.state.days)}</div>
           Days
        </div>
        <div className="countdown-hours" style={itemStyle}>
          <div style={countStyle}>{this.leading0(this.state.hours)} </div>
          Hours
        </div>
        <div className="countdown-minutes" style={itemStyle}>
          <div style={countStyle}>{this.leading0(this.state.minutes)}</div> 
          Minutes
        </div>
        <div className="countdown-seconds" style={itemStyle}>
          <div style={countStyle}>{this.leading0(this.state.seconds)}</div> 
          Seconds
        </div>
      </div>
    );
  }
}
export default Countdown;
