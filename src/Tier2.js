import React, { Component } from 'react'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'


export default class Tier2 extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color,
      childColor: getReducedColor(this.props.color),
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      ...this.state,
      color: nextProps.color,
      childColor: getReducedColor(nextProps.color),
    })
  }
  
  handleClick = (event) => {
    let newColor = getRandomColor()
    event.stopPropagation()
    this.setState({
      ...this.state,
      color: newColor,
      childColor: getReducedColor(newColor)
    })
  }
 
  handleChildClick = (event)=>{
    event.stopPropagation()
    this.setState({
      ...this.state,
      childColor: getRandomColor()
    })
  }

  render() {
    return (
      <div className="tier2" 
           style={{backgroundColor: this.state.color, color: this.state.color}}
           onClick={this.handleClick}
           >
        <Tier3 color={this.state.childColor} 
               handleChildClick={this.handleChildClick}
        />
        <Tier3 color={this.state.childColor} 
               handleChildClick={this.handleChildClick}
        />
      </div>
    )
  }
}