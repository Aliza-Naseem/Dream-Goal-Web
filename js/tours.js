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