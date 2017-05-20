var haut;
var flagOpen = false;

var chatbox = document.getElementById("chatBoxDiv");
var chatboxhead = document.getElementById("enteteChat");
var chatboxheadtxt = document.getElementById("chatBoxHead");

chatboxhead.addEventListener("click", openorclose, false);

haut = (window.innerHeight);
chatbox.style.top = (haut - 35) + "px";

window.onresize = function ()
{
	haut = (window.innerHeight);
	if (flagOpen == false){
		chatbox.style.top = (haut - 35) + "px";
	}
	else{
		chatbox.style.top = (haut - 600) + "px";
	}
}


function openorclose(){
	console.log("ttt");
	if (flagOpen == false){
		chatbox.style.top = (haut - 600) + "px";
		chatboxheadtxt.innerHTML = "Clique ici pour fermer le chat";
		flagOpen = true;
	}
	else{
		chatbox.style.top = (haut - 35) + "px";
		chatboxheadtxt.innerHTML = "Clique ici pour ouvrir le chat";
		flagOpen = false;
	}
}