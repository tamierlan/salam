Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _glamor = require("glamor");

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _AutoHideFollowButton = _interopRequireDefault(require("./ScrollToBottom/AutoHideFollowButton"));

var _Composer = _interopRequireDefault(require("./ScrollToBottom/Composer"));

var _Panel = _interopRequireDefault(require("./ScrollToBottom/Panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ROOT_CSS = (0, _glamor.css)({
  position: 'relative'
});

var _default = function _default(_ref) {
  var checkInterval = _ref.checkInterval,
      children = _ref.children,
      className = _ref.className,
      debounce = _ref.debounce,
      followButtonClassName = _ref.followButtonClassName,
      mode = _ref.mode,
      scrollViewClassName = _ref.scrollViewClassName;
  return _react.default.createElement(_Composer.default, {
    checkInterval: checkInterval,
    debounce: debounce,
    mode: mode === 'bottom' ? 'bottom' : 'top'
  }, _react.default.createElement("div", {
    className: (0, _classnames.default)(ROOT_CSS + '', (className || '') + '')
  }, _react.default.createElement(_Panel.default, {
    className: scrollViewClassName
  }, children), _react.default.createElement(_AutoHideFollowButton.default, {
    className: followButtonClassName
  })));
};

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9CYXNpY1Njcm9sbFRvQm90dG9tLmpzIl0sIm5hbWVzIjpbIlJPT1RfQ1NTIiwicG9zaXRpb24iLCJjaGVja0ludGVydmFsIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJkZWJvdW5jZSIsImZvbGxvd0J1dHRvbkNsYXNzTmFtZSIsIm1vZGUiLCJzY3JvbGxWaWV3Q2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsaUJBQUk7QUFDbkJDLEVBQUFBLFFBQVEsRUFBRTtBQURTLENBQUosQ0FBakI7O2VBSWU7QUFBQSxNQUNiQyxhQURhLFFBQ2JBLGFBRGE7QUFBQSxNQUViQyxRQUZhLFFBRWJBLFFBRmE7QUFBQSxNQUdiQyxTQUhhLFFBR2JBLFNBSGE7QUFBQSxNQUliQyxRQUphLFFBSWJBLFFBSmE7QUFBQSxNQUtiQyxxQkFMYSxRQUtiQSxxQkFMYTtBQUFBLE1BTWJDLElBTmEsUUFNYkEsSUFOYTtBQUFBLE1BT2JDLG1CQVBhLFFBT2JBLG1CQVBhO0FBQUEsU0FTYiw2QkFBQyxpQkFBRDtBQUNFLElBQUEsYUFBYSxFQUFHTixhQURsQjtBQUVFLElBQUEsUUFBUSxFQUFHRyxRQUZiO0FBR0UsSUFBQSxJQUFJLEVBQUdFLElBQUksS0FBSyxLQUFULEdBQWlCLEtBQWpCLEdBQXlCO0FBSGxDLEtBS0U7QUFBSyxJQUFBLFNBQVMsRUFBRyx5QkFBV1AsUUFBUSxHQUFHLEVBQXRCLEVBQTBCLENBQUNJLFNBQVMsSUFBSSxFQUFkLElBQW9CLEVBQTlDO0FBQWpCLEtBQ0UsNkJBQUMsY0FBRDtBQUFPLElBQUEsU0FBUyxFQUFHSTtBQUFuQixLQUNJTCxRQURKLENBREYsRUFJRSw2QkFBQyw2QkFBRDtBQUFzQixJQUFBLFNBQVMsRUFBR0c7QUFBbEMsSUFKRixDQUxGLENBVGE7QUFBQSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gJ2NsYXNzbmFtZXMnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IEF1dG9IaWRlRm9sbG93QnV0dG9uIGZyb20gJy4vU2Nyb2xsVG9Cb3R0b20vQXV0b0hpZGVGb2xsb3dCdXR0b24nO1xuaW1wb3J0IENvbXBvc2VyIGZyb20gJy4vU2Nyb2xsVG9Cb3R0b20vQ29tcG9zZXInO1xuaW1wb3J0IFBhbmVsIGZyb20gJy4vU2Nyb2xsVG9Cb3R0b20vUGFuZWwnO1xuXG5jb25zdCBST09UX0NTUyA9IGNzcyh7XG4gIHBvc2l0aW9uOiAncmVsYXRpdmUnXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgKHtcbiAgY2hlY2tJbnRlcnZhbCxcbiAgY2hpbGRyZW4sXG4gIGNsYXNzTmFtZSxcbiAgZGVib3VuY2UsXG4gIGZvbGxvd0J1dHRvbkNsYXNzTmFtZSxcbiAgbW9kZSxcbiAgc2Nyb2xsVmlld0NsYXNzTmFtZVxufSkgPT5cbiAgPENvbXBvc2VyXG4gICAgY2hlY2tJbnRlcnZhbD17IGNoZWNrSW50ZXJ2YWwgfVxuICAgIGRlYm91bmNlPXsgZGVib3VuY2UgfVxuICAgIG1vZGU9eyBtb2RlID09PSAndG9wJyA/ICd0b3AnIDogJ2JvdHRvbSd9XG4gID5cbiAgICA8ZGl2IGNsYXNzTmFtZT17IGNsYXNzTmFtZXMoUk9PVF9DU1MgKyAnJywgKGNsYXNzTmFtZSB8fCAnJykgKyAnJykgfT5cbiAgICAgIDxQYW5lbCBjbGFzc05hbWU9eyBzY3JvbGxWaWV3Q2xhc3NOYW1lIH0+XG4gICAgICAgIHsgY2hpbGRyZW4gfVxuICAgICAgPC9QYW5lbD5cbiAgICAgIDxBdXRvSGlkZUZvbGxvd0J1dHRvbiBjbGFzc05hbWU9eyBmb2xsb3dCdXR0b25DbGFzc05hbWUgfSAvPlxuICAgIDwvZGl2PlxuICA8L0NvbXBvc2VyPlxuIl19
