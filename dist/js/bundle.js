"use strict";!function(){var __webpack_modules__={"./src/js/main.js":function srcJsMainJs(){eval('const togglerBtn = document.querySelector(".main-nav--toggler");\r\nconst linksContainer = document.querySelector(".main-nav__links-container");\r\nconst hamburgerLines = document.querySelectorAll(".main-nav--toggler-line");\r\n\r\ntogglerBtn.addEventListener("click", () => {\r\n    hamburgerLines.forEach((el) => el.classList.toggle("active"));\r\n    linksContainer.classList.toggle("active");\r\n});\r\n\r\nlinksContainer.addEventListener("click", () => {\r\n    if ([...hamburgerLines].some((el) => el.classList.contains("active"))) {\r\n        hamburgerLines.forEach((el) => el.classList.remove("active"));\r\n        linksContainer.classList.remove("active");\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://gulpstarter/./src/js/main.js?')}},__webpack_exports__={};__webpack_modules__["./src/js/main.js"]()}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyJidW5kbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gKiBBVFRFTlRJT046IFRoZSBcImV2YWxcIiBkZXZ0b29sIGhhcyBiZWVuIHVzZWQgKG1heWJlIGJ5IGRlZmF1bHQgaW4gbW9kZTogXCJkZXZlbG9wbWVudFwiKS5cbiAqIFRoaXMgZGV2dG9vbCBpcyBuZWl0aGVyIG1hZGUgZm9yIHByb2R1Y3Rpb24gbm9yIGZvciByZWFkYWJsZSBvdXRwdXQgZmlsZXMuXG4gKiBJdCB1c2VzIFwiZXZhbCgpXCIgY2FsbHMgdG8gY3JlYXRlIGEgc2VwYXJhdGUgc291cmNlIGZpbGUgaW4gdGhlIGJyb3dzZXIgZGV2dG9vbHMuXG4gKiBJZiB5b3UgYXJlIHRyeWluZyB0byByZWFkIHRoZSBvdXRwdXQgZmlsZSwgc2VsZWN0IGEgZGlmZmVyZW50IGRldnRvb2wgKGh0dHBzOi8vd2VicGFjay5qcy5vcmcvY29uZmlndXJhdGlvbi9kZXZ0b29sLylcbiAqIG9yIGRpc2FibGUgdGhlIGRlZmF1bHQgZGV2dG9vbCB3aXRoIFwiZGV2dG9vbDogZmFsc2VcIi5cbiAqIElmIHlvdSBhcmUgbG9va2luZyBmb3IgcHJvZHVjdGlvbi1yZWFkeSBvdXRwdXQgZmlsZXMsIHNlZSBtb2RlOiBcInByb2R1Y3Rpb25cIiAoaHR0cHM6Ly93ZWJwYWNrLmpzLm9yZy9jb25maWd1cmF0aW9uL21vZGUvKS5cbiAqL1xuXG4vKioqKioqL1xuKGZ1bmN0aW9uICgpIHtcbiAgLy8gd2VicGFja0Jvb3RzdHJhcFxuXG4gIC8qKioqKiovXG4gIHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0ge1xuICAgIC8qKiovXG4gICAgXCIuL3NyYy9qcy9tYWluLmpzXCI6XG4gICAgLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgISoqKiAuL3NyYy9qcy9tYWluLmpzICoqKiFcbiAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqKi9cbiAgICBmdW5jdGlvbiBzcmNKc01haW5KcygpIHtcbiAgICAgIGV2YWwoXCJjb25zdCB0b2dnbGVyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcXFwiLm1haW4tbmF2LS10b2dnbGVyXFxcIik7XFxyXFxuY29uc3QgbGlua3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxcXCIubWFpbi1uYXZfX2xpbmtzLWNvbnRhaW5lclxcXCIpO1xcclxcbmNvbnN0IGhhbWJ1cmdlckxpbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcXFwiLm1haW4tbmF2LS10b2dnbGVyLWxpbmVcXFwiKTtcXHJcXG5cXHJcXG50b2dnbGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXFxcImNsaWNrXFxcIiwgKCkgPT4ge1xcclxcbiAgICBoYW1idXJnZXJMaW5lcy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnRvZ2dsZShcXFwiYWN0aXZlXFxcIikpO1xcclxcbiAgICBsaW5rc0NvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKFxcXCJhY3RpdmVcXFwiKTtcXHJcXG59KTtcXHJcXG5cXHJcXG5saW5rc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxcXCJjbGlja1xcXCIsICgpID0+IHtcXHJcXG4gICAgaWYgKFsuLi5oYW1idXJnZXJMaW5lc10uc29tZSgoZWwpID0+IGVsLmNsYXNzTGlzdC5jb250YWlucyhcXFwiYWN0aXZlXFxcIikpKSB7XFxyXFxuICAgICAgICBoYW1idXJnZXJMaW5lcy5mb3JFYWNoKChlbCkgPT4gZWwuY2xhc3NMaXN0LnJlbW92ZShcXFwiYWN0aXZlXFxcIikpO1xcclxcbiAgICAgICAgbGlua3NDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcXFwiYWN0aXZlXFxcIik7XFxyXFxuICAgIH1cXHJcXG59KTtcXHJcXG5cXG5cXG4vLyMgc291cmNlVVJMPXdlYnBhY2s6Ly9ndWxwc3RhcnRlci8uL3NyYy9qcy9tYWluLmpzP1wiKTtcbiAgICAgIC8qKiovXG4gICAgfVxuICAgIC8qKioqKiovXG5cbiAgfTtcbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAvKioqKioqL1xuXG4gIC8qKioqKiovXG4gIC8vIHN0YXJ0dXBcblxuICAvKioqKioqL1xuICAvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcblxuICAvKioqKioqL1xuICAvLyBUaGlzIGVudHJ5IG1vZHVsZSBjYW4ndCBiZSBpbmxpbmVkIGJlY2F1c2UgdGhlIGV2YWwgZGV2dG9vbCBpcyB1c2VkLlxuXG4gIC8qKioqKiovXG5cbiAgdmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbiAgLyoqKioqKi9cblxuICBfX3dlYnBhY2tfbW9kdWxlc19fW1wiLi9zcmMvanMvbWFpbi5qc1wiXSgpO1xuICAvKioqKioqL1xuXG4gIC8qKioqKiovXG5cbn0pKCk7Il0sIm5hbWVzIjpbIl9fd2VicGFja19tb2R1bGVzX18iLCIuL3NyYy9qcy9tYWluLmpzIiwic3JjSnNNYWluSnMiLCJldmFsIiwiX193ZWJwYWNrX2V4cG9ydHNfXyJdLCJtYXBwaW5ncyI6IkFBQUEsYUFZQSxDQUFBLFdBSUUsSUFBSUEsb0JBQXNCLENBRXhCQyxtQkFNQSxTQUFTQyxjQUNQQyxLQUFLLDB1QkFBOHZCLENBRXJ3QixDQUdGLEVBZ0JJQyxvQkFBc0IsR0FHMUJKLG9CQUFvQixvQkFBb0IsQ0FLekMsRUFBRSJ9
