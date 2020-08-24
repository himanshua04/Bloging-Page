
function validateForm(){
    const email = document.getElementById("email-input-box").value;
    const password = document.getElementById("password-input-box").value;
    let emailError = document.getElementById("email-error-box")
    let passwordErrorBox = document.getElementById("password-error-box");
    let emailErrorMessage =true;
    let passwordErrorMessage =true;
    
    if(email.trim().length === 0){
        emailError.innerText = "please enter valid email";
        emailErrorMessage = false;

    }
    if(password.trim().length === 0){
        passwordErrorMessage = false;
        passwordErrorBox.innerText = "please enter a valid password";     
    }

    return emailErrorMessage && passwordErrorMessage;
}


function clearError(){
    let emailError = document.getElementById("email-error-box").innerText = "";
    let passwordErrorBox = document.getElementById("password-error-box").innerText = "";
}