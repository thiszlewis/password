// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var upperCase = "HJKDSVGUYVHBVUYVBURYVBUEGVYU"
var lowerCase = "bkabvuybhvjuyebvvvjhrejbvhj"
function generatePassword(upperCase, lowerCase) {
  // Welcome aboard
  console.log("hey!  you clicked the button!");
  window.prompt("HOW MANY CHARACTERS WOULD YOU LIKE YOUR PASSWORD TO CONTAIN?");
  window.prompt("WOULD YOU WANT UPPERCASE OR LOWERCASE");
  window.confirm("PROCEED!");
  window.alert("PASSWORD GENERATOR");
return "1223344hjbfvbslibvhbvfsvsabjkcvygvivv";
}
if(upperCase === upperCase){
  console.log("good");
}
else if(lowerCase === lowerCase){
  cd
  console.log("invalid");

}
else{lowerCase}
 generatePassword(upperCase + lowerCase);
 
// Write password to the #password input





  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 


