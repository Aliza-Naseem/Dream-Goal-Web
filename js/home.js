document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("form");
    const originInput = document.querySelector("#origin");
    const destinationInput = document.querySelector("#destination");
    const departureInput = document.querySelector("#departure");
    const returnInput = document.querySelector("#return");
    const adultsInput = document.querySelector("#adults");
    const childrenInput = document.querySelector("#children");
    const infantsInput = document.querySelector("#infants");
    const classInput = document.querySelector("#class");;
    const airlinesInput = document.querySelector("#airlines");

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

    fetch("sendemail.php", {
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

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 2500, 
      disableOnInteraction: false,
    },
    breakpoints: {
      220: {
        slidesPerView: 1,
      },
      700: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 3,
      }
    }
  });

document.getElementById("packages-btn").addEventListener("click", function (event){
    window.location.href= "holidays-packages.html";
});

document.getElementById("umrahbus-btn").addEventListener("click", function (event){
    window.location.href= "umrah-by-bus.html";
});

document.getElementById("umrahair-btn").addEventListener("click", function (event){
    window.location.href= "umrah-by-air.html";
});

document.getElementById("dubaitour-btn").addEventListener("click", function (event){
    window.location.href= "dubai-city-tour.html";
});

document.getElementById("musandam-btn").addEventListener("click", function (event){
    window.location.href= "musandam-dhow-cruise.html";
});

document.getElementById("desertsafari-btn").addEventListener("click", function (event){
    window.location.href= "desert-safari-dubai.html";
});

document.getElementById("abudhabitour-btn").addEventListener("click", function (event){
    window.location.href= "abudhabi-city-tour.html";
});

document.getElementById("packages-btn2").addEventListener("click", function (event){
    window.location.href= "holidays-packages.html";
});

document.getElementById("marinacruise-btn").addEventListener("click", function (event){
    window.location.href= "dubai-marina-cruise.html";
});

document.getElementById("usa-visa").addEventListener("click", function (event){
    window.location.href= "apply-usa-visa.html";
});

document.getElementById("uk-visa").addEventListener("click", function (event){
    window.location.href= "apply-uk-visa.html";
});

document.getElementById("uae-visa").addEventListener("click", function (event){
    window.location.href= "apply-uae-visa.html";
});

document.getElementById("asia-visa").addEventListener("click", function (event){
    window.location.href= "apply-asia-visa.html";
});

document.getElementById("brazil-visa").addEventListener("click", function (event){
    window.location.href= "apply-brazil-visa.html";
});

document.getElementById("russian-visa").addEventListener("click", function (event){
    window.location.href= "apply-russian-visa.html";
});

document.getElementById("globalvisas-btn").addEventListener("click", function (event){
    window.location.href= "globalvisas.html";
});