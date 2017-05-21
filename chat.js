var haut;
var flagOpen = false;


var chatbox = document.getElementById("chatBoxDiv");
var chatboxhead = document.getElementById("enteteChat");
var chatboxheadtxt = document.getElementById("chatBoxHead");
var corpschatbox = document.getElementById("corpsChat");

chatboxhead.addEventListener("click", openorclose, false);
window.addEventListener("fullscreenchange", resize, false);
window.addEventListener('resize', resize, false);


// gestion apparence chatBox


haut = (window.innerHeight);
chatbox.style.top = (haut - 35) + "px";


function resize(){
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



// traitement serveur chatBox


var sendbutton = document.getElementById("envoyerChat");
var messagecontent = document.getElementById("messageChat");

sendbutton.addEventListener("click", traitement, false);




function traitement(){
	sendMessage(verification);
}


function sendMessage(callback){
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
		alert(sData.msg);
	}
	if (sData.num == 0){
		console.log(sData.msg);
	}
	actualisation();
}


// Actualisation chatBox


var tid = setInterval(actualisation, 2000); // actualisation automatique toute les 2 secondes

function actualisation(){
	if ( flagOpen == true){
		actualiseChat(afficheMsg);
	}
}

function actualiseChat(callback){
	var xhr = getXMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(JSON.parse(xhr.responseText));
		}
	};
	
	xhr.open("GET", "htbin/chatget.py", true);
	xhr.send(null);
}

function afficheMsg(sData){
	while (corpschatbox.firstChild){
		corpschatbox.removeChild(corpschatbox.firstChild);
	}
	for (i = 0 ; i < sData.length ; i++){
		var div = document.createElement("DIV");
		div.className = "messageForm";
		
		var p1 = document.createElement("P");
		p1.className = "messageTxt";
		p1.innerHTML = "Auteur : " + sData[i].user;

		var p = document.createElement("P");
		p.className = "messageTxt";
		p.innerHTML = sData[i].date + "  " + sData[i].time;
		
		var p2 = document.createElement("P");
		p2.className = "messageTxt";
		p2.innerHTML = sData[i].msg;
		p2.style.color = "#4c4c4c";
		
		div.appendChild(p1);
		div.appendChild(p);
		div.appendChild(p2);
		
		corpschatbox.appendChild(div);
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











