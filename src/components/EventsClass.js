import React, { Component } from 'react'

export class EventsClass extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       test: "is this working"
    }
  }

  clickHandler(){
      console.log("Clicked the class button")
      console.log('this', this)
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>click me - class component</button>
    </div>
    )
  }
}

export default EventsClass