export default () => {
    // Nav and Menu
    const menuBtn = document.querySelector(".nav-bar_menu");
    const navMenu = document.querySelector(".nav-menu");
    const links = document.querySelectorAll(".nav-menu_link");
    const barLinks = document.querySelectorAll(".nav-bar_link");

    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("opened");
        navMenu.classList.toggle("opened");
    });

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            links.forEach((link) => {
                link.classList.remove("select");
            });

            e.target.classList.add("select");
            menuBtn.classList.toggle("opened");
            navMenu.classList.toggle("opened");
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