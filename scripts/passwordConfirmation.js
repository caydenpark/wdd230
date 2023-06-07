const password1 = document.querySelector("#password1");
const password2 = document.querySelector("#password2");
const message = document.querySelector("#formmessage");

function checkSame(){
    if (password1.value !== password2.value){
        message.textContent = "Passwords do not match";
        message.style.visibility = "show";
        password2.style.backgroundColor = "#fff0f3";
		password2.value = "";
		password2.focus();
    }
    else{
        message.style.display = "none";
        password2.style.backgroundColor = "#fff";
		password2.style.color = "#000";
    }
}