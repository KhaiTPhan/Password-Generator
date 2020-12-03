// generate random password

function generate() {

//set password length
var passwordLength = document.getElementById("slider").value;


//possible password values
  
var values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!@#$%^&*_+";

  var password = "";

//create for loop to choose password characters
for(var i = 0; i <= passwordLength; i++) {
  password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));

}


//add password to textbox/display area
document.getElementById("password").value = password;  

}

//set default length display of 16
document.getElementById("length").innerHTML = "length: 16";

//function to set length based on slider position
document.getElementById("slider").oninput = function(){

    document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
}