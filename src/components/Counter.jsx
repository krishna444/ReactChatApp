import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { countHours: 0,countMinutes:0,countSeconds:0,countMilliseconds:0 };
    this.startCounter=this.startCounter.bind(this);
    this.stopCounter=this.stopCounter.bind(this);
    this.startCounterMilliseconds=0;
  } 

  componentDidMount() {   
   // this.startCounter();  
  }

  startCounter(){
    console.log("starting...")
    this.startCounterMilliseconds=new Date().getTime();
    console.log(this.startCounterMilliseconds);
    this.stopCounter();
    this.refs.intervalId=setInterval(()=>{
        let currentMilliseconds=new Date().getTime();
        let diff=currentMilliseconds-this.startCounterMilliseconds;
        console.log("diff="+diff);
       this.parseMilliseconds(diff);
    },199); 
    console.log("created..."+this.refs.intervalId);
  }

  parseMilliseconds(milliSeconds){
    let hours=Math.trunc(milliSeconds/(1000*60*60));
    let minutes=Math.trunc((milliSeconds%(1000*60*60))/(1000*60));
    let seconds=Math.trunc((milliSeconds%(1000*60*60))%(1000*60)/1000);
    let ms=Math.trunc(((milliSeconds%(1000*60*60))%(1000*60))%1000);
    console.log("milliseconds:"+ms);
    //return {hours,minutes,seconds,milliSeconds};
    console.log("hours"+ hours+"minutes="+minutes+" seconds"+seconds+"ms="+ms);
    this.setState({countHours:hours,countMinutes:minutes,countSeconds:seconds,countMilliseconds:ms});
  }

  stopCounter(){
    console.log("stopping timer..."+this.refs.intervalId);
    this.setState({countHours:"00",countMinutes:"00",countSeconds:"00",countMilliseconds:"00"});
    clearInterval(this.refs.intervalId);
  }
  render() {
    return <div><div><span>{this.state.countHours}</span>:<span>{this.state.countMinutes}</span>:<span>{this.state.countSeconds}</span>:<span>{this.state.countMilliseconds}</span></div>
    <div><button className="btn btn-primary" onClick={this.startCounter}>Start</button><button className="btn btn-danger" onClick={this.stopCounter}>Stop</button></div></div>;
  }
}
export default Counter;

