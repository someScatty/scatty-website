let imageData;

const docURL = new URL(document.URL);
// console.log(docURL);

function createImageEmbed(hrefElement, color) {
    console.log("creation");
    const imageEmbed = document.createElement("div");
    // imageEmbed.class = "window imagepreview";
    imageEmbed.className = "window imagepreview";
    imageEmbed.style.backgroundColor = color;
    // imageEmbed.style.width = "fit-content";

    const imagePreview = document.createElement("img");
    imagePreview.src = new URL(hrefElement);
    imageEmbed.appendChild(imagePreview);

    // console.log(this);

    // const script = document.createElement("script");
    // script.innerHTML = ""

    return imageEmbed;
}

function updateImageEmbedLinks() {
    // console.log("reload");
    const aes = document.getElementsByTagName("a");
    console.log("reload", aes);
    for (let index = 0; index < aes.length; index++) {
        const hrefL = aes[index];
        const aLink = new URL(hrefL.href);

        // hrefL.removeEventListener("onhover", );
        if ((hrefL.host = docURL.host) && (aLink.pathname = "/image-viewer.html")) {
            const imageName = aLink.searchParams.get("image");
            const dataGetting = new URL(docURL.origin + "/code/image_metadata.json");
            fetch(dataGetting).then((response) => response.json())
                .then((response) => {
                    console.log()
                    const list = response.list;
                    for (let index2 = 0; index2 < list.length; index2++) {
                        if (list[index2].name == imageName) {
                            const file_path = aLink.origin + "/images/" + list[index2].file_path;
                            // resolve(createImageEmbed(file_path));
                            const embed = createImageEmbed(file_path, list[index2].color || "white");
                            // embed.style.display = "none";
                            hrefL.appendChild(embed);
                            break;
                        }
                    }
                })
        }
    }
}
updateImageEmbedLinks();