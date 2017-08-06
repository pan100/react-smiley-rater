import React, { Component } from 'react';
import './Smiley.css';

class Smiley extends Component {
    constructor(props) { 
        super(props);
		this.colors = this.gradientSlider.calculateHexColorForStep(props.colorStops);
     }
     
     getColor(percentage) {
         return this.colors[percentage];
	 }
     
    gradientSlider = {
	defaultColorStops : ["#b30000", "#ffff1a", "#00e600"],
	minValue : 0,
	maxValue: 100,
	calculateHexColorForStep : function(colorStops) {
		this.colorStops = colorStops? colorStops : this.defaultColorStops;
		let result = [];
		let stepsPerGradient = this.maxValue/(this.colorStops.length -1);

		for(let i = 0; i < this.colorStops.length-1; i++) {
			let percentIncrease = 100/stepsPerGradient/100;

			let firstColor = this.colorStops[i];
			let targetColor = this.colorStops[i+1];

			let firstColorDecArray = this.tools.parseColor(firstColor);
			let targetColorDecArray = this.tools.parseColor(targetColor);

			for(let j = 0; j<=stepsPerGradient; j++) {
				if(j == 0) {
					result.push(firstColor);
				}
				else if(j==stepsPerGradient) {
					result.push(targetColor);
				}
				else {
					let stepColorDecArray = [firstColorDecArray[0] + (percentIncrease*j) * (targetColorDecArray[0] - firstColorDecArray[0]),
										firstColorDecArray[1] + (percentIncrease*j) * (targetColorDecArray[1] - firstColorDecArray[1]),
										firstColorDecArray[2] + (percentIncrease*j) * (targetColorDecArray[2] - firstColorDecArray[2])];
					result.push(this.tools.decimalToHex(stepColorDecArray));
				}
			}
		}

		return result;
	},
	tools : {
		parseColor : function(hexColorString) {
			console.log(hexColorString);
			var m;
			m = hexColorString.match(/^#([0-9a-f]{6})$/i)[1];
    		if( m) {
        	return [parseInt(m.substring(0,2),16),parseInt(m.substring(2,4),16),parseInt(m.substring(4,6),16)];
        	}
		},
		decimalToHex : function(decimalNumberArray){
			var results = [];

			// Maybe check if number is in range 0 - 255, before converting to string?
			results[0] = Math.round(decimalNumberArray[0]).toString(16);
			results[1] = Math.round(decimalNumberArray[1]).toString(16);
			results[2] = Math.round(decimalNumberArray[2]).toString(16);

			for (var i = 0; i<results.length; i++) {
					if(results[i].length < 2) {
						results[i] = "0" + results[i];
					}
			}

			return "#" + results[0] + results[1] + results[2];
		}
	}
    
}
  render() {
      let aspects = {}
      aspects.eyeRadius = (this.props.diameter/50).toFixed();
      if(aspects.eyeRadius === 0) {
          aspects.eyeRadius = 1;
      }
      aspects.eyeXOffset = this.props.diameter/4;
      aspects.eyeYOffset = this.props.diameter/4;
      aspects.mouthMaxMinDivisor = 4;
      aspects.mouthYOffset = 0;
      let mouthY = this.props.diameter-aspects.eyeYOffset;
      let mouthDivisor = 200/this.props.diameter;
      let bezierVariation = (this.props.percentage-50)/mouthDivisor;
      aspects.mouthDString = "M" + aspects.eyeXOffset + "," + mouthY + " q" + this.props.diameter/4 + "," + bezierVariation + " "+ this.props.diameter/2 + ",0";
    return (
        <div>
        <svg height={this.props.diameter} width={this.props.diameter}>
            <circle fill={this.getColor(this.props.percentage)} r={this.props.diameter/2} cx={this.props.diameter/2} cy={this.props.diameter/2}/>
            <circle className="eye" r={aspects.eyeRadius} cx={(this.props.diameter/2)-aspects.eyeXOffset} cy={(this.props.diameter/2)-aspects.eyeYOffset}/>
            <circle className="eye" r={aspects.eyeRadius} cx={(this.props.diameter/2)+aspects.eyeXOffset} cy={(this.props.diameter/2)-aspects.eyeYOffset}/>
            <path className="mouth" d={aspects.mouthDString} fill="none"/>
        </svg>
        </div>
    );
  }
}

export default Smiley;
