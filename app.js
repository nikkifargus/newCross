


function checkValid(){


  var inp1 = document.getElementById('inp1');
  var inp2 = document.getElementById('inp2');
  if(inp1.checkValidity() === false){

    $('.emailError').show();

  } else if (inp1.checkValidity() === true){
    $('.emailError').hide();
  }
  if(inp2.checkValidity() === false){

    $('.passwordError').show();

  } else if (inp2.checkValidity() === true){
    $('.passwordError').hide();
  }
}

// function checkValid(){
//   var inp1 = document.getElementById('inp1');
//   var inp2 = document.getElementById('inp2');
//   if(inp1.checkValidity() === false){
//
//     $('.emailError').append('<div class="errorMessage"><img src="images/icon-error.svg"> Not a valid email address</div>');
//
//   } else if (inp2.checkValidity() === false){
//     $('.passwordError').append('<div><img src="images/icon-info.svg"> Password must be at least 7 characters</div>');
//   }
// }


// function checkValid(event){
//   // event.preventDefault();
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

// function append(){
//   console.log('clicked');
//     $('.passwordError').append('<div><img src="images/icon-error.svg"> Not a valid email address</div>');
// }
