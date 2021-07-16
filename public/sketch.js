/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/game/Game.ts":
/*!**************************!*\
  !*** ./src/game/Game.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _images_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Color */ \"./src/images/Color.ts\");\n/* harmony import */ var _math_float2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/float2 */ \"./src/math/float2.ts\");\n/* harmony import */ var _renderer_colorRenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../renderer/colorRenderer */ \"./src/renderer/colorRenderer.ts\");\n\r\n\r\n\r\nclass Game {\r\n    constructor(bgctx, charctx, lightctx) {\r\n        if (!(bgctx.canvas.width == charctx.canvas.width && bgctx.canvas.height == charctx.canvas.height)) {\r\n            throw new Error('Canvas size of contexts provided are not same.');\r\n        }\r\n        else {\r\n            if (!(bgctx.canvas.width == lightctx.canvas.width && bgctx.canvas.height == lightctx.canvas.height)) {\r\n                throw new Error('Canvas size of contexts provided are not same.');\r\n            }\r\n        }\r\n        this.backgroundContext = bgctx;\r\n        this.characterContext = charctx;\r\n        this.lightsContext = lightctx;\r\n        this.clearColor = new _images_Color__WEBPACK_IMPORTED_MODULE_0__.Color(0, 0, 0, 255);\r\n        this.dimensions = new _math_float2__WEBPACK_IMPORTED_MODULE_1__.float2(bgctx.canvas.width, bgctx.canvas.height);\r\n        this.colorRenderer = new _renderer_colorRenderer__WEBPACK_IMPORTED_MODULE_2__.ColorRenderer(this.lightsContext, \"vs-color\", \"fs-color\");\r\n        console.log(this, this.render);\r\n    }\r\n    update() {\r\n        var a = 1;\r\n        a++;\r\n    }\r\n    render(bgctx = this.backgroundContext, charctx = this.characterContext, lctx = this.lightsContext) {\r\n        //TODO: Do clearing ONlY if required.\r\n        var normBgCol = this.clearColor.normalized;\r\n        bgctx.clearColor(normBgCol.r, normBgCol.g, normBgCol.b, normBgCol.a);\r\n        bgctx.clear(bgctx.COLOR_BUFFER_BIT);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy9nYW1lL0dhbWUudHM/MDQ5NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXdDO0FBQ0E7QUFDa0I7QUFFbkQsTUFBTSxJQUFJO0lBV2IsWUFBWSxLQUE0QixFQUFDLE9BQThCLEVBQUMsUUFBK0I7UUFDbkcsSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQztZQUN6RixNQUFNLElBQUksS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7U0FDckU7YUFBSTtZQUNELElBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUM7Z0JBQzNGLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQzthQUNyRTtTQUNKO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixHQUFDLEtBQUssQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLEdBQUMsT0FBTyxDQUFDO1FBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUMsUUFBUSxDQUFDO1FBRTVCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxnREFBSyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxnREFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGtFQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBQyxVQUFVLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFFakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDTSxNQUFNO1FBQ1QsSUFBSSxDQUFDLEdBQUUsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxFQUFFLENBQUM7SUFDUixDQUFDO0lBQ00sTUFBTSxDQUFDLFFBQTZCLElBQUksQ0FBQyxpQkFBaUIsRUFBQyxVQUErQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsT0FBNEIsSUFBSSxDQUFDLGFBQWE7UUFDbEsscUNBQXFDO1FBQ3JDLElBQUksU0FBUyxHQUFVLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO1FBQ2xELEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFFeEMsQ0FBQztDQUNKIiwiZmlsZSI6Ii4vc3JjL2dhbWUvR2FtZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbG9yIH0gZnJvbSBcIi4uL2ltYWdlcy9Db2xvclwiO1xyXG5pbXBvcnQgeyBmbG9hdDIgfSBmcm9tIFwiLi4vbWF0aC9mbG9hdDJcIjtcclxuaW1wb3J0IHsgQ29sb3JSZW5kZXJlciB9IGZyb20gXCIuLi9yZW5kZXJlci9jb2xvclJlbmRlcmVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZXtcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZENvbnRleHQ6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyQ29udGV4dDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG4gICAgcHJpdmF0ZSBsaWdodHNDb250ZXh0OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgcHJpdmF0ZSBjbGVhckNvbG9yOiBDb2xvcjtcclxuXHJcbiAgICBwcml2YXRlIGRpbWVuc2lvbnM6IGZsb2F0MjtcclxuXHJcbiAgICBwcml2YXRlIGNvbG9yUmVuZGVyZXI6IENvbG9yUmVuZGVyZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYmdjdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCxjaGFyY3R4OiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsbGlnaHRjdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCl7XHJcbiAgICAgICAgaWYoIShiZ2N0eC5jYW52YXMud2lkdGg9PWNoYXJjdHguY2FudmFzLndpZHRoICYmIGJnY3R4LmNhbnZhcy5oZWlnaHQ9PWNoYXJjdHguY2FudmFzLmhlaWdodCkpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnZhcyBzaXplIG9mIGNvbnRleHRzIHByb3ZpZGVkIGFyZSBub3Qgc2FtZS4nKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYoIShiZ2N0eC5jYW52YXMud2lkdGg9PWxpZ2h0Y3R4LmNhbnZhcy53aWR0aCAmJiBiZ2N0eC5jYW52YXMuaGVpZ2h0PT1saWdodGN0eC5jYW52YXMuaGVpZ2h0KSl7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NhbnZhcyBzaXplIG9mIGNvbnRleHRzIHByb3ZpZGVkIGFyZSBub3Qgc2FtZS4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb250ZXh0PWJnY3R4O1xyXG4gICAgICAgIHRoaXMuY2hhcmFjdGVyQ29udGV4dD1jaGFyY3R4O1xyXG4gICAgICAgIHRoaXMubGlnaHRzQ29udGV4dD1saWdodGN0eDtcclxuXHJcbiAgICAgICAgdGhpcy5jbGVhckNvbG9yID0gbmV3IENvbG9yKDAsMCwwLDI1NSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IG5ldyBmbG9hdDIoYmdjdHguY2FudmFzLndpZHRoLGJnY3R4LmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbG9yUmVuZGVyZXIgPSBuZXcgQ29sb3JSZW5kZXJlcih0aGlzLmxpZ2h0c0NvbnRleHQsXCJ2cy1jb2xvclwiLFwiZnMtY29sb3JcIik7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMsdGhpcy5yZW5kZXIpO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHVwZGF0ZSgpOiB2b2lke1xyXG4gICAgICAgIHZhciBhID0xO1xyXG4gICAgICAgIGErKztcclxuICAgIH1cclxuICAgIHB1YmxpYyByZW5kZXIoYmdjdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dD10aGlzLmJhY2tncm91bmRDb250ZXh0LGNoYXJjdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dD10aGlzLmNoYXJhY3RlckNvbnRleHQsIGxjdHg6IFdlYkdMUmVuZGVyaW5nQ29udGV4dD10aGlzLmxpZ2h0c0NvbnRleHQpOiB2b2lke1xyXG4gICAgICAgIC8vVE9ETzogRG8gY2xlYXJpbmcgT05sWSBpZiByZXF1aXJlZC5cclxuICAgICAgICB2YXIgbm9ybUJnQ29sOiBDb2xvciA9IHRoaXMuY2xlYXJDb2xvci5ub3JtYWxpemVkO1xyXG4gICAgICAgIGJnY3R4LmNsZWFyQ29sb3Iobm9ybUJnQ29sLnIsbm9ybUJnQ29sLmcsbm9ybUJnQ29sLmIsbm9ybUJnQ29sLmEpO1xyXG4gICAgICAgIGJnY3R4LmNsZWFyKGJnY3R4LkNPTE9SX0JVRkZFUl9CSVQpO1xyXG5cclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/game/Game.ts\n");

