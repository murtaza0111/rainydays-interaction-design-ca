const checkoutForm = document.querySelector("#checkoutForm");


let cardHolderName = document.getElementById("cardholdername");
let cardHolderNumber = document.getElementById("cardnumber");
let expirydate = document.getElementById("exprydate");
let cvvNumber = document.getElementById("cvv");

function messageDialogue(element, messageType, messageColor, msg) {
  document.querySelector(`${element}`).innerHTML = `
      <span style="display:${messageType};color:${messageColor};font-size:12px;margin-left:10px;">${msg}</span>`;
}

function validateLength(validateString, len, limit) {
    if(limit !== undefined){
        if (validateString.value.trim().length <= len || validateString.value.trim().length === limit) {
            return true;
          }
        return false;
    }
  if (validateString.value.trim().length <= len) {
    return true;
  }
  return false;
}

function validateNameField() {
  if (validateLength(cardHolderName, 2)) {
    messageDialogue(`#cardHolderNameError`, "block", "red", "Name is required");
    return false;
  }
  messageDialogue(`#cardHolderNameError`, "none", "red", "Name is required");
  return true;
}

function validateCardNumber(checkCardNum) {
    const isValidCardNumber =
    /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
  return isValidCardNumber.test(checkCardNum.value);
}
  

function validateCardNumberField(){
    if (validateLength(cardHolderNumber, 2)) {
        messageDialogue(`#cardNumberError`, "block", "red", "Card number is required");
        return false
      }else if(!validateCardNumber(cardHolderNumber)){
        messageDialogue(`#cardNumberError`, "block", "red", "Card number is invalid");
        return false
      } 
        messageDialogue(`#cardNumberError`, "none", "red", "Card number is required");
        return true
}

function validateDateField(){
    if (validateLength(expirydate, 2)) {
        messageDialogue(`#expireydateError`, "block", "red", "Expirey date is required");
        return false;
      }
      messageDialogue(`#expireydateError`, "none", "red", "Expirey date is required");
      return true;
}

function validateCvvField(){
    if (validateLength(cvvNumber, 1, 2)) {
        messageDialogue(`#cvvNumberError`, "block", "red", "3 digit cvv number is invalid");
        return false;
      }
      messageDialogue(`#cvvNumberError`, "none", "red", "Expirey date is required");
      return true;
}
function validateCheckoutForm() {
  event.preventDefault();
  if (validateNameField() && validateCardNumberField() && validateDateField() && validateCvvField()) {
    messageDialogue("#checkoutCart", "block", "green","Checkout successful")
    window.location.href = "./thankyou.html"
}
}

checkoutForm.addEventListener("submit", validateCheckoutForm);
