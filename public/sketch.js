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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Game\": () => (/* binding */ Game)\n/* harmony export */ });\n/* harmony import */ var _images_Color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/Color */ \"./src/images/Color.ts\");\n/* harmony import */ var _math_float2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../math/float2 */ \"./src/math/float2.ts\");\n\r\n\r\nclass Game {\r\n    constructor(bgctx, charctx, lightctx) {\r\n        if (!(bgctx.canvas.width == charctx.canvas.width && bgctx.canvas.height == charctx.canvas.height)) {\r\n            throw new Error('Canvas size of contexts provided are not same.');\r\n        }\r\n        else {\r\n            if (!(bgctx.canvas.width == lightctx.canvas.width && bgctx.canvas.height == lightctx.canvas.height)) {\r\n                throw new Error('Canvas size of contexts provided are not same.');\r\n            }\r\n        }\r\n        this.backgroundContext = bgctx;\r\n        this.characterContext = charctx;\r\n        this.lightsContext = lightctx;\r\n        this.clearColor = new _images_Color__WEBPACK_IMPORTED_MODULE_0__.Color(0, 0, 0, 1);\r\n        this.dimensions = new _math_float2__WEBPACK_IMPORTED_MODULE_1__.float2(bgctx.canvas.width, bgctx.canvas.height);\r\n    }\r\n    loop() {\r\n        this.update();\r\n        this.render(this.backgroundContext, this.characterContext, this.lightsContext);\r\n        requestAnimationFrame(this.loop);\r\n    }\r\n    update() {\r\n    }\r\n    render(bgctx, charctx, lctx) {\r\n        //TODO: Do clearing ONlY if required.\r\n        bgctx.fillStyle = `rgba(${this.clearColor.r},${this.clearColor.g},${this.clearColor.b},${this.clearColor.a})`;\r\n        bgctx.fillRect(0, 0, this.dimensions.x, this.dimensions.y);\r\n        charctx.fillStyle = `rgba(${this.clearColor.r},${this.clearColor.g},${this.clearColor.b},${this.clearColor.a})`;\r\n        charctx.fillRect(0, 0, this.dimensions.x, this.dimensions.y);\r\n        lctx.fillStyle = `rgba(${this.clearColor.r},${this.clearColor.g},${this.clearColor.b},${this.clearColor.a})`;\r\n        lctx.fillRect(0, 0, this.dimensions.x, this.dimensions.y);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy9nYW1lL0dhbWUudHM/MDQ5NSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFDQTtBQUVqQyxNQUFNLElBQUk7SUFTYixZQUFZLEtBQStCLEVBQUMsT0FBaUMsRUFBQyxRQUFrQztRQUM1RyxJQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFDO1lBQ3pGLE1BQU0sSUFBSSxLQUFLLENBQUMsZ0RBQWdELENBQUMsQ0FBQztTQUNyRTthQUFJO1lBQ0QsSUFBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQztnQkFDM0YsTUFBTSxJQUFJLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO2FBQ3JFO1NBQ0o7UUFFRCxJQUFJLENBQUMsaUJBQWlCLEdBQUMsS0FBSyxDQUFDO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBQyxPQUFPLENBQUM7UUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBQyxRQUFRLENBQUM7UUFFNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGdEQUFLLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFFckMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGdEQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sSUFBSTtRQUVQLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFN0UscUJBQXFCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFTyxNQUFNO0lBRWQsQ0FBQztJQUNPLE1BQU0sQ0FBQyxLQUErQixFQUFDLE9BQWlDLEVBQUUsSUFBOEI7UUFDNUcscUNBQXFDO1FBQ3JDLEtBQUssQ0FBQyxTQUFTLEdBQUMsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzVHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXhELE9BQU8sQ0FBQyxTQUFTLEdBQUMsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzlHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTFELElBQUksQ0FBQyxTQUFTLEdBQUMsUUFBUSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzNHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBSTNELENBQUM7Q0FDSiIsImZpbGUiOiIuL3NyYy9nYW1lL0dhbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb2xvciB9IGZyb20gXCIuLi9pbWFnZXMvQ29sb3JcIjtcclxuaW1wb3J0IHsgZmxvYXQyIH0gZnJvbSBcIi4uL21hdGgvZmxvYXQyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZXtcclxuICAgIHByaXZhdGUgYmFja2dyb3VuZENvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgIHByaXZhdGUgY2hhcmFjdGVyQ29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJpdmF0ZSBsaWdodHNDb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gICAgY2xlYXJDb2xvcjogQ29sb3I7XHJcblxyXG4gICAgZGltZW5zaW9uczogZmxvYXQyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJnY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsY2hhcmN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELGxpZ2h0Y3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpe1xyXG4gICAgICAgIGlmKCEoYmdjdHguY2FudmFzLndpZHRoPT1jaGFyY3R4LmNhbnZhcy53aWR0aCAmJiBiZ2N0eC5jYW52YXMuaGVpZ2h0PT1jaGFyY3R4LmNhbnZhcy5oZWlnaHQpKXtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW52YXMgc2l6ZSBvZiBjb250ZXh0cyBwcm92aWRlZCBhcmUgbm90IHNhbWUuJyk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKCEoYmdjdHguY2FudmFzLndpZHRoPT1saWdodGN0eC5jYW52YXMud2lkdGggJiYgYmdjdHguY2FudmFzLmhlaWdodD09bGlnaHRjdHguY2FudmFzLmhlaWdodCkpe1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW52YXMgc2l6ZSBvZiBjb250ZXh0cyBwcm92aWRlZCBhcmUgbm90IHNhbWUuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kQ29udGV4dD1iZ2N0eDtcclxuICAgICAgICB0aGlzLmNoYXJhY3RlckNvbnRleHQ9Y2hhcmN0eDtcclxuICAgICAgICB0aGlzLmxpZ2h0c0NvbnRleHQ9bGlnaHRjdHg7XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJDb2xvciA9IG5ldyBDb2xvcigwLDAsMCwxKTtcclxuXHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gbmV3IGZsb2F0MihiZ2N0eC5jYW52YXMud2lkdGgsYmdjdHguY2FudmFzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvb3AoKTogdm9pZHtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKHRoaXMuYmFja2dyb3VuZENvbnRleHQsdGhpcy5jaGFyYWN0ZXJDb250ZXh0LHRoaXMubGlnaHRzQ29udGV4dCk7XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlKCk6IHZvaWR7XHJcblxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZW5kZXIoYmdjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxjaGFyY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGxjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWR7XHJcbiAgICAgICAgLy9UT0RPOiBEbyBjbGVhcmluZyBPTmxZIGlmIHJlcXVpcmVkLlxyXG4gICAgICAgIGJnY3R4LmZpbGxTdHlsZT1gcmdiYSgke3RoaXMuY2xlYXJDb2xvci5yfSwke3RoaXMuY2xlYXJDb2xvci5nfSwke3RoaXMuY2xlYXJDb2xvci5ifSwke3RoaXMuY2xlYXJDb2xvci5hfSlgO1xyXG4gICAgICAgIGJnY3R4LmZpbGxSZWN0KDAsMCx0aGlzLmRpbWVuc2lvbnMueCx0aGlzLmRpbWVuc2lvbnMueSk7XHJcblxyXG4gICAgICAgIGNoYXJjdHguZmlsbFN0eWxlPWByZ2JhKCR7dGhpcy5jbGVhckNvbG9yLnJ9LCR7dGhpcy5jbGVhckNvbG9yLmd9LCR7dGhpcy5jbGVhckNvbG9yLmJ9LCR7dGhpcy5jbGVhckNvbG9yLmF9KWA7XHJcbiAgICAgICAgY2hhcmN0eC5maWxsUmVjdCgwLDAsdGhpcy5kaW1lbnNpb25zLngsdGhpcy5kaW1lbnNpb25zLnkpO1xyXG5cclxuICAgICAgICBsY3R4LmZpbGxTdHlsZT1gcmdiYSgke3RoaXMuY2xlYXJDb2xvci5yfSwke3RoaXMuY2xlYXJDb2xvci5nfSwke3RoaXMuY2xlYXJDb2xvci5ifSwke3RoaXMuY2xlYXJDb2xvci5hfSlgO1xyXG4gICAgICAgIGxjdHguZmlsbFJlY3QoMCwwLHRoaXMuZGltZW5zaW9ucy54LHRoaXMuZGltZW5zaW9ucy55KTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/game/Game.ts\n");

