webpackHotUpdate_N_E("pages/index",{

/***/ "./assets/images/loader.png":
false,

/***/ "./components/Preloader.js":
/*!*********************************!*\
  !*** ./components/Preloader.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/logo.png */ "./assets/images/logo.png");
/* harmony import */ var _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\moneyCeo\\apiton\\MoneyCeo\\components\\Preloader.js",
    _this = undefined,
    _s = $RefreshSig$();





var Preloader = function Preloader() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState[0],
      setLoading = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var handleStart = function handleStart(url) {
      return url !== router.pathname && setLoading(true);
    }; // handleComplete event was not firing


    var handleComplete = function handleComplete(url) {
      return url === router.pathname && setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return function () {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });
  return loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "preloader",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
      src: _assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
      width: "75",
      className: "preloader__image",
      alt: ""
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 7
  }, _this);
};

_s(Preloader, "MsU76xFyrXlTQc09gEkuFgUxVXA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"]];
});

_c = Preloader;
/* harmony default export */ __webpack_exports__["default"] = (Preloader);

var _c;

$RefreshReg$(_c, "Preloader");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QcmVsb2FkZXIuanMiXSwibmFtZXMiOlsiUHJlbG9hZGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZUVmZmVjdCIsImhhbmRsZVN0YXJ0IiwidXJsIiwicGF0aG5hbWUiLCJoYW5kbGVDb21wbGV0ZSIsImV2ZW50cyIsIm9uIiwib2ZmIiwiUHJlbG9hZGVySW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUFBOztBQUN0QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURzQixrQkFHUUMsc0RBQVEsQ0FBQyxLQUFELENBSGhCO0FBQUEsTUFHZkMsT0FIZTtBQUFBLE1BR05DLFVBSE07O0FBS3RCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxHQUFEO0FBQUEsYUFBU0EsR0FBRyxLQUFLUCxNQUFNLENBQUNRLFFBQWYsSUFBMkJKLFVBQVUsQ0FBQyxJQUFELENBQTlDO0FBQUEsS0FBcEIsQ0FEYyxDQUVkOzs7QUFDQSxRQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNGLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLEtBQUtQLE1BQU0sQ0FBQ1EsUUFBZixJQUEyQkosVUFBVSxDQUFDLEtBQUQsQ0FBOUM7QUFBQSxLQUF2Qjs7QUFFQUosVUFBTSxDQUFDVSxNQUFQLENBQWNDLEVBQWQsQ0FBaUIsa0JBQWpCLEVBQXFDTCxXQUFyQztBQUNBTixVQUFNLENBQUNVLE1BQVAsQ0FBY0MsRUFBZCxDQUFpQixxQkFBakIsRUFBd0NGLGNBQXhDO0FBQ0FULFVBQU0sQ0FBQ1UsTUFBUCxDQUFjQyxFQUFkLENBQWlCLGtCQUFqQixFQUFxQ0YsY0FBckM7QUFFQSxXQUFPLFlBQU07QUFDWFQsWUFBTSxDQUFDVSxNQUFQLENBQWNFLEdBQWQsQ0FBa0Isa0JBQWxCLEVBQXNDTixXQUF0QztBQUNBTixZQUFNLENBQUNVLE1BQVAsQ0FBY0UsR0FBZCxDQUFrQixxQkFBbEIsRUFBeUNILGNBQXpDO0FBQ0FULFlBQU0sQ0FBQ1UsTUFBUCxDQUFjRSxHQUFkLENBQWtCLGtCQUFsQixFQUFzQ0gsY0FBdEM7QUFDRCxLQUpEO0FBS0QsR0FkUSxDQUFUO0FBZ0JBLFNBQ0VOLE9BQU8saUJBQ0w7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBLDJCQUNFO0FBQ0UsU0FBRyxFQUFFVSw4REFEUDtBQUVFLFdBQUssRUFBQyxJQUZSO0FBR0UsZUFBUyxFQUFDLGtCQUhaO0FBSUUsU0FBRyxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGSjtBQVlELENBakNEOztHQUFNZCxTO1VBQ1dFLHFEOzs7S0FEWEYsUztBQW1DU0Esd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYjBkNGE5NGMyODE4MjhlOGJlZWMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgUHJlbG9hZGVySW1hZ2UgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmdcIlxuXG5jb25zdCBQcmVsb2FkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICh1cmwpID0+IHVybCAhPT0gcm91dGVyLnBhdGhuYW1lICYmIHNldExvYWRpbmcodHJ1ZSlcbiAgICAvLyBoYW5kbGVDb21wbGV0ZSBldmVudCB3YXMgbm90IGZpcmluZ1xuICAgIGNvbnN0IGhhbmRsZUNvbXBsZXRlID0gKHVybCkgPT4gdXJsID09PSByb3V0ZXIucGF0aG5hbWUgJiYgc2V0TG9hZGluZyhmYWxzZSlcblxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZVN0YXJ0XCIsIGhhbmRsZVN0YXJ0KVxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsIGhhbmRsZUNvbXBsZXRlKVxuICAgIHJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUVycm9yXCIsIGhhbmRsZUNvbXBsZXRlKVxuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VTdGFydFwiLCBoYW5kbGVTdGFydClcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VDb21wbGV0ZVwiLCBoYW5kbGVDb21wbGV0ZSlcbiAgICAgIHJvdXRlci5ldmVudHMub2ZmKFwicm91dGVDaGFuZ2VFcnJvclwiLCBoYW5kbGVDb21wbGV0ZSlcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICBsb2FkaW5nICYmIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e1ByZWxvYWRlckltYWdlfVxuICAgICAgICAgIHdpZHRoPVwiNzVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cInByZWxvYWRlcl9faW1hZ2VcIlxuICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlbG9hZGVyXG4iXSwic291cmNlUm9vdCI6IiJ9