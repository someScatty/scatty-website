const mainURL = new URL(document.URL);
console.log(mainURL);

// console.log(encodeURI("Current Scatty PFP"));

const metadata = new URL(mainURL.origin + "/code/image_metadata.json");
console.log(metadata);

async function updatePage(list) {
    const image = document.getElementById("dance");
    const nameD = document.getElementById("nameBIG");
    const descript = document.getElementById("descBIG");
    
    document.body.style.backgroundColor = list.color;
    nameD.innerText = list.name + " - " + list.date;
    descript.innerText = list.description;

    let fullPath = "./images/" + list.file_path;
    console.log(fullPath);
    const IMAGEDATA = fetch(fullPath)
        .then((response) => response.blob())
        .then((response) => {
            console.log(response);
            let imageLink = URL.createObjectURL(response);
            image.src = imageLink;
        });
}
async function updateImageData() {
    const JSONFILE = new Request(metadata);
    const JSONDATA = fetch(JSONFILE)
        .then((response) => response.blob())
        .then((response) => {
            console.log(response);
            // const objectURL = URL.createObjectURL(response);
            // console.log(objectURL);

            let FileRead = new FileReader();
            FileRead.addEventListener("loadend", function(the) {
                // console.log(the.srcElement.result);
                let myJSONreal = JSON.parse(FileRead.result).list;
                // console.log(FileRead.result);
                // console.log(JSON.parse(FileRead.result));
                const imageName = mainURL.searchParams.get("image");
                console.log(imageName);
                let currentTime
                for (let imID = 0; imID < myJSONreal.length - 1; imID++) {
                    if (myJSONreal[imID].name == imageName) {
                        currentTime = myJSONreal[imID];
                    }
                };
                console.log(currentTime);
                if (currentTime) {
                    updatePage(currentTime);
                } else {
                    console.error("No such thing as that image. try smth else.")
                }
            });
            FileRead.readAsText(response);
            // console.log(theJSON);

            // var dataReal = new Response(response);
            // console.log(dataReal);
            // var ut = JSON.parse(objectURL);
            // console.log(ut);
        });
}
updateImageData();

// const metaJSON = JSON.parse(JSONFILE);
// console.log(metaJSON);