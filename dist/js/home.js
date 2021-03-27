let bannerFadeIn = document.querySelector("#fade-in");
let navBar = document.querySelector(".nav-bar");
let bg = document.querySelector('.bg');
let draggedElement = document.querySelector('#child');
let contentLeft = document.querySelector('.content');
let contentRight = document.querySelector('.content-a');
let footer = document.querySelector(".index-footer");

const isInViewPort = el => {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 && 
        rect.bottom <= 
        (window.innerHeight || 
        document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth ||
        document.documentElement.clientWidth)
    );
};



//Fade in effect when page is loaded 
window.addEventListener("load", () => {
    if(isInViewPort(bannerFadeIn)){
        bannerFadeIn.classList.add('fade-in');
    }
})

//Fade in navber when scrolled
 
window.addEventListener('scroll', () => {

    if(window.scrollY != 0){
        navBar.classList.add('bg');
    }else {
        navBar.classList.remove('bg');
    }

    if(isInViewPort(contentLeft)){   
        contentLeft.classList.add('fade-in');
        contentLeft.classList.remove('opacity');
    }
    if(isInViewPort(contentRight)){
        contentRight.classList.add('fade-in');
        contentRight.classList.remove('opacity');
    }
    
   
})


navBar.addEventListener('click', () => {
    navBar.classList.add = 'bg';
})


