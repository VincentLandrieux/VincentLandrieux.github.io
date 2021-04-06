var header;
var footer;

window.onload = () => {
    header = document.querySelector("header");
    footer = document.querySelector("footer");

    createHeader();
    createFooter();
};


function createHeader(){
    let nav = document.createElement("nav");
        let logo = document.createElement("div");
        logo.classList.add("logo");
            let indexLink = document.createElement("a");
            indexLink.href = "index.html";
            indexLink.innerHTML = "Vincent <b>LANDRIEUX</b>";
            logo.appendChild(indexLink);
        nav.appendChild(logo);

        let work = document.createElement("div");
        work.classList.add("work");
            let workLink = document.createElement("a");
            workLink.href = "work.html";
            workLink.innerHTML = "Projets";
            work.appendChild(workLink);
        nav.appendChild(work);
    header.appendChild(nav);
}

function createFooter(){
    let links = document.createElement("div");
    links.classList.add("links");
        let githubLink = document.createElement("a");
        githubLink.href = "https://github.com/VincentLandrieux/";
        githubLink.style.backgroundImage = "var(--github)";
        links.appendChild(githubLink);

        let linkedinLink = document.createElement("a");
        linkedinLink.href = "https://fr.linkedin.com/in/vincent-landrieux";
        linkedinLink.style.backgroundImage = "var(--linkedin)";
        links.appendChild(linkedinLink);
    footer.appendChild(links);

    let contact = document.createElement("div");
    contact.classList.add("contact");
        let contactLink = document.createElement("a");
        contactLink.href = "./contact.html";
        contactLink.innerHTML = "Contact";
        contact.appendChild(contactLink);
    footer.appendChild(contact);
}
