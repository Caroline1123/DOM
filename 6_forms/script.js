const nameField = document.querySelector("#firstname");
const nameDisplay = document.querySelector("#display-firstname");
const ageField = document.querySelector("#age");
const hardTruth = document.querySelector("#a-hard-truth");
const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwd-confirm");


nameField.addEventListener("keyup", (event) => {
    nameDisplay.innerText = nameField.value;
})

// Add a keyup listener on the second input (the number input), so that if the age is below 18 the content of the section a-hard-truth remains hidden, otherwise show them this hard to swallow fact.
ageField.addEventListener("keyup", (event) => {
    console.log(age.value);
    if (parseInt(age.value) < 18 || (age.value) == "") {
        hardTruth.style.visibility = "hidden";
    }
    else {
        hardTruth.style.visibility = "visible";
    }
})

// Well this is a common one. Add a keyup listener on both fields and show a visual hint (for instance turn the input border red) , add a validation, if the password is too short (less than 6 characters) or if the password and its confirmation do not match.
// Add error messages if the input values doesnt pass the validation
const errorSpan = document.createElement("span");

pwdConfirm.addEventListener("keyup", (event) => {
    if ((pwdConfirm.value === pwd.value) && (pwd.value.length > 5)) {
        pwdConfirm.style.border = "3px solid green";
        pwd.style.border = "3px solid green";
    }
    else {
        pwdConfirm.style.border = "3px solid red";
        pwd.style.border = "3px solid red";
        if (pwdConfirm.value != pwd.value) {
            errorSpan.innerText = "Password and password confirmation do not match."
        }
        else if (pwd.value.length < 6) {
            errorSpan.innerText = "Password too short.";
        }
    }
})

pwd.parentNode.appendChild(errorSpan);

// Finally, use a change listener on the <select> field to toggle a dark mode on the whole page. For ease of use, we'll say that the dark mode is just turning the background black and the text white.
const darkMode = document.querySelector("#toggle-darkmode");
const body = document.querySelector("body");
darkMode.addEventListener("change", (event) => {
    let option = darkMode.options[darkMode.selectedIndex];
    if (option.value === "dark") {
        body.style.backgroundColor= "black";
        body.style.color = "white";
    }
    else {
        body.style.backgroundColor= "white";
        body.style.color = "black";
    }
})