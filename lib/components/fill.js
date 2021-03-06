'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fill = undefined;

var _taggedTemplateLiteralLoose2 = require('babel-runtime/helpers/taggedTemplateLiteralLoose');

var _taggedTemplateLiteralLoose3 = _interopRequireDefault(_taggedTemplateLiteralLoose2);

var _templateObject = (0, _taggedTemplateLiteralLoose3.default)(['\n  flex: 1;\n'], ['\n  flex: 1;\n']);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Fill = exports.Fill = _styledComponents2.default.div(_templateObject);

Fill.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};