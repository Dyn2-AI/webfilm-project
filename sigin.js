$(document).ready(function() {
      $('#submit').click(function(){
        var name = $('#name').val();
        var email = $('#email').val();
        var password = $('#password').val();

        if(name== ''){
        $('input[type="text"]').css("border","2px solid red");
        $('input[type="text"]').css("box-shadow","0 0 3px red");
          return false;
        }
        if(email== ''){
        $('input[type="email"]').css("border","2px solid red");
        $('input[type="email"]').css("box-shadow","0 0 3px red");
          return false;
        }
        if(password== ''){
        $('input[type="password"]').css("border","2px solid red");
        $('input[type="password').css("box-shadow","0 0 3px red");
        }
        if(IsEmail(email)==false){
          alert("Email id is invalid");
          return false;
        }
        $.post("", $("#myform").serialize(),  function(response) {
          $('#myform').fadeOut('slow',function(){
          $('#correct').html(response);
          $('#correct').fadeIn('slow');
       });
     });
    return false;
  });
 });
 function IsEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}