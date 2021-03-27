let navBar = document.querySelector(".nav-bar");

//Images
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");

let imgArray = [img1, img2, img3, img4, img5, img6];

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


window.addEventListener('scroll', () => {
    if(window.scrollY != 0){
        navBar.classList.add('bg');
    }else {
        navBar.classList.remove('bg');
    }

    imgArray.forEach(img => {
        if(isInViewPort(img)){
            img.classList.add('opacity');
        }
    })
});

window.addEventListener('load', () => {
    imgArray.forEach(img => {
        if(isInViewPort(img)){
            img.classList.add('opacity');
        }
    })

});


