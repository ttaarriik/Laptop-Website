let navBar = document.querySelector(".nav-bar");

//Images
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");

window.addEventListener('scroll', () => {
    if(window.scrollY != 0){
        navBar.classList.add('bg');
    }else {
        navBar.classList.remove('bg');
    }
    console.log(scrollY);
    if(window.scrollY >= 85) {
        img3.classList.add('opacity');
        img4.classList.add('opacity');
    }
    if(window.scrollY >= 400) {
        img5.classList.add('opacity');
        img6.classList.add('opacity');
    }
});

window.addEventListener('load', () => {
    img1.classList.add('opacity');
    img2.classList.add('opacity');

});


