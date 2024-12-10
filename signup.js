//---------------- button element----------------------
let signup = document.querySelector("#signup");


//---------------- input signup----------------------
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let passwordInput = document.getElementById("password");




//---------------- local storage----------------------
let userList = [];
if(localStorage.getItem("users") == null){
    userList = [];
}
else{
    userList = JSON.parse(localStorage.getItem("users"));
}







signup.addEventListener("click", function () {
    console.log("click signup"); 
    

    if (!nameInput.value || !emailInput.value || !passwordInput.value) {
        document.getElementById("required").style.display = "flex";
        document.getElementById("success").style.display = "none";
        document.getElementById("Invalid").style.display = "none";
        document.getElementById("already").style.display = "none";
        return;
    }

    let user = {
        name: nameInput.value,
        email: emailInput.value,
        pas: passwordInput.value
    };

    let validationResult = validate(user);

    if (validationResult === 3) {
        userList.push(user);
        localStorage.setItem("users", JSON.stringify(userList));
        document.getElementById("success").style.display = "flex";
        document.getElementById("Invalid").style.display = "none";
        document.getElementById("already").style.display = "none";
        document.getElementById("required").style.display = "none";

        nameInput.value = "";
        emailInput.value = "";
        passwordInput.value = "";

        window.location.href = "index.html";

    } else if (validationResult === 2) {
        document.getElementById("success").style.display = "none";
        document.getElementById("Invalid").style.display = "flex";
        document.getElementById("already").style.display = "none";
        document.getElementById("required").style.display = "none";
    } else if (validationResult === 1) {
        document.getElementById("success").style.display = "none";
        document.getElementById("Invalid").style.display = "none";
        document.getElementById("already").style.display = "flex";
        document.getElementById("required").style.display = "none";
    }
});




function validate(element) {
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    for(var i=0 ; i<userList.length ; i++){
        if(userList[i].email == element.email){
            return  1;
        }
    }
        if (!(regex.test(element.email))){
            return 2;
        }
        else {
            return 3;
        }
}













