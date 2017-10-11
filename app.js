
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

//TRIAL WITHOUT USING BUILT IN VALIDATOR

// function checkValid(){
//   // event.preventDefault();
//   $('form').submit(function(e){
//     e.preventDefault();
//   });
//
//   const email = document.form.email.value;
//   const reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//   const password = document.form.password.value;
//
//   if(email === null || email === '' || reg.test(email)=== false){
//     console.log('email');
//     $('.emailError').show();
//   } else if (reg.test(email)=== true){
//     $('.emailError').hide();
//     return true;
//   } else if(password.length < 7){
//     $('.passwordError').show();
//   } else if(password.length > 7){
//     $('.passwordError').hide();
//   }
// }

//INITIAL TRIAL FOR ERROR MESSAGES
// function checkValid(){
//
//
//
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

//TESTING APPEND WORKING
// function append(){
//   console.log('clicked');
//   $('.passwordError').show();
// }
