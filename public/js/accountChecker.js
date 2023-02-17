window.onload = function () {
    console.log("Client-> accountChecker.js loaded");
    function submitClicked(event) {
        //in case of someone trying to be cheeky and submit the form without entering info
        if(form.email.value == "") {
            alert("Error: Email cannot be blank!");
            form.email.focus();
            event.preventDefault();
            return false;
        }
        if(form.email.value.indexOf("@") == -1) {
            alert("Error: Email must contain @");
            form.email.focus();
            event.preventDefault();
            return false;
        }
        if(form.email.value.indexOf(".") == -1) {
            alert("Error: Email must contain .");
            form.email.focus();
            event.preventDefault();
            return false;
        }
        if(form.password.value == "") {
            alert("Error: Password cannot be blank!");
            form.password.focus();
            event.preventDefault();
            return false;
        }
        if(form.password.value.length < 8) {
            alert("Error: Password must contain at least eight characters!");
            form.password.focus();
            event.preventDefault();
            return false;
        }
        if(form.password.value == form.email.value) {
            alert("Error: Password must be different from Email!");
            form.password.focus();
            event.preventDefault();
            return false;
        }
        if(form.firstName.value == "") {
            alert("Error: First Name cannot be blank!");
            form.firstName.focus();
            event.preventDefault();
            return false;
        }
        if(form.lastName.value == "") {
            alert("Error: Last Name cannot be blank!");
            form.lastName.focus();
            event.preventDefault();
            return false;
        }
    }
    const form = document.getElementById('accountForm');
    form.addEventListener('submit', submitClicked);
}