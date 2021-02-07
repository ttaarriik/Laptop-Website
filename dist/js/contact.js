let navBar = document.querySelector(".nav-bar");
let form = document.querySelector("form");
let wrapper = document.querySelector(".wrapper");




window.addEventListener('load', () => {
    form.classList.add('animation');
    wrapper.classList.add('animation');
})

window.addEventListener('scroll', () => {
    if(window.scrollY != 0){
        navBar.classList.add('bg');
    }else {
        navBar.classList.remove('bg');
    }
    console.log("gegs");
});