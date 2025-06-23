document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const usernameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const numberInput = document.querySelector("#number");
    const messageText = document.querySelector("#message");

    function showInputError(input, message) {
        const formControl = input.parentElement;
        formControl.className = "form-input error animate_animated animate_headShake";
        const small = formControl.querySelector("small");
        small.innerText = message;
        setTimeout(function () {
            formControl.className = "form-input error";
        }, 500);
    }

    function showInputSuccess(input) {
        const formControl = input.parentElement;
        formControl.className = "form-input success animate_animated animate_bounceIn";
    }

    function checkEmailValidity(input) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(input.value)) {
            showInputSuccess(input);
            return true;
        } else {
            showInputError(input, 'Email is not valid');
            return false;
        }
    }

    function checkRequiredFields(inputArr) {
        let isValid = true;
        inputArr.forEach(function(input) {
            if (input.value.trim() === '') {
                showInputError(input, `${getFieldName(input)} is required`);
                isValid = false;
            } else {
                showInputSuccess(input);
            }
        });
        return isValid;
    }

    function getFieldName(input) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1);
    }

    document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = new FormData(this);

    fetch("sendemailcontact.php", {
        method: "POST",
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);  
        alert(data);  
    })
    .catch(error => console.error("Error:", error));
});
});