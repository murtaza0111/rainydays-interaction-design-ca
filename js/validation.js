const form = document.querySelector(".contact");

let nameField = document.querySelector("#name");

let email = document.querySelector("#email");

let message = document.querySelector("#message");

function messageDialogue(element, messageType, messageColor, msg) {
  document.querySelector(`${element}`).innerHTML = `
    <span style="display:${messageType};color:${messageColor};font-size:12px;margin-left:10px;">${msg}</span>`;
}

function validateLength(validateString, len) {
  if (validateString.value.trim().length <= len) {
    return true;
  }
  return false;
}

function validateNameField() {
  if (validateLength(nameField, 2)) {
    messageDialogue(`#nameError`, "block", "red", "Name is required");
    return false
  } 
    messageDialogue(`#nameError`, "none", "red", "Name is required");
    return true
 
}

function validateEmail(checkEmail) {
  const isValidEmail =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return isValidEmail.test(String(checkEmail.value).toLowerCase());
}

function validateEmailField() {
  if (validateLength(email, 2)) {
    messageDialogue(`#emailError`, "block", "red", "Email is required");
    return false
  }else if(!validateEmail(email)){
    messageDialogue(`#emailError`, "block", "red", "Email is invalid");
    return false
  } 
    messageDialogue(`#emailError`, "none", "red", "Email is required");
    return true
}

function validateMessageField() {
  if (validateLength(message, 2)) {
  
  messageDialogue(`#messageError`, "block", "red", "Message is required");
    return false  } 
    messageDialogue(`#messageError`, "none", "red", "Message is required");
    return true
  
}

function validateFields() {
  event.preventDefault();

  if(validateNameField() &&  validateEmailField() && validateMessageField()){
    messageDialogue("#messageSubmitted","block","green","Message sent successfully. We will get in touch with you shortly.")
  }
}

form.addEventListener("submit", validateFields);



