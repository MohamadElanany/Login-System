//---------------- button element----------------------
let login = document.querySelector("#login");


//---------------- input login----------------------
let emailIn = document.getElementById("emailIn");
let passwordIn = document.getElementById("passwordIn");



//---------------- local storage----------------------
let userList = [];
if(localStorage.getItem("users") == null){
    userList = [];
}
else{
    userList = JSON.parse(localStorage.getItem("users"));
}





login.addEventListener("click" , function(){

    if (!emailIn.value || !passwordIn.value) {
        document.getElementById("requiredIn").style.display = "flex";
        document.getElementById("w-pas").style.display = "none";
        document.getElementById("w-mail").style.display = "none";
        return;
    }
    let userFound = false;

    for (let i = 0; i < userList.length; i++) {
        if (userList[i].email === emailIn.value) {
            userFound = true;
            if (userList[i].pas === passwordIn.value) {
                localStorage.setItem("i", i);
                window.location.href = "home.html";
                document.getElementById("w-pas").style.display = "none";
                document.getElementById("w-mail").style.display = "none";
                document.getElementById("requiredIn").style.display = "none";
                return;
            } else {
                document.getElementById("w-pas").style.display = "flex";
                document.getElementById("w-mail").style.display = "none";
                document.getElementById("requiredIn").style.display = "none";
                return;
            }
        }
    }

    if (!userFound) {
        document.getElementById("w-pas").style.display = "none";
        document.getElementById("w-mail").style.display = "flex";
        document.getElementById("requiredIn").style.display = "none";
    }
});
