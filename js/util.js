function goTop (dom, goDom, top, speed) {
	var _top = top || 100;
	var _speed = speed * 100 || 500;
	var timer = null;
	
	if (dom.scrollTop() <= _top) {
		goDom.hide();
	} else {
		goDom.show();
	}
	
	goDom.on("click", function () {
		timer = setInterval(function () {
			dom.scrollTop(dom.scrollTop()  - _speed);
			if (dom.scrollTop() == 0) {
				dom.scrollTop(0);
				clearInterval(timer);
			}
		}, 50);
	});
	dom.on("scroll", function () {
		if (dom.scrollTop() <= _top){
			goDom.fadeOut();
		} else {
			goDom.fadeIn();
		}
	});
}