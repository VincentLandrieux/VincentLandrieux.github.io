export default () => {
    // Work
    let xhr = new XMLHttpRequest();
    let url = "./projets.json";

    const work = document.querySelector(".projets");
    const navWork = document.querySelector(".projets_nav");

    try{
        xhr.addEventListener('load', () => {
            let response = JSON.parse(xhr.response);

            response.categories.forEach((item) => {
                addNavItem(item.name, item.ref);
                createSection(item);
            });
        });

        xhr.open("GET", url);
        xhr.send();
    }catch(error){
        console.log(error);
    }

    function addNavItem(name, ref){
        let a = document.createElement("a");
        a.classList.add("projets_nav_link");
        a.href = "#"+ref;
        a.innerHTML = name;
        navWork.appendChild(a);
    }
    function createSection(category){
        let catName = document.createElement("div");
        catName.classList.add("projets_category");
            let flag = document.createElement("div");
            flag.id = category.ref;
            flag.classList.add("flag");
            catName.appendChild(flag);

            let catTitle = document.createElement("p");
            catTitle.classList.add("projets_category_name");
            catTitle.innerHTML = category.name;
            catName.appendChild(catTitle);

            let catNumber = document.createElement("p");
            catNumber.classList.add("projets_category_nb");
            catNumber.innerHTML = "0"+category.projects.length;
            catName.appendChild(catNumber);
        work.appendChild(catName);

        let content = document.createElement("div");
        content.classList.add("projets_container");

            category.projects.forEach((item) => {
                let box = document.createElement("a");
                box.classList.add("projets_card");
                box.href = item.link_url;
                box.style.backgroundImage = "url('"+item.img_url+"')";
                    let title = document.createElement("p");
                    title.classList.add("projets_card_title");
                    title.innerHTML = item.name;
                    box.appendChild(title);
                content.appendChild(box);
            });
        work.appendChild(content);
    }
}