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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/ConnectBtn.module.css":
/*!**************************************!*\
  !*** ./styles/ConnectBtn.module.css ***!
  \**************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"btn\": \"ConnectBtn_btn__9N7zE\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQ29ubmVjdEJ0bi5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGFibmZ0Ly4vc3R5bGVzL0Nvbm5lY3RCdG4ubW9kdWxlLmNzcz8yOWNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImJ0blwiOiBcIkNvbm5lY3RCdG5fYnRuX185Tjd6RVwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/ConnectBtn.module.css\n");

/***/ }),

/***/ "./components/Landing.tsx":
/*!********************************!*\
  !*** ./components/Landing.tsx ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Landing\": () => (/* binding */ Landing)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @solana/wallet-adapter-react */ \"@solana/wallet-adapter-react\");\n/* harmony import */ var _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @solana/wallet-adapter-react-ui */ \"@solana/wallet-adapter-react-ui\");\n/* harmony import */ var _styles_ConnectBtn_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/ConnectBtn.module.css */ \"./styles/ConnectBtn.module.css\");\n/* harmony import */ var _styles_ConnectBtn_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_ConnectBtn_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/hooks */ \"./store/hooks.ts\");\n/* harmony import */ var _features_collabInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../features/collabInfo */ \"./features/collabInfo.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__]);\n([_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__, _solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n__webpack_require__(/*! @solana/wallet-adapter-react-ui/styles.css */ \"./node_modules/@solana/wallet-adapter-react-ui/styles.css\");\n\n\n\nconst Landing = ()=>{\n    const walletAddress = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)((state)=>state.collabInfo.AdminWallet);\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();\n    const { publicKey , connected , connect  } = (0,_solana_wallet_adapter_react__WEBPACK_IMPORTED_MODULE_1__.useWallet)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        dispatch((0,_features_collabInfo__WEBPACK_IMPORTED_MODULE_5__.addAdminWallet)(publicKey?.toString()));\n        if (connected) {\n            next_router__WEBPACK_IMPORTED_MODULE_6___default().push(\"/reward\");\n        }\n    }, [\n        publicKey,\n        connected\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bgLanding md:grid \",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                    className: \" flex flex-col justify-center items-center space-y-20 min-h-screen \",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase super font-Lexend \",\n                            children: \"Ally3\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-col justify-center items-center text-center space-y-2\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-transparent bg-clip-text text-xl xl:text-2xl 2xl:text-3xl tracking-tighter font-medium capitalize superdes font-Lexend\",\n                                    children: '\"Tokens and NFTs can be bought,'\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \" text-xl 2xl:text-3xl xl:text-xl font-medium capitalize font-Lexend flex flex-row gap-x-3 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"text-transparent bg-clip-text superdes tracking-tighter \",\n                                            children: 'Contribution Power needs to be earned\"'\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        \"\\uD83C\\uDFC6\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                            lineNumber: 37,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center relative \",\n                            children: [\n                                \" \",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_solana_wallet_adapter_react_ui__WEBPACK_IMPORTED_MODULE_2__.WalletMultiButton, {\n                                    className: (_styles_ConnectBtn_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                            lineNumber: 48,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\components\\\\Landing.tsx\",\n            lineNumber: 31,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF3RDtBQUloQjtBQUNZO0FBRVo7QUFFeENLLG1CQUFPLENBQUMsNkdBQTRDLENBQUM7QUFDVTtBQUNSO0FBQ3ZCO0FBQ3pCLE1BQU1LLE9BQU8sR0FBRyxJQUFNO0lBQzVCLE1BQU1DLGFBQWEsR0FBR0osNERBQWMsQ0FDbkMsQ0FBQ0ssS0FBSyxHQUFLQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsV0FBVyxDQUN2QztJQUVELE1BQU1DLFFBQVEsR0FBR1QsNERBQWMsRUFBRTtJQUNqQyxNQUFNLEVBQUVVLFNBQVMsR0FBRUMsU0FBUyxHQUFFQyxPQUFPLEdBQUUsR0FBR2xCLHVFQUFTLEVBQUU7SUFFckRJLGdEQUFTLENBQUMsSUFBTTtRQUNmVyxRQUFRLENBQUNQLG9FQUFjLENBQUNRLFNBQVMsRUFBRUcsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUMvQyxJQUFJRixTQUFTLEVBQUU7WUFDZFIsdURBQVcsQ0FBQyxTQUFTLENBQUM7U0FDdEI7S0FDRCxFQUFFO1FBQUNPLFNBQVM7UUFBRUMsU0FBUztLQUFDLENBQUM7SUFFMUIscUJBQ0M7a0JBQ0MsNEVBQUNJLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLG9CQUFxQjs7OEJBQ25DLDhEQUFDRCxLQUFHOzs7OzZCQUFPOzhCQUNYLDhEQUFDRSxNQUFJO29CQUFDRCxTQUFTLEVBQUMscUVBQXVFOztzQ0FDdEYsOERBQUNFLElBQUU7NEJBQUNGLFNBQVMsRUFBQywrRUFBK0U7c0NBQUMsT0FFOUY7Ozs7O3FDQUFLO3NDQUNMLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsaUVBQWlFOzs4Q0FDL0UsOERBQUNHLEdBQUM7b0NBQUNILFNBQVMsRUFBQyw2SEFBNkg7OENBQ3hJLGlDQUFpQzs7Ozs7NkNBQy9COzhDQUNKLDhEQUFDRyxHQUFDO29DQUFDSCxTQUFTLEVBQUMsNEZBQTZGOztzREFDekcsOERBQUNJLE1BQUk7NENBQUNKLFNBQVMsRUFBQywwREFBMEQ7c0RBQ3hFLHdDQUF3Qzs7Ozs7cURBQ25DO3dDQUFBLGNBRVI7Ozs7Ozs2Q0FBSTs7Ozs7O3FDQUNDO3NDQUNOLDhEQUFDRCxLQUFHOzRCQUFDQyxTQUFTLEVBQUMsK0JBQStCOztnQ0FDNUMsR0FBRzs4Q0FDSiw4REFBQ3JCLDhFQUFpQjtvQ0FBQ3FCLFNBQVMsRUFBRXBCLDBFQUFVOzs7Ozs2Q0FBRzs7Ozs7O3FDQUN0Qzs7Ozs7OzZCQUNBOzs7Ozs7cUJBQ0Y7cUJBQ0osQ0FDSDtDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGFibmZ0Ly4vY29tcG9uZW50cy9MYW5kaW5nLnRzeD9hYzkxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVdhbGxldCB9IGZyb20gJ0Bzb2xhbmEvd2FsbGV0LWFkYXB0ZXItcmVhY3QnXG5pbXBvcnQge1xuXHRXYWxsZXRNdWx0aUJ1dHRvbixcblx0V2FsbGV0Q29ubmVjdEJ1dHRvbixcbn0gZnJvbSAnQHNvbGFuYS93YWxsZXQtYWRhcHRlci1yZWFjdC11aSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Nvbm5lY3RCdG4ubW9kdWxlLmNzcydcblxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5yZXF1aXJlKCdAc29sYW5hL3dhbGxldC1hZGFwdGVyLXJlYWN0LXVpL3N0eWxlcy5jc3MnKVxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2gsIHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vc3RvcmUvaG9va3MnXG5pbXBvcnQgeyBhZGRBZG1pbldhbGxldCB9IGZyb20gJy4uL2ZlYXR1cmVzL2NvbGxhYkluZm8nXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuZXhwb3J0IGNvbnN0IExhbmRpbmcgPSAoKSA9PiB7XG5cdGNvbnN0IHdhbGxldEFkZHJlc3MgPSB1c2VBcHBTZWxlY3Rvcihcblx0XHQoc3RhdGUpID0+IHN0YXRlLmNvbGxhYkluZm8uQWRtaW5XYWxsZXRcblx0KVxuXG5cdGNvbnN0IGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKVxuXHRjb25zdCB7IHB1YmxpY0tleSwgY29ubmVjdGVkLCBjb25uZWN0IH0gPSB1c2VXYWxsZXQoKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZGlzcGF0Y2goYWRkQWRtaW5XYWxsZXQocHVibGljS2V5Py50b1N0cmluZygpKSlcblx0XHRpZiAoY29ubmVjdGVkKSB7XG5cdFx0XHRSb3V0ZXIucHVzaCgnL3Jld2FyZCcpXG5cdFx0fVxuXHR9LCBbcHVibGljS2V5LCBjb25uZWN0ZWRdKVxuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPSdiZ0xhbmRpbmcgbWQ6Z3JpZCAgJz5cblx0XHRcdFx0PGRpdj48L2Rpdj5cblx0XHRcdFx0PG1haW4gY2xhc3NOYW1lPScgIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHNwYWNlLXktMjAgbWluLWgtc2NyZWVuICAnPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9J3RleHQtNHhsIHhsOnRleHQtNXhsIDJ4bDp0ZXh0LTZ4bCBmb250LWV4dHJhYm9sZCB1cHBlcmNhc2Ugc3VwZXIgZm9udC1MZXhlbmQgJz5cblx0XHRcdFx0XHRcdEFsbHkzXG5cdFx0XHRcdFx0PC9oMT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC1jZW50ZXIgc3BhY2UteS0yJz5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT0ndGV4dC10cmFuc3BhcmVudCBiZy1jbGlwLXRleHQgdGV4dC14bCB4bDp0ZXh0LTJ4bCAyeGw6dGV4dC0zeGwgdHJhY2tpbmctdGlnaHRlciBmb250LW1lZGl1bSBjYXBpdGFsaXplIHN1cGVyZGVzIGZvbnQtTGV4ZW5kJz5cblx0XHRcdFx0XHRcdFx0eydcIlRva2VucyBhbmQgTkZUcyBjYW4gYmUgYm91Z2h0LCd9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9JyB0ZXh0LXhsIDJ4bDp0ZXh0LTN4bCB4bDp0ZXh0LXhsIGZvbnQtbWVkaXVtIGNhcGl0YWxpemUgIGZvbnQtTGV4ZW5kIGZsZXggZmxleC1yb3cgZ2FwLXgtMyAnPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9J3RleHQtdHJhbnNwYXJlbnQgYmctY2xpcC10ZXh0IHN1cGVyZGVzIHRyYWNraW5nLXRpZ2h0ZXIgJz5cblx0XHRcdFx0XHRcdFx0XHR7J0NvbnRyaWJ1dGlvbiBQb3dlciBuZWVkcyB0byBiZSBlYXJuZWRcIid9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx08J+PhlxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIHJlbGF0aXZlICc+XG5cdFx0XHRcdFx0XHR7JyAnfVxuXHRcdFx0XHRcdFx0PFdhbGxldE11bHRpQnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLmJ0bn0vPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L21haW4+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KVxufVxuIl0sIm5hbWVzIjpbInVzZVdhbGxldCIsIldhbGxldE11bHRpQnV0dG9uIiwic3R5bGVzIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJyZXF1aXJlIiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VBcHBTZWxlY3RvciIsImFkZEFkbWluV2FsbGV0IiwiUm91dGVyIiwiTGFuZGluZyIsIndhbGxldEFkZHJlc3MiLCJzdGF0ZSIsImNvbGxhYkluZm8iLCJBZG1pbldhbGxldCIsImRpc3BhdGNoIiwicHVibGljS2V5IiwiY29ubmVjdGVkIiwiY29ubmVjdCIsInRvU3RyaW5nIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm1haW4iLCJoMSIsInAiLCJzcGFuIiwiYnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Landing.tsx\n");

