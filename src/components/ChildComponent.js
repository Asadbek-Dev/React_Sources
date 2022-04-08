import React, { Component } from 'react'

export default class ChildComponent extends Component {
  render(props) {
    return (
      <div>
          <button onClick={()=>this.props.greetHandler('nima gap')}>Greet Parent</button>
      </div>
    )
  }
}