/***/ }),

/***/ "./src/images/Color.ts":
/*!*****************************!*\
  !*** ./src/images/Color.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Color\": () => (/* binding */ Color)\n/* harmony export */ });\nclass Color {\r\n    constructor(r, g, b, a) {\r\n        this.r = r;\r\n        this.g = g;\r\n        this.b = b;\r\n        this.a = a;\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy9pbWFnZXMvQ29sb3IudHM/YjM2NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTSxLQUFLO0lBS2QsWUFBWSxDQUFTLEVBQUMsQ0FBUyxFQUFDLENBQVMsRUFBQyxDQUFTO1FBQy9DLElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO1FBQ1QsSUFBSSxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUM7UUFDVCxJQUFJLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUNULElBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDO0lBQ2IsQ0FBQztDQUNKIiwiZmlsZSI6Ii4vc3JjL2ltYWdlcy9Db2xvci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDb2xvcntcclxuICAgIHI6IG51bWJlcjtcclxuICAgIGc6IG51bWJlcjtcclxuICAgIGI6IG51bWJlcjtcclxuICAgIGE6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKHI6IG51bWJlcixnOiBudW1iZXIsYjogbnVtYmVyLGE6IG51bWJlcil7XHJcbiAgICAgICAgdGhpcy5yPXI7XHJcbiAgICAgICAgdGhpcy5nPWc7XHJcbiAgICAgICAgdGhpcy5iPWI7XHJcbiAgICAgICAgdGhpcy5hPWE7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/images/Color.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/Game */ \"./src/game/Game.ts\");\n\r\nvar backgroundCanvas = document.querySelector('#bg-canvas');\r\nvar bgctx = backgroundCanvas.getContext('2d');\r\nvar characterCanvas = document.querySelector('#char-canvas');\r\nvar charctx = characterCanvas.getContext('2d');\r\nvar lightsCanvas = document.querySelector('#lights-canvas');\r\nvar lightctx = lightsCanvas.getContext('2d');\r\nvar game = new _game_Game__WEBPACK_IMPORTED_MODULE_0__.Game(bgctx, charctx, lightctx);\r\nrequestAnimationFrame(game.loop);\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy9pbmRleC50cz9mZmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQW1DO0FBRW5DLElBQUksZ0JBQWdCLEdBQXNCLFFBQVEsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDL0UsSUFBSSxLQUFLLEdBQThCLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6RSxJQUFJLGVBQWUsR0FBc0IsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUNoRixJQUFJLE9BQU8sR0FBOEIsZUFBZSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUUxRSxJQUFJLFlBQVksR0FBdUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBQ2hGLElBQUksUUFBUSxHQUE4QixZQUFZLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXhFLElBQUksSUFBSSxHQUFHLElBQUksNENBQUksQ0FBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTVDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyIsImZpbGUiOiIuL3NyYy9pbmRleC50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiLi9nYW1lL0dhbWVcIjtcblxudmFyIGJhY2tncm91bmRDYW52YXM6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2JnLWNhbnZhcycpO1xudmFyIGJnY3R4IDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEID0gYmFja2dyb3VuZENhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG52YXIgY2hhcmFjdGVyQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjaGFyLWNhbnZhcycpO1xudmFyIGNoYXJjdHggOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgPSBjaGFyYWN0ZXJDYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGxpZ2h0c0NhbnZhcyA6IEhUTUxDYW52YXNFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2xpZ2h0cy1jYW52YXMnKTtcbnZhciBsaWdodGN0eCA6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGxpZ2h0c0NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG52YXIgZ2FtZSA9IG5ldyBHYW1lKGJnY3R4LGNoYXJjdHgsbGlnaHRjdHgpO1xuXG5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZS5sb29wKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/math/float2.ts":
/*!****************************!*\
  !*** ./src/math/float2.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"float2\": () => (/* binding */ float2)\n/* harmony export */ });\nclass float2 {\r\n    constructor(x, y) {\r\n        this.x = x;\r\n        this.y = y;\r\n    }\r\n    static add(a, b) {\r\n        return new float2(a.x + b.x, a.y + b.y);\r\n    }\r\n    static subtract(a, b) {\r\n        return new float2(a.x - b.x, a.y - b.y);\r\n    }\r\n    static multiply(a, b) {\r\n        return new float2(a.x * b.x, a.y * b.y);\r\n    }\r\n    static divide(a, b) {\r\n        return new float2(a.x / b.x, a.y / b.y);\r\n    }\r\n    static magnitude(a) {\r\n        return Math.sqrt(a.x * a.x + a.y * a.y);\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXplLXdvcmxkcy8uL3NyYy9tYXRoL2Zsb2F0Mi50cz80Y2MzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNLE1BQU07SUFHbEIsWUFBbUIsQ0FBUyxFQUFFLENBQVM7UUFDdEMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNaLENBQUM7SUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3JDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzFDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQzFDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3hDLE9BQU8sSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQVM7UUFDaEMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsR0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0NBQ0QiLCJmaWxlIjoiLi9zcmMvbWF0aC9mbG9hdDIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgZmxvYXQye1xuXHRwdWJsaWMgeDogbnVtYmVyO1xuXHRwdWJsaWMgeTogbnVtYmVyO1xuXHRwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0fVxuXHRwdWJsaWMgc3RhdGljIGFkZChhOiBmbG9hdDIsIGI6IGZsb2F0Mik6IGZsb2F0Mntcblx0XHRyZXR1cm4gbmV3IGZsb2F0MihhLngrYi54LGEueStiLnkpO1xuXHR9XG5cdHB1YmxpYyBzdGF0aWMgc3VidHJhY3QoYTogZmxvYXQyLCBiOiBmbG9hdDIpOiBmbG9hdDJ7XG5cdFx0cmV0dXJuIG5ldyBmbG9hdDIoYS54LWIueCxhLnktYi55KTtcblx0fVxuXHRwdWJsaWMgc3RhdGljIG11bHRpcGx5KGE6IGZsb2F0MiwgYjogZmxvYXQyKTogZmxvYXQye1xuXHRcdHJldHVybiBuZXcgZmxvYXQyKGEueCpiLngsYS55KmIueSk7XG5cdH1cblx0cHVibGljIHN0YXRpYyBkaXZpZGUoYTogZmxvYXQyLCBiOiBmbG9hdDIpOiBmbG9hdDJ7XG5cdFx0cmV0dXJuIG5ldyBmbG9hdDIoYS54L2IueCxhLnkvYi55KTtcblx0fVxuXHRwdWJsaWMgc3RhdGljIG1hZ25pdHVkZShhOiBmbG9hdDIpOiBudW1iZXJ7XG5cdFx0cmV0dXJuIE1hdGguc3FydChhLngqYS54K2EueSphLnkpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/math/float2.ts\n");

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