/***/ }),

/***/ "./src/images/Color.ts":
/*!*****************************!*\
  !*** ./src/images/Color.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Color\": () => (/* binding */ Color)\n/* harmony export */ });\nclass Color {\r\n    constructor(r, g, b, a) {\r\n        this.r = r;\r\n        this.g = g;\r\n        this.b = b;\r\n        this.a = a;\r\n    }\r\n    get normalized() {\r\n        return new Color(this.r / 255, this.g / 255, this.b / 255, this.a / 255);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy9pbWFnZXMvQ29sb3IudHM/YjM2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTSxLQUFLO0lBS2QsWUFBWSxDQUFTLEVBQUMsQ0FBUyxFQUFDLENBQVMsRUFBQyxDQUFTO1FBQy9DLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztJQUNELElBQVcsVUFBVTtRQUNqQixPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxFQUFDLElBQUksQ0FBQyxDQUFDLEdBQUMsR0FBRyxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUNKIiwiZmlsZSI6Ii4vc3JjL2ltYWdlcy9Db2xvci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2xvcntcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICAgIGE6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHI6IG51bWJlcixnOiBudW1iZXIsYjogbnVtYmVyLGE6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5yPXI7XHJcbiAgICAgICAgdGhpcy5nPWc7XHJcbiAgICAgICAgdGhpcy5iPWI7XHJcbiAgICAgICAgdGhpcy5hPWE7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgZ2V0IG5vcm1hbGl6ZWQoKTogQ29sb3J7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcih0aGlzLnIvMjU1LHRoaXMuZy8yNTUsdGhpcy5iLzI1NSx0aGlzLmEvMjU1KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/images/Color.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/Game */ \"./src/game/Game.ts\");\n\r\nvar backgroundCanvas = document.querySelector('#bg-canvas');\r\nvar bgctx = backgroundCanvas.getContext('webgl');\r\nvar characterCanvas = document.querySelector('#char-canvas');\r\nvar charctx = characterCanvas.getContext('webgl');\r\nvar lightsCanvas = document.querySelector('#lights-canvas');\r\nvar lightctx = lightsCanvas.getContext('webgl');\r\nvar game = new _game_Game__WEBPACK_IMPORTED_MODULE_0__.Game(bgctx, charctx, lightctx);\r\nfunction loop() {\r\n    game.update();\r\n    game.render();\r\n    requestAnimationFrame(loop);\r\n}\r\nrequestAnimationFrame(loop);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQW1DO0FBRW5DLElBQUksZ0JBQWdCLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDL0UsSUFBSSxLQUFLLEdBQTJCLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV6RSxJQUFJLGVBQWUsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNoRixJQUFJLE9BQU8sR0FBMkIsZUFBZSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUUxRSxJQUFJLFlBQVksR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hGLElBQUksUUFBUSxHQUEyQixZQUFZLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXhFLElBQUksSUFBSSxHQUFHLElBQUksNENBQUksQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTVDLFNBQVMsSUFBSTtJQUNULElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNkLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUVkLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFDRCxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lL0dhbWVcIjtcblxudmFyIGJhY2tncm91bmRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnLWNhbnZhcycpO1xudmFyIGJnY3R4IDogV2ViR0xSZW5kZXJpbmdDb250ZXh0ID0gYmFja2dyb3VuZENhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG52YXIgY2hhcmFjdGVyQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFyLWNhbnZhcycpO1xudmFyIGNoYXJjdHggOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQgPSBjaGFyYWN0ZXJDYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcblxudmFyIGxpZ2h0c0NhbnZhcyA6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0cy1jYW52YXMnKTtcbnZhciBsaWdodGN0eCA6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCA9IGxpZ2h0c0NhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbCcpO1xuXG52YXIgZ2FtZSA9IG5ldyBHYW1lKGJnY3R4LGNoYXJjdHgsbGlnaHRjdHgpO1xuXG5mdW5jdGlvbiBsb29wKCl7XG4gICAgZ2FtZS51cGRhdGUoKTtcbiAgICBnYW1lLnJlbmRlcigpO1xuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xufVxucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/math/float2.ts":
/*!****************************!*\
  !*** ./src/math/float2.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"float2\": () => (/* binding */ float2)\n/* harmony export */ });\nclass float2 {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    static add(a, b) {\r\n        return new float2(a.x + b.x, a.y + b.y);\r\n    }\r\n    static subtract(a, b) {\r\n        return new float2(a.x - b.x, a.y - b.y);\r\n    }\r\n    static multiply(a, b) {\r\n        return new float2(a.x * b.x, a.y * b.y);\r\n    }\r\n    static divide(a, b) {\r\n        return new float2(a.x / b.x, a.y / b.y);\r\n    }\r\n    static magnitude(a) {\r\n        return Math.sqrt(a.x * a.x + a.y * a.y);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy9tYXRoL2Zsb2F0Mi50cz80Y2MzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNLE1BQU07SUFHbEIsWUFBbUIsQ0FBUyxFQUFFLENBQVM7UUFDdEMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3JDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzFDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzFDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3hDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQVM7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0QiLCJmaWxlIjoiLi9zcmMvbWF0aC9mbG9hdDIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgZmxvYXQye1xuXHRwdWJsaWMgeDogbnVtYmVyO1xuXHRwdWJsaWMgeTogbnVtYmVyO1xuXHRwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0fVxuXHRwdWJsaWMgc3RhdGljIGFkZChhOiBmbG9hdDIsIGI6IGZsb2F0Mik6IGZsb2F0Mntcblx0XHRyZXR1cm4gbmV3IGZsb2F0MihhLngrYi54LGEueStiLnkpO1xuXHR9XG5cdHB1YmxpYyBzdGF0aWMgc3VidHJhY3QoYTogZmxvYXQyLCBiOiBmbG9hdDIpOiBmbG9hdDJ7XG5cdFx0cmV0dXJuIG5ldyBmbG9hdDIoYS54LWIueCxhLnktYi55KTtcblx0fVxuXHRwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IGZsb2F0MiwgYjogZmxvYXQyKTogZmxvYXQye1xuXHRcdHJldHVybiBuZXcgZmxvYXQyKGEueCpiLngsYS55KmIueSk7XG5cdH1cblx0cHVibGljIHN0YXRpYyBkaXZpZGUoYTogZmxvYXQyLCBiOiBmbG9hdDIpOiBmbG9hdDJ7XG5cdFx0cmV0dXJuIG5ldyBmbG9hdDIoYS54L2IueCxhLnkvYi55KTtcblx0fVxuXHRwdWJsaWMgc3RhdGljIG1hZ25pdHVkZShhOiBmbG9hdDIpOiBudW1iZXJ7XG5cdFx0cmV0dXJuIE1hdGguc3FydChhLngqYS54K2EueSphLnkpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/math/float2.ts\n");

/***/ }),

