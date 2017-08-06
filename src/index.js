// Demo component
// this is only example component

import React from 'react';
import Smiley from './Smiley';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderVal : 1
    }
  }

    sliderChange(event) {
    this.setState({sliderVal: event.target.value});
  }

    componentDidMount() {

    }

    render() {
        return (
      <div>
      <input itemID="slider" type="range" value={this.state.sliderVal} min="0" max="100" step="1" onChange={this.sliderChange.bind(this)} />
      <Smiley diameter="500" percentage={this.state.sliderVal} colorStops={["#b30000", "#00e600", "#4286f4", "#d91ae0"]}/>
      </div>
        )
    }
}

export default MyComponent;