import React from "react";
import { useState } from "react";

/* class Clicker extends React.Component {
  state = {
    count: 0,
  }
  handleCount = () => {
    this.setState({ count: this.state.count+1 });
  }

  render = () => {
    return <><button onClick={this.handleCount}>click me {this.state.count} </button></>
  }
} */

function Clicker(){
  const [counter,setCounter]=useState(0);
  const handleClick =()=>{
    setCounter(counter+1);
  }
  return <><button onClick={handleClick}>click me {counter}</button></>
}
export default Clicker