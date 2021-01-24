let bannerFadeIn = document.querySelector("#fade-in");
let navBar = document.querySelector(".nav-bar");
let bg = document.querySelector('.bg');
let draggedElement = document.querySelector('#child');
let contentLeft = document.querySelector('.content');
let contentRight = document.querySelector('.content-a');



//Fade in effect when page is loaded
window.addEventListener("load", () => {
    bannerFadeIn.classList.add('fade-in');
})

//Fade in navber when scrolled

window.addEventListener('scroll', () => {
    if(window.scrollY != 0){
        navBar.classList.add('bg');
    }else {
        navBar.classList.remove('bg');
    }

    if(window.scrollY >= 220){
        contentLeft.classList.add('fade-in');
        contentLeft.classList.remove('opacity');
        contentRight.classList.add('fade-in');
        contentRight.classList.remove('opacity');
    }else {
        contentLeft.classList.remove('fade-in');
        contentLeft.classList.add('opacity');
        contentRight.classList.remove('fade-in');
        contentRight.classList.add('opacity');
    }
    
   
})


navBar.addEventListener('click', () => {
    navBar.classList.add = 'bg';
})


