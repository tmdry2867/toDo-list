// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");
// //const loginButton = document.querySelector("#login-form button");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";
// function onLoginSubmit(event){
//    event.preventDefault();
//    const username = loginInput.value;
//    localStorage.setItem(USERNAME_KEY, username);
//    loginForm.classList.add(HIDDEN_CLASSNAME);
// //    greeting.innerText = "Hello " + username;
//     greeting.innerText = `Hello ${username}`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
//     console.log(USERNAME_KEY);
//     // const username = loginInput.value;
//     // if(username ===""){
//     //     alert("Please write your name");
//     // }else if(username.length > 15){
//     //     alert("Your name is too long");
//     // }
//     // console.log(username);
// }

// // function handleLinkClick(event){
// //     event.preventDefault();
// //     console.log(event);
// // }
// // loginForm.addEventListener("submit", onLoginSubmit);
// // link.addEventListener("click", handleLinkClick);
// // loginButton.addEventListener("click", onLoginBtnClick);

// const savedUsername = localStorage.getItem(USERNAME_KEY);

// if(savedUsername === null){
//     loginForm.classList.remove(HIDDEN_CLASSNAME);
//     loginForm.addEventListener("submit", onLoginSubmit);
//    //show the Form
// } else{

//     //show the greeting
// }

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}