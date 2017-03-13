var nom_valid = false, prenom_valid = false, naissance_valid = false, pseudo_valid = false, mdp_valid = false, email_valid = false;
var form_valid = false;

var checkNom = function() {
	var texte = document.getElementById("nom").value;
	var valid = true;

	for(var i = 0; i < texte.length; i++){
		var c = texte.charCodeAt(i);
		if (c < 65 || c > 122){
			if( c < 224)
				valid = false;	
		}
	}

	nom_valid = valid;

	if(!nom_valid)
		document.getElementById("nom").style.color = "#FF0000";
	else
		document.getElementById("nom").style.color = "#000000";

	updateButton();		
}

var checkPrenom = function() {
	var texte = document.getElementById("prenom").value;
	var valid = true;

	for(var i = 0; i < texte.length; i++){
		var c = texte.charCodeAt(i);
		if (c < 65 || c > 122){
			if( c < 224)
				valid = false;	
		}
	}

	prenom_valid = valid;	

	if(!prenom_valid)
		document.getElementById("prenom").style.color = "#FF0000";
	else
		document.getElementById("prenom").style.color = "#000000";

	updateButton();	
	
}

var updateButton = function(){
	form_valid = nom_valid && prenom_valid && naissance_valid && pseudo_valid && mdp_valid && email_valid;
}
