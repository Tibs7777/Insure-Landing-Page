burger = document.querySelector('.header__burger');
navBar = document.querySelector('.nav-bar');
body = document.body;

let navOpen = false;

const openNav = () => {
    navBar.className = "nav-bar nav-bar--open";
    body.classList.add("nav--open")
    burger.classList.add("header__burger--nav-open")
    window.scrollTo(0, 0)
    return navOpen = true;
}

const closeNav = () => {
    navBar.className = "nav-bar nav-bar--closed";
    body.classList.remove("nav--open")
    burger.classList.remove("header__burger--nav-open")
    return navOpen = false;
}

const toggleNav = () => {
    if(!navOpen){
        openNav();
    } else {
        closeNav();
    }
}

burger.onclick = function() {toggleNav()}
navBar.addEventListener('transitionend', () => {
    let style = getComputedStyle(navBar)
    if(style.left !== "0px" && navBar.classList.contains('nav-bar--open')){
        closeNav();
    }
  });