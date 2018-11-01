/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-04-16 20:26:53
 * @version $Id$
 */

function mousewheel(dom, fn){
	function goudan(e){
		e = e || window.event;
		e.delta = e.wheelDelta/120 || -e.detail/3;
		if(fn.call(this, e) === false){
			if (e.preventDefault) {
				e.preventDefault()
			}else{
				e.returnValue = false;
			}
		}
	}
	if (dom.onmousewheel === null) {
		var type = "mousewheel"
	}else{
		type = "DOMMouseScroll"
	}
	if (dom.addEventListener) {
		dom.addEventListener(type, goudan, false)
	}else{
		dom.attachEvent("on"+type, goudan)
	}

}