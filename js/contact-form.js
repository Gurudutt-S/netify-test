function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  else{
    var inputEmail= document.getElementById("name");
    localStorage.setItem("name", inputEmail.value);

  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
      else{
        var inputEmail= document.getElementById("email");
        localStorage.setItem("email", inputEmail.value);
    
      }
  }
  
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
      return false;
  }
  else{
    var inputEmail= document.getElementById("subject");
    localStorage.setItem("subject", inputEmail.value);

  }
  
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  else{
    var inputEmail= document.getElementById("message");
    localStorage.setItem("message", inputEmail.value);

  }
  document.querySelector('.status').innerHTML = "Sent";
}