/***/ "./src/renderer/colorRenderer.ts":
/*!***************************************!*\
  !*** ./src/renderer/colorRenderer.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorRenderer\": () => (/* binding */ ColorRenderer)\n/* harmony export */ });\n/* harmony import */ var _util_webgl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/webgl */ \"./src/util/webgl.ts\");\n\r\nclass ColorRenderer {\r\n    constructor(gl, vertexShaderId, fragmentShaderId) {\r\n        this.gl = gl;\r\n        this.glUtil = new _util_webgl__WEBPACK_IMPORTED_MODULE_0__.WebglUtil();\r\n        this.vs = this.glUtil.createShader(this.gl, this.gl.VERTEX_SHADER, vertexShaderId);\r\n        this.fs = this.glUtil.createShader(this.gl, this.gl.FRAGMENT_SHADER, fragmentShaderId);\r\n        this.program = this.glUtil.createProgram(this.gl, this.vs, this.fs);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy9yZW5kZXJlci9jb2xvclJlbmRlcmVyLnRzPzI1ODYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEM7QUFFbkMsTUFBTSxhQUFhO0lBV3RCLFlBQW1CLEVBQXlCLEVBQUUsY0FBc0IsRUFBRSxnQkFBd0I7UUFDMUYsSUFBSSxDQUFDLEVBQUUsR0FBQyxFQUFFLENBQUM7UUFFWCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksa0RBQVMsRUFBRSxDQUFDO1FBRTlCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBQyxjQUFjLENBQUMsQ0FBQztRQUNqRixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUVyRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsSUFBSSxDQUFDLEVBQUUsRUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEUsQ0FBQztDQUNKIiwiZmlsZSI6Ii4vc3JjL3JlbmRlcmVyL2NvbG9yUmVuZGVyZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXZWJnbFV0aWwgfSBmcm9tIFwiLi4vdXRpbC93ZWJnbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbG9yUmVuZGVyZXJ7XHJcblxyXG4gICAgcHVibGljIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICAgcHJpdmF0ZSB2czogV2ViR0xTaGFkZXI7XHJcbiAgICBwcml2YXRlIGZzOiBXZWJHTFNoYWRlcjtcclxuXHJcbiAgICBwcml2YXRlIHByb2dyYW06IFdlYkdMUHJvZ3JhbTtcclxuXHJcbiAgICBwcml2YXRlIGdsVXRpbDogV2ViZ2xVdGlsO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB2ZXJ0ZXhTaGFkZXJJZDogc3RyaW5nLCBmcmFnbWVudFNoYWRlcklkOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuZ2w9Z2w7XHJcblxyXG4gICAgICAgIHRoaXMuZ2xVdGlsID0gbmV3IFdlYmdsVXRpbCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudnMgPSB0aGlzLmdsVXRpbC5jcmVhdGVTaGFkZXIodGhpcy5nbCx0aGlzLmdsLlZFUlRFWF9TSEFERVIsdmVydGV4U2hhZGVySWQpO1xyXG4gICAgICAgIHRoaXMuZnMgPSB0aGlzLmdsVXRpbC5jcmVhdGVTaGFkZXIodGhpcy5nbCx0aGlzLmdsLkZSQUdNRU5UX1NIQURFUixmcmFnbWVudFNoYWRlcklkKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSB0aGlzLmdsVXRpbC5jcmVhdGVQcm9ncmFtKHRoaXMuZ2wsdGhpcy52cyx0aGlzLmZzKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/renderer/colorRenderer.ts\n");

