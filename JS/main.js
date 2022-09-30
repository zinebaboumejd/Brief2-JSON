
function signup(){
    event.preventDefault();
      let username =document.getElementById("username");
      let email =document.getElementById("email");
      let password =document.getElementById("password");
      let user={
          username:username.value,
          email:email.value,
          password:password.value,
          rool:0
      }
      localStorage.setItem("user",JSON.stringify(user));
      console.log(user);
      console.log("user created");
      window.location.href="../HTML/login.html";
  }
  
  
  
  
  function login(){
      event.preventDefault();
      let email =document.getElementById("email");
      let password =document.getElementById("password");
      let user={
          email:email.value,
          password:password.value
      }
      let user1=JSON.parse(localStorage.getItem("user"));
      if(user.email==user1.email && user.password==user1.password){
          console.log("login successful");
          if(user1.rool==0){
            window.location.href="../HTML/index.html";
          }else{
              window.location.href="admin.html";
          }
        
          }
         
      else{
          console.log("login failed");
      }
  }
  function logout(){
      window.location.href="../HTML/login.html";
  }
  
  
  // 