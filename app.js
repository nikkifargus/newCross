function checkValid(){
  var inp1 = document.getElementById('inp1');
  var inp2 = document.getElementById('inp2');
  if(inp1.checkValidity(event) === false){
    event.preventDefault();
    // $('#emailError').addClass('error_show');
    console.log('hit');

  } else if (inp2.checkValidity() === false){
    document.getElementById('passwordError').innerHTML = 'Password must be at least 7 characters';
  }
}




// function checkValid(){
//
//   const email = document.registerForm.email.value;
//   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   const password = document.registerForm.password.value;
//
//   if(email === null || email === '' || reg.test(email)=== false){
//     console.log('email');
//     $('.emailError').append('<div><img src="images/icon-error.svg"> Not a valid email address</div>');
//     return false;
//   }else if(password.length<7){
//     $('.passwordError').append('<div><img src="images/icon-info.svg">Password must be at least 7 characters</div>');
//     return false;
//   }
// }
