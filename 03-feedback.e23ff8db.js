!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var o,i,a,u,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(r);function p(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function j(e){return c=e,l=setTimeout(h,t),s?p(e):u}function T(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function h(){var e=b();if(T(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?g(n,a-(e-c)):n}(e))}function w(e){return l=void 0,v&&o?p(e):(o=i=void 0,u)}function O(){var e=b(),n=T(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return j(f);if(d)return l=setTimeout(h,t),p(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(S(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),O.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},O.flush=function(){return void 0===l?u:w(b())},O}function y(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var r=u.test(t);return r||l.test(t)?f(t.slice(2),r?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:o,maxWait:t,trailing:i})};var j=document.querySelector(".feedback-form"),T=document.querySelector("input"),h=document.querySelector("textarea"),w=(document.querySelector("button"),JSON.parse(localStorage.getItem("feedback-form-state")));null!=w&&(console.log("old data from Storage:",w),T.value=w.email,h.value=w.message);j.addEventListener("input",e(t)((function(e){var t={email:T.value,message:h.value};""!==t.email&&""!==t.message&&localStorage.setItem("feedback-form-state",JSON.stringify(t))}),500)),j.addEventListener("submit",(function(e){e.preventDefault();var t=e.currentTarget.elements,n=t.email,o=t.message;if(""===n.value||""===o.value)return alert("Please fill in all the fields!");console.log("Email: ".concat(n.value,", Message: ").concat(o.value)),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),console.log("Your storage was cleaning!!!")}))}();
//# sourceMappingURL=03-feedback.e23ff8db.js.map
