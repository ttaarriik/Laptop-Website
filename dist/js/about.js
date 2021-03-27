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
let imgArray = [img2, img3, img4, img5, img6, img7, img8];

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

});
//Fade img1 when the page loads
window.addEventListener('load', () => {
        console.log("grsee")
        img1.classList.add('opacity');
        img1.style.transform = "translateX(0)";
  
})

//Fade in images when scrolling
window.addEventListener('scroll', () => {
    imgArray.forEach(img => {
        if(isInViewPort(img)){
            img.classList.add('opacity');
            img.style.transform = 'translateX(0)';
        }
    })
})
