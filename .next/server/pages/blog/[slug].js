"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[slug]";
exports.ids = ["pages/blog/[slug]"];
exports.modules = {

/***/ "./pages/blog/[slug].js":
/*!******************************!*\
  !*** ./pages/blog/[slug].js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! graphql-request */ \"graphql-request\");\n/* harmony import */ var graphql_request__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(graphql_request__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst graphcms = new graphql_request__WEBPACK_IMPORTED_MODULE_2__.GraphQLClient(\"https://api-eu-west-2.hygraph.com/v2/cl65zao3d98lk01ukerb2coua/master\");\nconst QUERY = graphql_request__WEBPACK_IMPORTED_MODULE_2__.gql`\n  query Post($slug: String!) {\n    post(where: { slug: $slug }) {\n        id,\n        title,\n        datePublished,\n        slug,\n        content{\n            html\n        }\n        coverPhoto{\n            url,\n            id\n        }\n    }\n  }\n`;\nconst SLUGLIST = graphql_request__WEBPACK_IMPORTED_MODULE_2__.gql`\n{\n    posts{\n        slug\n    }\n}\n`;\nasync function getStaticPaths() {\n    const { posts  } = await graphcms.request(SLUGLIST);\n    return {\n        paths: posts.map((post)=>({\n                params: {\n                    slug: post.slug\n                }\n            })),\n        fallback: false\n    };\n}\nasync function getStaticProps({ params  }) {\n    const slug = params.slug;\n    const data = await graphcms.request(QUERY, {\n        slug\n    });\n    const post = data.post;\n    return {\n        props: {\n            post\n        },\n        revalidate: 10\n    };\n}\nconst blogpost = ({ post  })=>{\n    console.log({\n        post\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"blogDetails contentSection padding-bottom-120\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: post.coverPhoto.url,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/calvin/nextportfolio/pages/blog/[slug].js\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/home/calvin/nextportfolio/pages/blog/[slug].js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: post.title\n                }, void 0, false, {\n                    fileName: \"/home/calvin/nextportfolio/pages/blog/[slug].js\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"testing\",\n                    dangerouslySetInnerHTML: {\n                        __html: post.content.html\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/calvin/nextportfolio/pages/blog/[slug].js\",\n                    lineNumber: 70,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/calvin/nextportfolio/pages/blog/[slug].js\",\n            lineNumber: 65,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/calvin/nextportfolio/pages/blog/[slug].js\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (blogpost);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9nL1tzbHVnXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQztBQUNXO0FBRXJELE1BQU1HLFFBQVEsR0FBRyxJQUFJRiwwREFBYSxDQUNoQyx1RUFBdUUsQ0FDeEU7QUFFRCxNQUFNRyxLQUFLLEdBQUdGLGdEQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQmxCLENBQUM7QUFFRCxNQUFNRyxRQUFRLEdBQUdILGdEQUFHLENBQUM7Ozs7OztBQU1yQixDQUFDO0FBRU0sZUFBZUksY0FBYyxHQUFFO0lBQ3BDLE1BQU0sRUFBQ0MsS0FBSyxHQUFDLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxPQUFPLENBQUNILFFBQVEsQ0FBQztJQUNoRCxPQUFPO1FBQ0hJLEtBQUssRUFBRUYsS0FBSyxDQUFDRyxHQUFHLENBQUNDLENBQUFBLElBQUksR0FBSSxDQUFDO2dCQUN0QkMsTUFBTSxFQUFFO29CQUNKQyxJQUFJLEVBQUVGLElBQUksQ0FBQ0UsSUFBSTtpQkFDbEI7YUFDSixDQUFDLENBQUM7UUFDSEMsUUFBUSxFQUFFLEtBQUs7S0FDbEI7Q0FDRjtBQUdNLGVBQWVDLGNBQWMsQ0FBQyxFQUFDSCxNQUFNLEdBQUMsRUFBRTtJQUM3QyxNQUFNQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBSTtJQUN4QixNQUFNRyxJQUFJLEdBQUcsTUFBTWIsUUFBUSxDQUFDSyxPQUFPLENBQUNKLEtBQUssRUFBRTtRQUFDUyxJQUFJO0tBQUMsQ0FBQztJQUNsRCxNQUFNRixJQUFJLEdBQUdLLElBQUksQ0FBQ0wsSUFBSTtJQUN0QixPQUFPO1FBQ0xNLEtBQUssRUFBRTtZQUNMTixJQUFJO1NBQ0w7UUFDRE8sVUFBVSxFQUFFLEVBQUU7S0FDZixDQUFDO0NBQ0g7QUFJRCxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxFQUFDUixJQUFJLEdBQUMsR0FBSztJQUMzQlMsT0FBTyxDQUFDQyxHQUFHLENBQUM7UUFBQ1YsSUFBSTtLQUFDLENBQUM7SUFDbkIscUJBQ0UsOERBQUNXLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLCtDQUErQztrQkFDMUQsNEVBQUN2QixzREFBUzs7OEJBQ04sOERBQUN3QixHQUFDOzhCQUNGLDRFQUFDQyxLQUFHO3dCQUFDQyxHQUFHLEVBQUVmLElBQUksQ0FBQ2dCLFVBQVUsQ0FBQ0MsR0FBRzt3QkFBRUMsR0FBRyxFQUFDLEVBQUU7Ozs7O2lDQUFHOzs7Ozs2QkFDcEM7OEJBQ0osOERBQUNDLElBQUU7OEJBQUVuQixJQUFJLENBQUNvQixLQUFLOzs7Ozs2QkFBTTs4QkFDckIsOERBQUNULEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxTQUFTO29CQUFDUyx1QkFBdUIsRUFBRTt3QkFBQ0MsTUFBTSxFQUFFdEIsSUFBSSxDQUFDdUIsT0FBTyxDQUFDQyxJQUFJO3FCQUFDOzs7Ozs2QkFBUTs7Ozs7O3FCQUM3RTs7Ozs7aUJBQ1YsQ0FDUDtDQUNGO0FBRUQsaUVBQWVoQixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dHBvcnRmb2xpby8uL3BhZ2VzL2Jsb2cvW3NsdWddLmpzP2ZhNzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb250YWluZXJ9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIjtcbmltcG9ydCB7IEdyYXBoUUxDbGllbnQsIGdxbCB9IGZyb20gXCJncmFwaHFsLXJlcXVlc3RcIjtcblxuY29uc3QgZ3JhcGhjbXMgPSBuZXcgR3JhcGhRTENsaWVudChcbiAgXCJodHRwczovL2FwaS1ldS13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2w2NXphbzNkOThsazAxdWtlcmIyY291YS9tYXN0ZXJcIlxuKTtcblxuY29uc3QgUVVFUlkgPSBncWxgXG4gIHF1ZXJ5IFBvc3QoJHNsdWc6IFN0cmluZyEpIHtcbiAgICBwb3N0KHdoZXJlOiB7IHNsdWc6ICRzbHVnIH0pIHtcbiAgICAgICAgaWQsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkYXRlUHVibGlzaGVkLFxuICAgICAgICBzbHVnLFxuICAgICAgICBjb250ZW50e1xuICAgICAgICAgICAgaHRtbFxuICAgICAgICB9XG4gICAgICAgIGNvdmVyUGhvdG97XG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBpZFxuICAgICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBTTFVHTElTVCA9IGdxbGBcbntcbiAgICBwb3N0c3tcbiAgICAgICAgc2x1Z1xuICAgIH1cbn1cbmBcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XG4gIGNvbnN0IHtwb3N0c30gPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0KFNMVUdMSVNUKTtcbiAgcmV0dXJuIHtcbiAgICAgIHBhdGhzOiBwb3N0cy5tYXAocG9zdCA9PiAoe1xuICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICBzbHVnOiBwb3N0LnNsdWdcbiAgICAgICAgICB9XG4gICAgICB9KSksXG4gICAgICBmYWxsYmFjazogZmFsc2VcbiAgfVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7cGFyYW1zfSkge1xuICBjb25zdCBzbHVnID0gcGFyYW1zLnNsdWc7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBncmFwaGNtcy5yZXF1ZXN0KFFVRVJZLCB7c2x1Z30pO1xuICBjb25zdCBwb3N0ID0gZGF0YS5wb3N0XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEwLFxuICB9O1xufVxuXG5cblxuY29uc3QgYmxvZ3Bvc3QgPSAoe3Bvc3R9KSA9PiB7XG4gIGNvbnNvbGUubG9nKHtwb3N0fSlcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dEZXRhaWxzIGNvbnRlbnRTZWN0aW9uIHBhZGRpbmctYm90dG9tLTEyMFwiPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICA8aW1nIHNyYz17cG9zdC5jb3ZlclBob3RvLnVybH0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxoMz57cG9zdC50aXRsZX08L2gzPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW5nXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IHBvc3QuY29udGVudC5odG1sfX0+PC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZGl2PiBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBibG9ncG9zdCJdLCJuYW1lcyI6WyJDb250YWluZXIiLCJHcmFwaFFMQ2xpZW50IiwiZ3FsIiwiZ3JhcGhjbXMiLCJRVUVSWSIsIlNMVUdMSVNUIiwiZ2V0U3RhdGljUGF0aHMiLCJwb3N0cyIsInJlcXVlc3QiLCJwYXRocyIsIm1hcCIsInBvc3QiLCJwYXJhbXMiLCJzbHVnIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImRhdGEiLCJwcm9wcyIsInJldmFsaWRhdGUiLCJibG9ncG9zdCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaW1nIiwic3JjIiwiY292ZXJQaG90byIsInVybCIsImFsdCIsImgzIiwidGl0bGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnQiLCJodG1sIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blog/[slug].js\n");

/***/ }),

/***/ "graphql-request":
/*!**********************************!*\
  !*** external "graphql-request" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("graphql-request");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blog/[slug].js"));
module.exports = __webpack_exports__;

})();