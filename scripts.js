const form = document.querySelector("form");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const phoneNumber = document.querySelector("#number");
const userPassword = document.querySelector("#user-password");
const userPasswordConfirm = document.querySelector("#user-password-confirm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (firstName.value.trim() === "") 
    {
        displayErrorMessage("first-error", "This field is required");
    } 
    else 
    {
        hideErrorMessage("first-error");
    }

    if (lastName.value.trim() === "") 
    {
        displayErrorMessage("last-error", "This field is required");
    } 
    else 
    {
        hideErrorMessage("last-error");
    }

    if (email.value.trim() === "") 
    {
        displayErrorMessage("email-error", "This field is required");
    } 
    else 
    {
        hideErrorMessage("email-error");
    }

    if (phoneNumber.value.trim() === "") 
    {
        displayErrorMessage("number-error", "This field is required");
    } 
    else 
    {
        hideErrorMessage("number-error");
    }

    if (userPassword.value.trim() === "") 
    {
        displayErrorMessage("pass-error", "This field is required");
    } 
    else 
    {
        hideErrorMessage("pass-error");
    }

    if (userPasswordConfirm.value.trim() === "") 
    {
        displayErrorMessage("passConfirm-error", "This field is required");
    } 
    else 
    {
        hideErrorMessage("passConfirm-error");
    }

})

function displayErrorMessage(id, message) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

function hideErrorMessage(id) {
    const errorElement = document.getElementById(id);
    errorElement.textContent = "";
    errorElement.style.display = "none";
}