/***/ }),

/***/ "./features/collabInfo.ts":
/*!********************************!*\
  !*** ./features/collabInfo.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CollabInfo\": () => (/* binding */ CollabInfo),\n/* harmony export */   \"addAdminWallet\": () => (/* binding */ addAdminWallet),\n/* harmony export */   \"addCollabName\": () => (/* binding */ addCollabName),\n/* harmony export */   \"addContributionPower\": () => (/* binding */ addContributionPower),\n/* harmony export */   \"addDescription\": () => (/* binding */ addDescription),\n/* harmony export */   \"addGitHub\": () => (/* binding */ addGitHub),\n/* harmony export */   \"addLeadName\": () => (/* binding */ addLeadName),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    collabName: \"\",\n    LeadName: \"\",\n    Description: \"\",\n    GitHub: \"\",\n    AdminWallet: \"\",\n    ContributionPower: 0\n};\nconst CollabInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"collab\",\n    initialState,\n    reducers: {\n        addCollabName: (state, action)=>{\n            state.collabName = action.payload;\n        },\n        addLeadName: (state, action)=>{\n            state.LeadName = action.payload;\n        },\n        addDescription: (state, action)=>{\n            state.Description = action.payload;\n        },\n        addGitHub: (state, action)=>{\n            state.GitHub = action.payload;\n        },\n        addAdminWallet: (state, action)=>{\n            state.AdminWallet = action.payload;\n        },\n        addContributionPower: (state, action)=>{\n            state.ContributionPower = action.payload;\n        }\n    }\n});\nconst { addAdminWallet , addCollabName , addDescription , addGitHub , addLeadName , addContributionPower  } = CollabInfo.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollabInfo.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9mZWF0dXJlcy9jb2xsYWJJbmZvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFXOUMsTUFBTUMsWUFBWSxHQUFXO0lBQzVCQyxVQUFVLEVBQUUsRUFBRTtJQUNkQyxRQUFRLEVBQUUsRUFBRTtJQUNaQyxXQUFXLEVBQUUsRUFBRTtJQUNmQyxNQUFNLEVBQUUsRUFBRTtJQUNWQyxXQUFXLEVBQUUsRUFBRTtJQUNmQyxpQkFBaUIsRUFBRSxDQUFDO0NBQ3BCO0FBRU0sTUFBTUMsVUFBVSxHQUFHUiw2REFBVyxDQUFDO0lBQ3JDUyxJQUFJLEVBQUUsUUFBUTtJQUNkUixZQUFZO0lBQ1pTLFFBQVEsRUFBRTtRQUNUQyxhQUFhLEVBQUUsQ0FBQ0MsS0FBYSxFQUFFQyxNQUFXLEdBQUs7WUFDOUNELEtBQUssQ0FBQ1YsVUFBVSxHQUFHVyxNQUFNLENBQUNDLE9BQU87U0FDakM7UUFDREMsV0FBVyxFQUFFLENBQUNILEtBQWEsRUFBRUMsTUFBVyxHQUFLO1lBQzVDRCxLQUFLLENBQUNULFFBQVEsR0FBR1UsTUFBTSxDQUFDQyxPQUFPO1NBQy9CO1FBQ0RFLGNBQWMsRUFBRSxDQUFDSixLQUFhLEVBQUVDLE1BQVcsR0FBSztZQUMvQ0QsS0FBSyxDQUFDUixXQUFXLEdBQUdTLE1BQU0sQ0FBQ0MsT0FBTztTQUNsQztRQUNERyxTQUFTLEVBQUUsQ0FBQ0wsS0FBYSxFQUFFQyxNQUFXLEdBQUs7WUFDMUNELEtBQUssQ0FBQ1AsTUFBTSxHQUFHUSxNQUFNLENBQUNDLE9BQU87U0FDN0I7UUFDREksY0FBYyxFQUFFLENBQUNOLEtBQWEsRUFBRUMsTUFBVyxHQUFLO1lBQy9DRCxLQUFLLENBQUNOLFdBQVcsR0FBR08sTUFBTSxDQUFDQyxPQUFPO1NBQ2xDO1FBQ0RLLG9CQUFvQixFQUFFLENBQUNQLEtBQWEsRUFBRUMsTUFBVyxHQUFLO1lBQ3JERCxLQUFLLENBQUNMLGlCQUFpQixHQUFHTSxNQUFNLENBQUNDLE9BQU87U0FDeEM7S0FDRDtDQUNELENBQUM7QUFFSyxNQUFNLEVBQUVJLGNBQWMsR0FBRVAsYUFBYSxHQUFFSyxjQUFjLEdBQUVDLFNBQVMsR0FBRUYsV0FBVyxHQUFFSSxvQkFBb0IsR0FBRSxHQUMzR1gsVUFBVSxDQUFDWSxPQUFPO0FBRW5CLGlFQUFlWixVQUFVLENBQUNhLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb2xsYWJuZnQvLi9mZWF0dXJlcy9jb2xsYWJJbmZvLnRzP2Y4ODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xuXG5pbnRlcmZhY2UgY29sbGFiIHtcblx0Y29sbGFiTmFtZTogc3RyaW5nXG5cdExlYWROYW1lOiBzdHJpbmdcblx0RGVzY3JpcHRpb246IHN0cmluZ1xuXHRHaXRIdWI6IHN0cmluZ1xuXHRBZG1pbldhbGxldDogc3RyaW5nXG5cdENvbnRyaWJ1dGlvblBvd2VyOiBudW1iZXJcbn1cblxuY29uc3QgaW5pdGlhbFN0YXRlOiBjb2xsYWIgPSB7XG5cdGNvbGxhYk5hbWU6ICcnLFxuXHRMZWFkTmFtZTogJycsXG5cdERlc2NyaXB0aW9uOiAnJyxcblx0R2l0SHViOiAnJyxcblx0QWRtaW5XYWxsZXQ6ICcnLFxuXHRDb250cmlidXRpb25Qb3dlcjogMCxcbn1cblxuZXhwb3J0IGNvbnN0IENvbGxhYkluZm8gPSBjcmVhdGVTbGljZSh7XG5cdG5hbWU6ICdjb2xsYWInLFxuXHRpbml0aWFsU3RhdGUsXG5cdHJlZHVjZXJzOiB7XG5cdFx0YWRkQ29sbGFiTmFtZTogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XG5cdFx0XHRzdGF0ZS5jb2xsYWJOYW1lID0gYWN0aW9uLnBheWxvYWRcblx0XHR9LFxuXHRcdGFkZExlYWROYW1lOiAoc3RhdGU6IGNvbGxhYiwgYWN0aW9uOiBhbnkpID0+IHtcblx0XHRcdHN0YXRlLkxlYWROYW1lID0gYWN0aW9uLnBheWxvYWRcblx0XHR9LFxuXHRcdGFkZERlc2NyaXB0aW9uOiAoc3RhdGU6IGNvbGxhYiwgYWN0aW9uOiBhbnkpID0+IHtcblx0XHRcdHN0YXRlLkRlc2NyaXB0aW9uID0gYWN0aW9uLnBheWxvYWRcblx0XHR9LFxuXHRcdGFkZEdpdEh1YjogKHN0YXRlOiBjb2xsYWIsIGFjdGlvbjogYW55KSA9PiB7XG5cdFx0XHRzdGF0ZS5HaXRIdWIgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdFx0YWRkQWRtaW5XYWxsZXQ6IChzdGF0ZTogY29sbGFiLCBhY3Rpb246IGFueSkgPT4ge1xuXHRcdFx0c3RhdGUuQWRtaW5XYWxsZXQgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdFx0YWRkQ29udHJpYnV0aW9uUG93ZXI6IChzdGF0ZTogY29sbGFiLCBhY3Rpb246IGFueSkgPT4ge1xuXHRcdFx0c3RhdGUuQ29udHJpYnV0aW9uUG93ZXIgPSBhY3Rpb24ucGF5bG9hZFxuXHRcdH0sXG5cdH0sXG59KVxuXG5leHBvcnQgY29uc3QgeyBhZGRBZG1pbldhbGxldCwgYWRkQ29sbGFiTmFtZSwgYWRkRGVzY3JpcHRpb24sIGFkZEdpdEh1YiAsYWRkTGVhZE5hbWUsIGFkZENvbnRyaWJ1dGlvblBvd2VyIH0gPVxuXHRDb2xsYWJJbmZvLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgQ29sbGFiSW5mby5yZWR1Y2VyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJjb2xsYWJOYW1lIiwiTGVhZE5hbWUiLCJEZXNjcmlwdGlvbiIsIkdpdEh1YiIsIkFkbWluV2FsbGV0IiwiQ29udHJpYnV0aW9uUG93ZXIiLCJDb2xsYWJJbmZvIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkQ29sbGFiTmFtZSIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImFkZExlYWROYW1lIiwiYWRkRGVzY3JpcHRpb24iLCJhZGRHaXRIdWIiLCJhZGRBZG1pbldhbGxldCIsImFkZENvbnRyaWJ1dGlvblBvd2VyIiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./features/collabInfo.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Landing */ \"./components/Landing.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Landing__WEBPACK_IMPORTED_MODULE_1__]);\n_components_Landing__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst Home = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Landing__WEBPACK_IMPORTED_MODULE_1__.Landing, {}, void 0, false, {\n            fileName: \"C:\\\\VS_Code\\\\Sandstorm Solana - LamportDAO\\\\Ally3 - Sandstorm\\\\pages\\\\index.tsx\",\n            lineNumber: 8,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRStDO0FBRS9DLE1BQU1DLElBQUksR0FBYSxJQUFNO0lBQzVCLHFCQUNDO2tCQUNDLDRFQUFDRCx3REFBTzs7OztxQkFBRztxQkFDVCxDQUNIO0NBQ0Q7QUFFRCxpRUFBZUMsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbGxhYm5mdC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuXG5pbXBvcnQgeyBMYW5kaW5nIH0gZnJvbSAnLi4vY29tcG9uZW50cy9MYW5kaW5nJ1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PExhbmRpbmcgLz5cblx0XHQ8Lz5cblx0KVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG4iXSwibmFtZXMiOlsiTGFuZGluZyIsIkhvbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./store/hooks.ts":
