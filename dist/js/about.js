let navBar = document.querySelector(".nav-bar");
//Select images
let img1 = document.querySelector('.img1');
let img2 = document.querySelector('.img2');
let img3 = document.querySelector('.img3');
let img4 = document.querySelector('.img4');
let img5 = document.querySelector('.img5');
let img6 = document.querySelector('.img6');
let img7 = document.querySelector('.img7');
let img8 = document.querySelector('.img8');

//Get percentage for the scroll
var h = document.documentElement, 
    b = document.body,
    st = 'scrollTop',
    sh = 'scrollHeight';

window.addEventListener('scroll', () => {
    if(window.scrollY != 0){
        navBar.classList.add('bg');
    }else {
        navBar.classList.remove('bg');
    }
    console.log("gegs");
});
//Fade img1 when the page loads
window.addEventListener('load', () => {
    img1.classList.add('opacity');
    img1.style.transform = "translateX(0)";

})

//Fade in images when scrolling
window.addEventListener('scroll', () => {
    if(window.scrollY >= 200){
        img2.classList.add('opacity');
        img3.classList.add('opacity');
        img2.style.transform = 'translateX(0)';
        img3.style.transform = 'translateX(0)';
    }
    if(window.scrollY >= 620){
        img4.classList.add('opacity');
        img5.classList.add('opacity');
        img6.classList.add('opacity');
        img4.style.transform = 'translateX(0)';
        img6.style.transform = 'translateX(0)';
    }
    if(window.scrollY >= 1120){
        img7.classList.add('opacity');
        img8.classList.add('opacity');
        img7.style.transform = 'translateX(0)';
        img8.style.transform = 'translateX(0)';
    }

    var percent = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
    console.log(percent);
})
