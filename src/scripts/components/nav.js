let menuOpened = false;

export default () => {
    // Nav and Menu
    const menuBtn = document.querySelector(".nav-bar_menu");
    const navMenu = document.querySelector(".nav-menu");
    const links = document.querySelectorAll(".nav-menu_link");
    const barLinks = document.querySelectorAll(".nav-bar_link");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("opened");
        navMenu.classList.toggle("opened");

        menuOpened = !menuOpened;
    });

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            links.forEach((link) => {
                link.classList.remove("select");
            });

            e.target.classList.add("select");
            menuBtn.classList.toggle("opened");
            navMenu.classList.toggle("opened");

            menuOpened = !menuOpened;
        });
    });
    barLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            barLinks.forEach((link) => {
                link.classList.remove("select");
            });

            e.target.classList.add("select");
        });
    });
}

// nav-bar hidden on scroll up
const navBar = document.querySelector(".nav-bar");

let lastScroll = 0;
let scroll = 0;

let ticking = false;

function changeNavBarHidden(scroll) {
    const navBarFlag = window.innerHeight / 2;
    const deltaScroll = scroll - lastScroll;

    if(!menuOpened){
        if(Math.abs(deltaScroll) > 16){
            if(deltaScroll > 0 && !(scroll <= navBarFlag)){
                navBar.classList.add("hidden");
            } else {
                navBar.classList.remove("hidden");
            }
        }
    }else{
        navBar.classList.remove("hidden");
    }
}

window.addEventListener('scroll', function(e) {
    scroll = window.pageYOffset || document.documentElement.scrollTop;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            changeNavBarHidden(scroll);

            lastScroll = scroll <= 0 ? 0 : scroll;
            ticking = false;
        });
    }

    ticking = true;
});