/*!************************!*\
  !*** ./store/hooks.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ob29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTRFO0FBR3JFLE1BQU1FLGNBQWMsR0FBRyxJQUFNRix3REFBVyxFQUFlO0FBQ3ZELE1BQU1HLGNBQWMsR0FBb0NGLG9EQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29sbGFibmZ0Ly4vc3RvcmUvaG9va3MudHM/ZDBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUeXBlZFVzZVNlbGVjdG9ySG9vaywgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBSb290U3RhdGUsIEFwcERpc3BhdGNoIH0gZnJvbSAnLi9zdG9yZSdcblxuZXhwb3J0IGNvbnN0IHVzZUFwcERpc3BhdGNoID0gKCkgPT4gdXNlRGlzcGF0Y2g8QXBwRGlzcGF0Y2g+KClcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yXG4iXSwibmFtZXMiOlsidXNlRGlzcGF0Y2giLCJ1c2VTZWxlY3RvciIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/hooks.ts\n");

/***/ }),

/***/ "./node_modules/@solana/wallet-adapter-react-ui/styles.css":
/*!*****************************************************************!*\
  !*** ./node_modules/@solana/wallet-adapter-react-ui/styles.css ***!
  \*****************************************************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@solana/wallet-adapter-react":
/*!***********************************************!*\
  !*** external "@solana/wallet-adapter-react" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react");;

/***/ }),

/***/ "@solana/wallet-adapter-react-ui":
/*!**************************************************!*\
  !*** external "@solana/wallet-adapter-react-ui" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@solana/wallet-adapter-react-ui");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();