var chatbox;
var haut;

chatbox = document.getElementById("chatBoxDiv");

haut = (window.innerHeight);
chatbox.style.top = (haut - 35) + "px";

window.onresize = function ()
{
	haut = (window.innerHeight);
	chatbox.style.top = (haut - 35) + "px";
}
