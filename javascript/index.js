function validateEmail(inputText) {
  var mailFormat =  /\S+@\S+\.\S+/;
  if (inputText.value.match(mailFormat)) {
    alert("  Thankyou for Applying")
    window.open("../Html/thankyou.html")
    return true; 
  } 
  else  {

    alert("Include @ & .com")
    return false;
}
}


