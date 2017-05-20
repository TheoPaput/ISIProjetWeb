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



// traitement chatBox


var sendbutton = document.getElementById("envoyerChat");
var messagecontent = document.getElementById("messageChat");

sendbutton.addEventListener("click", traitement, false);




function traitement(){
	sendMessage(verification);
}


function sendMessage(callback){
	console.log("t");
	var message = messagecontent.value;
	messagecontent.value = "";
	var xhr = getXMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(JSON.parse(xhr.responseText));
		}
	};
	
	xhr.open("GET", "htbin/chatsend.py?msg=" + message, true);
	xhr.send(null);
}

function verification(sData){
	if (sData.num == -1){
		alert(sData.msg);
	}
	if (sData.num == 1){
		console.log(sData.msg);
	}
	if (sData.num == 0){
		console.log(sData.msg);
	}
}


















// traitement requete XMLHttp


function getXMLHttpRequest() {
	var xhr = null;
	
	if (window.XMLHttpRequest || window.ActiveXObject) {
		if (window.ActiveXObject) {
			try {
				xhr = new ActiveXObject("Msxml2.XMLHTTP");
			} catch(e) {
				xhr = new ActiveXObject("Microsoft.XMLHTTP");
			}
		} else {
			xhr = new XMLHttpRequest(); 
		}
	} else {
		alert("Votre navigateur ne supporte pas l'objet XMLHTTPRequest...");
		return null;
	}
	
	return xhr;
}











