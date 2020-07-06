var main;
var nav;

var xhr = new XMLHttpRequest();
var url = "asset/work.json";

window.addEventListener('load', () => {
    main = document.querySelector("main");
    nav = main.querySelector("nav ul");

    xhr.addEventListener('load', () => {
        let response = JSON.parse(xhr.response);

        response.categories.forEach((item) => {
            addNavItem(item.name, item.ref);
            createSection(item);
        });
    });

    xhr.open("GET", url);
    xhr.send();
});

function addNavItem(name, ref){
    let li = document.createElement("li");
        let a = document.createElement("a");
        a.href = "#"+ref;
        a.innerHTML = name;
        li.appendChild(a);
    nav.appendChild(li);
}

function createSection(category){
    let section = document.createElement("section");
    section.id = category.ref;
        let catName = document.createElement("div");
        catName.classList.add("category-name");
            let catTitle = document.createElement("h6");
            catTitle.innerHTML = category.name;
            catName.appendChild(catTitle);

            let catNumber = document.createElement("p");
            catNumber.innerHTML = "0"+category.projects.length;
            catName.appendChild(catNumber);
        section.appendChild(catName);

        let content = document.createElement("div");
        content.classList.add("content");
            category.projects.forEach((item) => {
                let box = document.createElement("div");
                box.classList.add("box");
                box.style.backgroundImage = "url('"+item.img_url+"')";
                    let link = document.createElement("a");
                    link.href = item.link_url;
                        let linkTitle = document.createElement("h4");
                        linkTitle.classList.add("box_title");
                        linkTitle.innerHTML = item.name;
                        link.appendChild(linkTitle);
                    box.appendChild(link);
                content.appendChild(box);
            });

        section.appendChild(content);
    main.appendChild(section);
}
