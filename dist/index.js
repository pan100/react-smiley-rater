(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["smiley-rater"] = factory();
	else
		root["smiley-rater"] = factory();
})(this, function() {
return webpackJsonpsmiley_rater([1],{

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(23);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(43)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./Smiley.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./Smiley.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Smiley_css__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Smiley_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Smiley_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Smiley = function (_Component) {
	_inherits(Smiley, _Component);

	function Smiley(props) {
		_classCallCheck(this, Smiley);

		var _this = _possibleConstructorReturn(this, (Smiley.__proto__ || Object.getPrototypeOf(Smiley)).call(this, props));

		_this.gradientSlider = {
			defaultColorStops: ["#b30000", "#ffff1a", "#00e600"],
			minValue: 0,
			maxValue: 100,
			calculateHexColorForStep: function calculateHexColorForStep(colorStops) {
				this.colorStops = colorStops ? colorStops : this.defaultColorStops;
				var result = [];
				var stepsPerGradient = this.maxValue / (this.colorStops.length - 1);

				for (var i = 0; i < this.colorStops.length - 1; i++) {
					var percentIncrease = 100 / stepsPerGradient / 100;

					var firstColor = this.colorStops[i];
					var targetColor = this.colorStops[i + 1];

					var firstColorDecArray = this.tools.parseColor(firstColor);
					var targetColorDecArray = this.tools.parseColor(targetColor);

					for (var j = 0; j <= stepsPerGradient; j++) {
						if (j == 0) {
							result.push(firstColor);
						} else if (j == stepsPerGradient) {
							result.push(targetColor);
						} else {
							var stepColorDecArray = [firstColorDecArray[0] + percentIncrease * j * (targetColorDecArray[0] - firstColorDecArray[0]), firstColorDecArray[1] + percentIncrease * j * (targetColorDecArray[1] - firstColorDecArray[1]), firstColorDecArray[2] + percentIncrease * j * (targetColorDecArray[2] - firstColorDecArray[2])];
							result.push(this.tools.decimalToHex(stepColorDecArray));
						}
					}
				}

				return result;
			},
			tools: {
				parseColor: function parseColor(hexColorString) {
					console.log(hexColorString);
					var m;
					m = hexColorString.match(/^#([0-9a-f]{6})$/i)[1];
					if (m) {
						return [parseInt(m.substring(0, 2), 16), parseInt(m.substring(2, 4), 16), parseInt(m.substring(4, 6), 16)];
					}
				},
				decimalToHex: function decimalToHex(decimalNumberArray) {
					var results = [];

					// Maybe check if number is in range 0 - 255, before converting to string?
					results[0] = Math.round(decimalNumberArray[0]).toString(16);
					results[1] = Math.round(decimalNumberArray[1]).toString(16);
					results[2] = Math.round(decimalNumberArray[2]).toString(16);

					for (var i = 0; i < results.length; i++) {
						if (results[i].length < 2) {
							results[i] = "0" + results[i];
						}
					}

					return "#" + results[0] + results[1] + results[2];
				}
			}

		};

		_this.colors = _this.gradientSlider.calculateHexColorForStep(props.colorStops);
		return _this;
	}

	_createClass(Smiley, [{
		key: 'getColor',
		value: function getColor(percentage) {
			return this.colors[percentage];
		}
	}, {
		key: 'render',
		value: function render() {
			var aspects = {};
			aspects.eyeRadius = (this.props.diameter / 50).toFixed();
			if (aspects.eyeRadius === 0) {
				aspects.eyeRadius = 1;
			}
			aspects.eyeXOffset = this.props.diameter / 4;
			aspects.eyeYOffset = this.props.diameter / 4;
			aspects.mouthMaxMinDivisor = 4;
			aspects.mouthYOffset = 0;
			var mouthY = this.props.diameter - aspects.eyeYOffset;
			var mouthDivisor = 200 / this.props.diameter;
			var bezierVariation = (this.props.percentage - 50) / mouthDivisor;
			aspects.mouthDString = "M" + aspects.eyeXOffset + "," + mouthY + " q" + this.props.diameter / 4 + "," + bezierVariation + " " + this.props.diameter / 2 + ",0";
			return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
				'div',
				null,
				__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
					'svg',
					{ height: this.props.diameter, width: this.props.diameter },
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { fill: this.getColor(this.props.percentage), r: this.props.diameter / 2, cx: this.props.diameter / 2, cy: this.props.diameter / 2 }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { className: 'eye', r: aspects.eyeRadius, cx: this.props.diameter / 2 - aspects.eyeXOffset, cy: this.props.diameter / 2 - aspects.eyeYOffset }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('circle', { className: 'eye', r: aspects.eyeRadius, cx: this.props.diameter / 2 + aspects.eyeXOffset, cy: this.props.diameter / 2 - aspects.eyeYOffset }),
					__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('path', { className: 'mouth', d: aspects.mouthDString, fill: 'none' })
				)
			);
		}
	}]);

	return Smiley;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Smiley);

/***/ }),

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(24)(undefined);
// imports


// module
exports.push([module.i, ".eye {\n    fill:black;\n}\n.mouth {\n    stroke: black;\n    stroke-width: 1;    \n}", ""]);

// exports


/***/ })

},[20]);
});