'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trackPosition = exports.toRgbaString = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var toRgbaString = exports.toRgbaString = function toRgbaString(rgbaObject) {
  return 'rgba(' + rgbaObject.r + ', ' + rgbaObject.g + ', ' + rgbaObject.b + ', ' + rgbaObject.a + ')';
};

var trackPosition = exports.trackPosition = function trackPosition(_ref) {
  var thumbSize = _ref.thumbSize;
  var height = _ref.height;
  return {
    top: (thumbSize - Math.min(height, thumbSize)) / 2,
    height: height + 'px'
  };
};

var Range = function (_React$Component) {
  _inherits(Range, _React$Component);

  function Range() {
    _classCallCheck(this, Range);

    var _this = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this));

    _this.state = { value: 0 };
    return _this;
  }

  _createClass(Range, [{
    key: 'onChange',
    value: function onChange(e) {
      if (!this.props.readOnly) {
        var newVal = parseInt(e.nativeEvent ? e.nativeEvent.target.value : e, 10);
        this.setState({ value: newVal });
        this.props.onChange && this.props.onChange(newVal);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var val = Math.min(this.props.max, this.state.value || this.props.value);
      var min = this.props.min;
      var max = this.props.max;

      var percentProgress = val / (max - min);

      var componentHeight = Math.max(this.props.height, this.props.thumbSize);

      return _react2.default.createElement(
        'div',
        {
          style: { width: this.props.width } },
        _react2.default.createElement(
          'div',
          {
            id: 'rrp-baseDiv',
            style: {
              height: componentHeight + 'px',
              border: '0 none',
              position: 'relative',
              left: 0,
              top: 0,
              overflow: 'visible'
            } },
          _react2.default.createElement('style', { dangerouslySetInnerHTML: {
              __html: '\n                 input[type=range]::-ms-track {\n                   width:100%;\n                   height:100%;\n\n                   -webkit-appearance:none;\n                   margin:0px;\n                   padding:0px;\n                   border:0 none;\n\n                   background:transparent;\n                   color:transparent;\n                   overflow:visible;\n                 }\n\n                 input[type=range]::-moz-range-track {\n                   width:100%;\n                   height:100%;\n\n                   -moz-appearance:none;\n                   margin:0px;\n                   padding:0px;\n                   border:0 none;\n\n                   background:transparent;\n                   color:transparent;\n                   overflow:visible;\n                 }\n\n                 input[type=range] {\n                   cursor: pointer;\n\n                   -webkit-appearance:none;\n                   padding:0px;\n                   border:0 none;\n\n                   background:transparent;\n                   color:transparent;\n                   overflow:visible;\n                 }\n\n                 input[type=range]:focus::-webkit-slider-runnable-track {\n                   background:transparent;\n                   border:transparent;\n                 }\n\n                 input[type=range]:focus {\n                   outline: none;\n                 }\n\n                 input[type=range]::-ms-thumb {\n                   width:12px;\n                   height:12px;\n\n                   border-radius:0px;\n                   border:0 none;\n                   background:transparent;\n                 }\n                 input[type=range]::-moz-range-thumb {\n                   width:12px;\n                   height:12px;\n\n                   border-radius:0px;\n                   border:0 none;\n                   background:transparent;\n                 }\n                 input[type=range]::-webkit-slider-thumb {\n                   width:12px;\n                   height:12px;\n\n                   border-radius:0px;\n                   border:0 none;\n                   background:transparent;\n                   -webkit-appearance:none;\n                 }\n\n                 input[type=range]::-ms-fill-lower {\n                   background:transparent;\n                   border:0 none;\n                 }\n                 input[type=range]::-ms-fill-upper {\n                   background:transparent;\n                   border:0 none;\n                 }\n                 input[type=range]::-ms-tooltip {\n                    display: none;\n                 }'
            } }),
          _react2.default.createElement('div', {
            id: 'rrp-track',
            style: _extends({
              border: 0,
              position: 'absolute',
              background: toRgbaString(this.props.trackColor),
              borderRadius: this.props.height + 'px',
              width: '100%'
            }, trackPosition(this.props)) }),
          _react2.default.createElement('div', {
            id: 'rrp-fill',
            style: _extends({
              border: 0,
              position: 'absolute',
              pointerEvents: 'none',
              borderRadius: this.props.height + 'px',
              background: toRgbaString(this.props.fillColor),
              width: 'calc(100% * ' + percentProgress + ' + ' + (1 - percentProgress) * componentHeight + 'px)'
            }, trackPosition(this.props)) }),
          this.props.hideThumb ? null : _react2.default.createElement('div', {
            id: 'rrp-thumb',
            style: {
              position: 'absolute',
              top: 0,
              border: '0 none',
              padding: 0,
              margin: 0,
              textAlign: 'center',
              pointerEvents: 'none',
              width: componentHeight,
              height: componentHeight + 'px',
              borderRadius: componentHeight + 'px',
              background: toRgbaString(this.props.thumbColor),
              boxShadow: '0 0 3px black',
              left: 'calc((100% - ' + componentHeight + 'px) * ' + percentProgress + ')' } }),
          _react2.default.createElement('input', {
            style: _extends({}, trackPosition(this.props), {
              width: 'calc(100% - ' + componentHeight + 'px)',
              marginLeft: componentHeight / 2,
              marginRight: componentHeight / 2,
              top: 0,
              height: componentHeight,
              WebkitAppearance: 'none',
              background: 'transparent',
              position: 'absolute',
              left: 0,
              overflow: 'visible',
              zIndex: 100
            }),
            type: 'range',
            onChange: this.onChange.bind(this),
            min: min,
            max: max })
        )
      );
    }
  }]);

  return Range;
}(_react2.default.Component);

Range.defaultProps = {
  fillColor: { r: 255, g: 255, b: 255, a: 1 },
  trackColor: { r: 255, g: 255, b: 255, a: 0.5 },
  thumbColor: { r: 255, g: 255, b: 255, a: 1 },
  thumbSize: 12,
  height: 6,
  min: 0,
  max: 100,
  width: 300,
  value: 0,
  onChange: function onChange() {}
};

var colorWithAlpha = {
  r: _react.PropTypes.number.isRequired,
  g: _react.PropTypes.number.isRequired,
  b: _react.PropTypes.number.isRequired,
  a: _react.PropTypes.number.isRequired
};

Range.propTypes = {
  fillColor: _react.PropTypes.shape(colorWithAlpha),
  trackColor: _react.PropTypes.shape(colorWithAlpha),
  thumbColor: _react.PropTypes.shape(colorWithAlpha),
  hideThumb: _react.PropTypes.bool,
  height: _react.PropTypes.number,
  thumbSize: _react.PropTypes.number,
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  onChange: _react.PropTypes.func,
  value: _react.PropTypes.number,
  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  readOnly: _react.PropTypes.bool
};

exports.default = Range;
