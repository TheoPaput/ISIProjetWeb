var flag = false;
var flag_dim = false;

var initPage = function(){


	if (window.matchMedia("(max-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'none';
	}
	/*document.getElementById("entete3menu").addEventListener("mouseover", dispMenu, false);
	document.getElementById("entete3menu").addEventListener("mouseout", hideMenu, false);*/

	document.getElementById("entete3menu").addEventListener("click",switchMenu, false);


}



/*var dispMenu = function(){
	if (window.matchMedia("(max-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'block';
	}
}


var hideMenu = function(){
	if (window.matchMedia("(max-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'none';
	}
}*/



var switchMenu = function(){
	if (flag == false){
		document.getElementById("menu1").style.display = 'flex';
		flag = true;
	}
	else{
		document.getElementById("menu1").style.display = 'none';
		flag = false;
	}

}




window.onresize = function ()
{
	if (window.matchMedia("(min-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'flex';
		flag_dim = true;
	}

	if (window.matchMedia("(max-width: 600px)").matches) {
		if (flag_dim == true){
			document.getElementById("menu1").style.display = 'none';
			flag_dim = false;
		}
	}
}