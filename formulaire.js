var nom_valid = false, prenom_valid = false, naissance_valid = false, pseudo_valid = false, mdp_valid = false, email_valid = false, verifMdp_valid = false;
var form_valid = false;

var lastName = document.getElementById("lastname");
var firstName = document.getElementById("firstname");
var birthdate = document.getElementById("birthdate");
var username = document.getElementById("username");
var userpwd = document.getElementById("userpwd");
var verifMdp = document.getElementById("verifMdp");
var usermail = document.getElementById("useremail");


lastName.addEventListener("input", checkNom, false);
firstName.addEventListener("input", checkPrenom, false);
birthdate.addEventListener("input", checkNaissance, false);
username.addEventListener("input", checkPseudo, false);
userpwd.addEventListener("input", checkMdp, false);
verifMdp.addEventListener("input", checkverifMdp, false);
usermail.addEventListener("input", checkEmail, false);

clearfields();

window.onpageshow = function(event) {
	if(event.persisted) {
   		 window.location.reload()
	}
};


function checkNom() {	/*Vérifie la validité du lastname (soit pas de caractère spéciaux)*/
	var texte = document.getElementById("lastname").value;
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
		document.getElementById("lastname").style.color = "#FF0000";
	else
		document.getElementById("lastname").style.color = "#000000";

	updateButton();		
}


function checkPrenom() {	/*Vérifie la validité du Prénom (Pas de caractères spéciaux)*/
	var texte = document.getElementById("firstname").value;
	var valid = true;

	for(var i = 0; i <= texte.length; i++){
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
		document.getElementById("firstname").style.color = "#FF0000";
	else
		document.getElementById("firstname").style.color = "#000000";

	updateButton();	
	
}


function checkNaissance() {	/*Vérifie la validité de la date de naissance (Respect de la forme imposée)*/
	var date_a_verif = document.getElementById("birthdate").value;
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
		document.getElementById("birthdate").style.color = "#FF0000";
	else
		document.getElementById("birthdate").style.color = "#000000";

	updateButton();
	
}


function checkPseudo() {	/*Vérifie la validité du Pseudo (Entre 3 et 20 caractères)*/
	var texte = document.getElementById("username").value;
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
		document.getElementById("username").style.color = "#FF0000";
	else
		document.getElementById("username").style.color = "#000000";

	updateButton();	
	
}


function checkMdp() {	/*Vérifie la validité du Mot de passe (entre 8 et 16 caractères)*/
	var texte = document.getElementById("userpwd").value;
	var valid = true;

	var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9\D]{8,16}/;
	mdp_valid = re.test(texte);

	/*if ( texte.length < 8 || texte.length > 16)
		valid = false;

	mdp_valid = valid;*/	

	if(!mdp_valid)
		document.getElementById("userpwd").style.color = "#FF0000";
	else
		document.getElementById("userpwd").style.color = "#000000";

	updateButton();	
	
}


function checkverifMdp(){	/*Vérifie que la valeur est la même que celle du mot de passe*/
	var texte = document.getElementById("verifMdp").value;
	var texte2 = document.getElementById("userpwd").value;
	var valid = false;

	if (texte.length == texte2.length){
		valid = true;
		for(var i = 0; i < texte.length; i++){
			var c = texte.charCodeAt(i);
			var c2 = texte2.charCodeAt(i)
			valid = valid && (c==c2);
		}
	}

	verifMdp_valid = valid;

	if(!verifMdp_valid)
		document.getElementById("verifMdp").style.color = "#FF0000";
	else
		document.getElementById("verifMdp").style.color = "#000000";

	updateButton();

}


function checkEmail() {	/*Vérifie la validité de l'email (Présence de @)*/
	var texte = document.getElementById("useremail").value;
	var valid = false;
	
	/*var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;*/
	var re = /^[\w.-]+@[\w-]+\.\w{2,6}/;
	valid = re.test(texte);

	email_valid = valid;	

	if(!email_valid)
		document.getElementById("useremail").style.color = "#FF0000";
	else
		document.getElementById("useremail").style.color = "#000000";

	updateButton();	
	
}



function updateButton(){
	form_valid = nom_valid && prenom_valid && naissance_valid && pseudo_valid && mdp_valid && email_valid 		&& verifMdp_valid;
	
	if (form_valid){
		document.getElementById('butonSub').disabled = '';
		document.getElementById('butonSub').className = "buttonEnabled";
	}
	else{
		document.getElementById('butonSub').disabled = 'disabled';
		document.getElementById('butonSub').className = "buttonDisabled";
	}
}

function clearfields(){
	var inputs = document.querySelectorAll(".champ1");
	console.log(inputs);
	for(var i = 0; i < inputs.length; i++){
		inputs[i].value = "";
	}
}

