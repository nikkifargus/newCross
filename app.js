function checkValid(){
  var inp1 = document.getElementById('inp1');
  var inp2 = document.getElementById('inp2');
  if(inp1.checkValidity() === false){
    document.getElementById('emailError').innerHTML = 'Not a valid email address';
  } else if (inp2.checkValidity() === false){
    document.getElementById('passwordError').innerHTML = 'Password must be at least 7 characters';
  }
}
