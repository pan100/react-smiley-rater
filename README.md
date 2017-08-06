# React-Smiley-Rater component

This component creates a smiley where the mouth angle is a function of a
number between 0 and 100. Also it changes colors.

## Usage

1. npm install react-smiley-rater
2. remember to use import: import Smiley from 'react-smiley-rater';
Here is some boilerplate code:

```JavaScript
import React from 'react';
import Smiley from 'react-smiler-rater';

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
```