
function request(callback) {
	var xhr = getXMLHttpRequest();
	
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 0)) {
			callback(xhr.responseText);
		}
	};

	var usernameCo = encodeURIComponent(document.getElementById("usernameCo").value);
	var userpwdCo = encodeURIComponent(document.getElementById("userpwdCo").value);
	
	xhr.open("GET", "XMLHttpRequest_getString.php?usernameCo=" + usernameCo + "&userpwdCo=" + userpwdCo, true);
	xhr.send(null);
}



function readData(sData) {
	alert(sData);
}



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



