function signup(){
  event.preventDefault();
    let username =document.getElementById("username");
    let email =document.getElementById("email");
    let password =document.getElementById("password");
    let user={
        username:username.value,
        email:email.value,
        password:password.value
    }
    localStorage.setItem("user",JSON.stringify(user));
    console.log(user);
    console.log("user created");
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
        window.location.href="index.html";
        console.log("---");
    }
    else{
        console.log("login failed");
    }
}