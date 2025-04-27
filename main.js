let passLength = document.getElementById("passLength");
let lengthVal = document.getElementById("lengthVal");

passLength.addEventListener("input",() =>{
    lengthVal.textContent = passLength.value;
})


function generate(){
    let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
    let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numbers = "1234567890";
    let characters = "&(-_)=+°}]@^`|[{#";

    let lc = document.getElementById("lc");
    let uc = document.getElementById("uc");
    let nums = document.getElementById("nums");
    let chars = document.getElementById("chars");
    let generatedPassword = document.getElementById("generatedPass");


    let allowedChars = "";
    let password = "";

    if (lc.checked){
        allowedChars += lowerLetters;
    }
    if (uc.checked){
        allowedChars += upperLetters;
    }
    if (nums.checked){
        allowedChars += numbers;
    }
    if (chars.checked){
        allowedChars += characters;
    }

    for (let i = 0;i < passLength.value;i++){
        let randomItem = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomItem];
    }

    generatedPassword.value = password;



}
let copyBtn = document.getElementById("copyBtn");
let copyAlert = document.getElementById("copyAlert");
copyAlert.style.display = "none";

copyBtn.addEventListener("click",function(){
    let password = document.getElementById("generatedPass");
    password.select();
    navigator.clipboard.writeText(password.value);
    copyBtn.style.background = "#80b918"
    copyBtn.textContent = "Copied !"
    copyAlert.style.display = "block";
    setTimeout(() => {
        copyBtn.style.background = "orange"
        copyBtn.textContent = "Copy"
    copyAlert.style.display = "none";
        
    },4000);
})

let password = document.getElementById("generatedPass");
let copyMsg = document.getElementById("copyMsg");
copyMsg.style.display = "none"
password.addEventListener("click",() =>{
    let password = document.getElementById("generatedPass");
    password.select();
    navigator.clipboard.writeText(password.value);
    copyMsg.style.display = "block"
    password.style.color = "rgba(255, 245, 245, 0.66)"
    setTimeout(() => {
        copyMsg.style.display = "none"
        password.style.color = "white"
        
    },3000);
});
