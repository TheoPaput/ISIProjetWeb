var flag = false;
var flag_dim = false;
var ratio = 1035/643;
var flag_pic = true;

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


 if (document.getElementById("") == 'id1'){
 
 }







var resizePic = function()
{

	var a = 0;
	var b = 0;
	if (document.getElementById("couverturePic1") != null) { a = document.getElementById("couverturePic1").offsetWidth;}
	if (document.getElementById("couverturePic") != null) { b = document.getElementById("couverturePic").offsetWidth;}
	


	if ( a != 0 ){
	    if (a < 1035){
	    	if (a > 600){
	    		document.getElementById("couverturePic1").style.backgroundImage = 'url("images/couverture.jpg")';
	    		flag_pic = true;
	        	document.getElementById("couverturePic1").style.height = (a / ratio)+"px";
	        }
	        else
	        	/*document.getElementById("couverturePic1").style.height = (600 / ratio)+"px";*/
	        	document.getElementById("couverturePic1").style.backgroundImage = 'url("images/couvertureMini.jpg")';
	        	flag_pic = false;
		}
	    else
	        document.getElementById("couverturePic1").style.height = "643px";
	}
	/*if (flag_pic == false)
		document.getElementById("couverturePic1").style.height = 376 +"px";*/
		
		


	if ( b != 0 ){
		if (b < 1035){
			if (b > 600)
	        	document.getElementById("couverturePic").style.height = (b / ratio)+"px";
	        else
	        	document.getElementById("couverturePic").style.height = (600 / ratio)+"px";
	    }
		else
	        document.getElementById("couverturePic").style.height = "643px";
	}




    if (window.matchMedia("(min-width: 600px)").matches){
		document.getElementById("logoprojet").src = "images/prepisiprojet.png";
	}
	if (window.matchMedia("(max-width: 600px)").matches){
		document.getElementById("logoprojet").src = "images/prepisiprojetmini.png";
	}
}