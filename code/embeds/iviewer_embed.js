function createImageEmbed(hrefElement, color) {
    // console.log("creation");
    const imageEmbed = document.createElement("div");
    imageEmbed.className = "window embed imagepreview";
    imageEmbed.style.backgroundColor = color;

    const imagePreview = document.createElement("img");
    imagePreview.src = new URL(hrefElement);
    imageEmbed.appendChild(imagePreview);

    return imageEmbed;
}

function updateImageEmbeds() {
    const aes = document.querySelectorAll("a"); // have a feeling this is better
    // console.log("reload", aes);
    for (let index = 0; index < aes.length; index++) {
        const hrefL = aes[index];
        const aLink = new URL(hrefL.href || hrefL.preserve);

        // hrefL.removeEventListener("onhover", );
        if ((hrefL.host == mainURL.host) && (aLink.pathname == "/image-viewer.html")) {
            const imageName = aLink.searchParams.get("image");
            const dataGetting = new URL(mainURL.origin + "/code/image_metadata.json");
            fetch(dataGetting).then((response) => response.json())
                .then((response) => {
                    // console.log(response);
                    const list = response.list;
                    for (let index2 = 0; index2 < list.length; index2++) {
                        if (list[index2].name == imageName) {
                            const file_path = aLink.origin + "/images/" + list[index2].file_path;
                            // const fileURL = URL.createObjectURL(file_path);
                            // resolve(createImageEmbed(file_path));
                            const embed = createImageEmbed(file_path, list[index2].color || "white");
                            const coordinates = hrefL.getBoundingClientRect();
                            embed.style.transform = "translateX(" + (coordinates.x + Math.max(24, coordinates.width) - 24) + "px)";
                            // console.log(coordinates);
                            // embed.style.display = "none";
                            hrefL.appendChild(embed);
                            break;
                        }
                    }
                })
        }
    }
}
// updateImageEmbedLinks();