/***/ }),

/***/ "./src/util/webgl.ts":
/*!***************************!*\
  !*** ./src/util/webgl.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"WebglUtil\": () => (/* binding */ WebglUtil)\n/* harmony export */ });\nclass WebglUtil {\r\n    constructor() {\r\n    }\r\n    createShader(gl, shaderType, shaderSourceId) {\r\n        var shaderSourceElem = document.getElementById(shaderSourceId);\r\n        var shaderSource = shaderSourceElem.text;\r\n        var shader = gl.createShader(shaderType);\r\n        gl.shaderSource(shader, shaderSource);\r\n        gl.compileShader(shader);\r\n        if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {\r\n            return shader;\r\n        }\r\n        console.log(gl.getShaderInfoLog(shader));\r\n        gl.deleteShader(shader);\r\n    }\r\n    createProgram(gl, vs, fs) {\r\n        var program = gl.createProgram();\r\n        gl.attachShader(program, vs);\r\n        gl.attachShader(program, fs);\r\n        gl.linkProgram(program);\r\n        if (gl.getProgramParameter(program, gl.LINK_STATUS)) {\r\n            return program;\r\n        }\r\n        console.log(gl.getProgramInfoLog(program));\r\n        gl.deleteProgram(program);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy91dGlsL3dlYmdsLnRzPzVkZmUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU0sU0FBUztJQUNsQjtJQUVBLENBQUM7SUFDTSxZQUFZLENBQUMsRUFBeUIsRUFBQyxVQUFrQixFQUFDLGNBQXNCO1FBQ25GLElBQUksZ0JBQWdCLEdBQXNCLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFzQixDQUFDO1FBQ3ZHLElBQUksWUFBWSxHQUFHLGdCQUFnQixDQUFDLElBQUksQ0FBQztRQUV6QyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3pDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JDLEVBQUUsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFekIsSUFBRyxFQUFFLENBQUMsa0JBQWtCLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxjQUFjLENBQUMsRUFBQztZQUNoRCxPQUFPLE1BQU0sQ0FBQztTQUNqQjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVNLGFBQWEsQ0FBQyxFQUF5QixFQUFFLEVBQWUsRUFBRSxFQUFlO1FBQzVFLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVqQyxFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM3QixFQUFFLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztRQUU3QixFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXhCLElBQUcsRUFBRSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLEVBQUM7WUFDL0MsT0FBTyxPQUFPLENBQUM7U0FDbEI7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDOUIsQ0FBQztDQUNKIiwiZmlsZSI6Ii4vc3JjL3V0aWwvd2ViZ2wudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgV2ViZ2xVdGlse1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICB9XHJcbiAgICBwdWJsaWMgY3JlYXRlU2hhZGVyKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsc2hhZGVyVHlwZTogbnVtYmVyLHNoYWRlclNvdXJjZUlkOiBzdHJpbmcpOiBXZWJHTFNoYWRlcntcclxuICAgICAgICB2YXIgc2hhZGVyU291cmNlRWxlbTogSFRNTFNjcmlwdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzaGFkZXJTb3VyY2VJZCkgYXMgSFRNTFNjcmlwdEVsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHNoYWRlclNvdXJjZSA9IHNoYWRlclNvdXJjZUVsZW0udGV4dDtcclxuXHJcbiAgICAgICAgdmFyIHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcihzaGFkZXJUeXBlKTtcclxuICAgICAgICBnbC5zaGFkZXJTb3VyY2Uoc2hhZGVyLHNoYWRlclNvdXJjZSk7XHJcbiAgICAgICAgZ2wuY29tcGlsZVNoYWRlcihzaGFkZXIpO1xyXG5cclxuICAgICAgICBpZihnbC5nZXRTaGFkZXJQYXJhbWV0ZXIoc2hhZGVyLCBnbC5DT01QSUxFX1NUQVRVUykpe1xyXG4gICAgICAgICAgICByZXR1cm4gc2hhZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhnbC5nZXRTaGFkZXJJbmZvTG9nKHNoYWRlcikpXHJcbiAgICAgICAgZ2wuZGVsZXRlU2hhZGVyKHNoYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZVByb2dyYW0oZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgdnM6IFdlYkdMU2hhZGVyLCBmczogV2ViR0xTaGFkZXIpOiBXZWJHTFByb2dyYW17XHJcbiAgICAgICAgdmFyIHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcblxyXG4gICAgICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCB2cyk7XHJcbiAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHByb2dyYW0sIGZzKTtcclxuXHJcbiAgICAgICAgZ2wubGlua1Byb2dyYW0ocHJvZ3JhbSk7XHJcblxyXG4gICAgICAgIGlmKGdsLmdldFByb2dyYW1QYXJhbWV0ZXIocHJvZ3JhbSwgZ2wuTElOS19TVEFUVVMpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGdsLmdldFByb2dyYW1JbmZvTG9nKHByb2dyYW0pKTtcclxuICAgICAgICBnbC5kZWxldGVQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/util/webgl.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;