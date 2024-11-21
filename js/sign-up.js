 /* ---------------------------------------------- Localstorge -------------------------------------------------------- */

 let username = document.getElementById('username');
 let email = document.getElementById('email');
 let number = document.getElementById('number');
 let jop = document.getElementById('jop');
 let password = document.getElementById('password');

 let btn = document.getElementById('btn');

 btn.addEventListener('click' , function() {

 if (username.value === "" || password.value === "" || email.value === "" || number.value === "" || jop.value === "" )
 {
 alert ('enter your account') 
 
 }

 else {

    localStorage.setItem('username' , username.value);
    localStorage.setItem('password' , password.value);
    localStorage.setItem('number' , number.value);
    localStorage.setItem('email' , email.value);
    localStorage.setItem('jop' , jop.value);

    setTimeout( () => {
        window.location = "../html/sign-in.html" ;
     } , 1500 );


 }

 })


 
