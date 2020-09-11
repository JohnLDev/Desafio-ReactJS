"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

require("./styles.css");

var _hearder = _interopRequireDefault(require("./components/hearder"));

var _api = _interopRequireDefault(require("./services/api"));

function App() {
  var _useState = (0, _react.useState)([]),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      repository = _useState2[0],
      setRepository = _useState2[1];

  (0, _react.useEffect)(function () {
    // não deve usar async no useEffect
    _api.default.get('/repositories').then(function (response) {
      setRepository(response.data);
    });
  }, []);

  function handleAddRepository() {
    return _handleAddRepository.apply(this, arguments);
  }

  function _handleAddRepository() {
    _handleAddRepository = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _handleAddRepository.apply(this, arguments);
  }

  function handleRemoveRepository(_x) {
    return _handleRemoveRepository.apply(this, arguments);
  }

  function _handleRemoveRepository() {
    _handleRemoveRepository = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(id) {
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _handleRemoveRepository.apply(this, arguments);
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_hearder.default, {
    title: "Repositories"
  }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("ul", {
    "data-testid": "repository-list"
  }, /*#__PURE__*/_react.default.createElement("li", null, projects.map(function (repository) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: repository.id
    }, repository.title);
  }), /*#__PURE__*/_react.default.createElement("button", {
    onClick: function onClick() {
      return handleRemoveRepository(1);
    }
  }, "Remover"))), /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleAddRepository
  }, "Adicionar")));
}

var _default = App;
exports.default = _default;
