/*
优点: 原生JS,性能好;
缺点: 
 */
! function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("Checkbix", e) : "object" == typeof exports ? exports = module.exports = e() : t.Checkbix = e()

}(this, function() {
	"use strict";
	var t, e = {},
		n = {
			initClass: "checkbix"
		},
		i = function(t, e, n) {
			/**/
			if ("[object Object]" === Object.prototype.toString.call(t))
				for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && e.call(n, t[i], i, t);
			else
				for (var a = 0, r = t.length; a < r; a++) e.call(n, t[a], a, t)
		},
		a = function(t, e) {
			var n = {};
			return i(t, function(e, i) {
				n[i] = t[i]
			}), i(e, function(t, i) {
				n[i] = e[i]
			}), n
		},
		r = function() {
			/*query checkbox inputs with CSS calss `checkbix`, then loop it.*/
			for (var e = document.querySelectorAll("." + t.initClass), n = 0; n < e.length; n++) {
				/*preparing for the class of the span.*/
				/*var i = e[n].getAttribute("data-size") ? e[n].getAttribute("data-size") : "",*/
				var i = e[n].getAttribute("data-size") ?'class="' + i + '"': '',
				/*	a = e[n].getAttribute("data-arialabel") ? e[n].getAttribute("data-arialabel") : "";*/
				/*preparing for aria-label of the label.*/
					a = e[n].getAttribute("data-arialabel") ?'aria-label="' + a + '"': '';
				/* insertAdjacentHTML after every element. */
				e[n].insertAdjacentHTML("afterend", '<label ' + a + ' role="checkbox" for="' + e[n].id + '" class="' + t.initClass + '"><span ' + i + '></span>' + e[n].getAttribute("data-text") + "</label>")
			}
		};
	return e.destroy = function() {
		/*remove the click event listener of the r element? */
		t && (document.removeEventListener("click", r, !1), t = null)
	}, 
	e.init = function(i) {
		e.destroy(), t = a(n, i || {}), document.addEventListener("DOMContentLoaded", r, !1)
	},
	e
});