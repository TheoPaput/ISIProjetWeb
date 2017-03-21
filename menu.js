

var initPage = function(){



	document.getElementById("menu1").addEventListener("mouseover", dispMenu, false);
	document.getElementById("menu1").addEventListener("mouseout", hideMenu, false);


}


var dispMenu = function(){
	if (window.matchMedia("(max-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'block';
	}
}

var hideMenu = function(){
	if (window.matchMedia("(max-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'none';
	}
}