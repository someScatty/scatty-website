const metadata = new URL(mainURL.origin + "/code/image_metadata.json");
// console.log(metadata);

async function updatePage(list) {
    const image = document.getElementById("dance");
    const nameD = document.getElementById("nameBIG");
    const descript = document.getElementById("descBIG");
    
    document.body.style.backgroundColor = list.color;
    nameD.innerText = list.name + " - " + list.date;
    descript.innerText = list.description;

    let fullPath = "./images/" + list.file_path;
    console.log(fullPath);
    // const IMAGEDATA = fetch(fullPath)
    //     .then((response) => response.blob())
    //     .then((response) => {
    //         console.log(response);
    //         let imageLink = URL.createObjectURL(response);
    //         image.src = imageLink;
    //     });
    image.src = fullPath;
}
async function updateImageData() {
    const JSONFILE = new Request(metadata);
    const JSONDATA = fetch(JSONFILE)
        .then((response) => response.json())
        .then((response) => {
            console.log(response);
            const imageName = mainURL.searchParams.get("image");
            console.log(imageName);

            let imageJSON
            for (let imID in response.list) {
                if (response.list[imID].name == imageName) {
                    imageJSON = response.list[imID];
                    break;
                }
            }
            console.log(imageJSON);
            if (imageJSON) {
                updatePage(imageJSON);
            } else {
                console.error("No such thing as that image. try smth else.")
            }
        });
}
window.onload = updateImageData;
// updateImageData();

// const metaJSON = JSON.parse(JSONFILE);
// console.log(metaJSON);