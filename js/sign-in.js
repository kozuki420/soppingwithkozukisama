const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


 /* ---------------------------------------------- Localstorge -------------------------------------------------------- */

 let username = document.getElementById('username');
 let password = document.getElementById('password');
 let btn = document.getElementById('btn');

 let getusername = localStorage.getItem('username')
 let getpassword = localStorage.getItem('password')

 btn.onclick = function () {

 if (username.value === "" | password.value === "")
 {
	alert ('enter your account')
 }
 else {
	if (
		 getusername &&
		 getusername === username.value  &&
		 getpassword && getpassword  === password.value
	)
	{
		setTimeout( () => {
			window.location = "../html/index.html" ;
		 } , 1500 );

	}
	else {
		alert ('غلط')
	}
 }
 
  }