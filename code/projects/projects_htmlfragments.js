console.log(document);
const projectURL = new URL(document.URL);
console.log(projectURL);

// const ogTitle = document.title;

const fragmentOrigin = projectURL.origin + "/htmlFractures";
const displayedPage = projectURL.searchParams.get("page") || "projectwelcome";

const htmlFragmentPlace = document.getElementById("htmlFragmentPlace");

const fragmentURL = new URL(fragmentOrigin + "/" + displayedPage + ".html");
fetch(fragmentURL).then((response) => response.text())
    .then((fragment) => {
        // console.log(fragment);
        htmlFragmentPlace.innerHTML = fragment;
        // console.log(htmlFragmentPlace);
        // htmlFragmentPlace.style.display = "none";
        // console.log(ogTitle, document.title)
        const titleFlag = document.getElementById("fragment__title_");
        let title = "";
        if (titleFlag) {
            title = titleFlag.innerText;
            titleFlag.outerHTML = "";
        }

        document.title = "Projects - " + title;
        updateImageEmbedLinks();
    })

