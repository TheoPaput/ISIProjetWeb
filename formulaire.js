var nom_valid = false, prenom_valid = false, naissance_valid = false, pseudo_valid = false, mdp_valid = false, email_valid = false;
var form_valid = false;


var initPage= function()
{
	document.getElementById("nom").addEventListener("input", checkNom, false);
	document.getElementById("prenom").addEventListener("input", checkPrenom, false);
	document.getElementById("naissance").addEventListener("input", checkNaissance, false);
	document.getElementById("pseudo").addEventListener("input", checkPseudo, false);
	document.getElementById("mdp").addEventListener("input", checkMdp, false);
	document.getElementById("email").addEventListener("input", checkEmail, false);
	
	updateButton();
}


var checkNom = function() {	/*Vérifie la validité du Nom (soit pas de caractère spéciaux)*/
	var texte = document.getElementById("nom").value;
	var valid = true;

	for(var i = 0; i < texte.length; i++){
		var c = texte.charCodeAt(i);
		if (c < 65 || c > 122){
			if( c < 224)
				valid = false;	
		}
		if (c < 97 && c > 90)
			valid = false;
	}

	nom_valid = valid;

	if(!nom_valid)
		document.getElementById("nom").style.color = "#FF0000";
	else
		document.getElementById("nom").style.color = "#000000";

	updateButton();		
}


var checkPrenom = function() {	/*Vérifie la validité du Prénom (Pas de caractères spéciaux)*/
	var texte = document.getElementById("prenom").value;
	var valid = true;

	for(var i = 0; i < texte.length; i++){
		var c = texte.charCodeAt(i);
		if (c < 65 || c > 122){
			if( c < 224)
				valid = false;	
		}
		if (c < 97 && c > 90)
			valid = false;
	}

	prenom_valid = valid;	

	if(!prenom_valid)
		document.getElementById("prenom").style.color = "#FF0000";
	else
		document.getElementById("prenom").style.color = "#000000";

	updateButton();	
	
}


var checkNaissance = function() {	/*Vérifie la validité de la date de naissance (Respect de la forme imposée)*/
	var date_a_verif = document.getElementById("naissance").value;
	var valid = true;
	
	var actualYear = new Date().getFullYear();
	
	if (date_a_verif.length != 10) {
		valid = false;
	}
	else{
		var date_split = date_a_verif.split("/");
		var date = new Date();
		date_split[1] -= 1;
		date.setFullYear(date_split[2]);
		date.setMonth(date_split[1]);
		date.setDate(date_split[0]);
		if (!(date.getFullYear() == date_split[2] && date.getMonth() == date_split[1] && date.getDate() == date_split[0] && date.getFullYear() >= actualYear-150)){
			valid = false;
		}
	}
	
	naissance_valid = valid;
	
	if(!naissance_valid)
		document.getElementById("naissance").style.color = "#FF0000";
	else
		document.getElementById("naissance").style.color = "#000000";

	updateButton();
	
}


var checkPseudo = function() {	/*Vérifie la validité du Pseudo (Entre 3 et 20 caractères)*/
	var texte = document.getElementById("pseudo").value;
	var valid = true;

	for(var i = 0; i < texte.length; i++){
		var c = texte.charCodeAt(i);
		if (c < 48 || c > 122)
			valid = false;
	}
	if ( texte.length < 3 || texte.length > 20)
		valid = false;

	pseudo_valid = valid;	

	if(!pseudo_valid)
		document.getElementById("pseudo").style.color = "#FF0000";
	else
		document.getElementById("pseudo").style.color = "#000000";

	updateButton();	
	
}


var checkMdp = function() {	/*Vérifie la validité du Mot de passe (entre 8 et 16 caractères)*/
	var texte = document.getElementById("mdp").value;
	var valid = true;

	if ( texte.length < 8 || texte.length > 16)
		valid = false;

	mdp_valid = valid;	

	if(!mdp_valid)
		document.getElementById("mdp").style.color = "#FF0000";
	else
		document.getElementById("mdp").style.color = "#000000";

	updateButton();	
	
}


var checkEmail = function() {	/*Vérifie la validité de l'email (Présence de @)*/
	var texte = document.getElementById("email").value;
	var valid = false;
	
	for(var i = 0; i < texte.length; i++){
		var c = texte.charCodeAt(i);
		valid = valid || (c == 64);
	}

	if ( texte.length < 5 || texte.length > 30)
		valid = false;

	email_valid = valid;	

	if(!email_valid)
		document.getElementById("email").style.color = "#FF0000";
	else
		document.getElementById("email").style.color = "#000000";

	updateButton();	
	
}



var updateButton = function(){
	form_valid = nom_valid && prenom_valid && naissance_valid && pseudo_valid && mdp_valid && email_valid;
	
	if (form_valid){
		document.getElementById('butonSub').disabled = '';
		document.getElementById('butonSub').className = "buttonEnabled";
	}
	else{
		document.getElementById('butonSub').disabled = 'disabled';
		document.getElementById('butonSub').className = "buttonDisabled";
	}
}

