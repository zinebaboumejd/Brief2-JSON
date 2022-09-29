let email =document.getElementById("email");
let password =document.getElementById("password");

let user = {
    email: email.value,
    password: password.value
};
// let json = JSON.stringify(user);
// localStorage.setItem("user", json);
// console.log("user add");



function login(){
  event.preventDefault();
    let email =document.getElementById("email");
    let password =document.getElementById("password");
    // let result = document.getElementById("result");
    let user=localStorage.getItem("user");
    let data=JSON.parse(user);
    console.log(data);
}