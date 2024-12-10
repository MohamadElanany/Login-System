//---------------- button element----------------------
let logout = document.querySelector("#logout");



//---------------- local storage----------------------
let numb = localStorage.getItem("i");

let userList = [];
if(localStorage.getItem("users") == null){
    userList = [];
}
else{
    userList = JSON.parse(localStorage.getItem("users"));
}


document.getElementById("nameUser").innerHTML = `Welcome ${userList[numb].name}`;




logout.addEventListener("click" , function(){
    window.location.href = "index.html";
})