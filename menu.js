var flag = false;
var flag_dim = false;
var ratio = 1035/643;
var a;

var initPage = function(){


	if (window.matchMedia("(max-width: 600px)").matches) {
		document.getElementById("menu1").style.display = 'none';
	}
	document.getElementById("entete3menu").addEventListener("click",switchMenu, false);

	resizePic();
}




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

	resizePic();
}


var resizePic = function()
{
	a = document.getElementById("couverturePic1").offsetWidth;
    if (a < 1035){
    	if (a > 600)
        	document.getElementById("couverturePic1").style.height = (a / ratio)+"px";
        else
        	document.getElementById("couverturePic1").style.height = (600 / ratio)+"px";
    }
    else
        document.getElementById("couverturePic1").style.height = "643px";
}