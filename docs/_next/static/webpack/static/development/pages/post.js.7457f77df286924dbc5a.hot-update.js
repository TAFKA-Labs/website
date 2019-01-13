webpackHotUpdate("static/development/pages/post.js",{

/***/ "./utils/analytics.js":
/*!****************************!*\
  !*** ./utils/analytics.js ***!
  \****************************/
/*! exports provided: initGA, logPageView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initGA", function() { return initGA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logPageView", function() { return logPageView; });
/* harmony import */ var react_ga__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-ga */ "./node_modules/react-ga/dist/esm/index.js");

var initGA = function initGA() {
  console.log('GA init');
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].initialize('UA-132321665-1');
};
var logPageView = function logPageView() {
  console.log("Logging pageview for ".concat(window.location.pathname));
  react_ga__WEBPACK_IMPORTED_MODULE_0__["default"].pageview(window.location.pathname + window.location.search);
}; // export const logEvent = (category = '', action = '') => {
//   if (category && action) {
//     ReactGA.event({ category, action })
//   }
// }
// export const logException = (description = '', fatal = false) => {
//   if (description) {
//     ReactGA.exception({ description, fatal })
//   }
// }

/***/ })

})
//# sourceMappingURL=post.js.7457f77df286924dbc5a.hot-update.js.map