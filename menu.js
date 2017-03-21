

var initPage = function(){


	if (window.matchMedia("(max-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'none';
	}
	document.getElementById("entete3menu").addEventListener("mouseover", dispMenu, false);
	document.getElementById("entete3menu").addEventListener("mouseout", hideMenu, false);


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

window.onresize = function ()
{
	if (window.matchMedia("(min-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'flex';
	}

	if (window.matchMedia("(max-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'none';
	}
}