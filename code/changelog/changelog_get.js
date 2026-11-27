const ChangelogMetadata = new URL(mainURL.origin + "/code/changelogs.json");
// console.log(ChangelogMetadata);

const maxChangelogsPerLoad = 3;
let loadedChangelogs = new Array;
let changelogs = new Array;

const changeFETCH = fetch(ChangelogMetadata)
    .then((response) => response.json())
    .then((response) => {
        // console.log(response.changelogs);
        changelogs = response.changelogs;
    })

const changelogScroll = document.getElementById("changelogScroll")
const reloadButton = document.getElementById("loadMore")
// const divider = document.getElementById("divider")
/* Accepts raw changelog.
Returns nothing but inserts the raw changelog into changelogScroll.*/
function insertChangelog(logData) {
    console.log(logData);
    let log = document.createElement("div");
    let name = document.createElement("h1");
    name.innerText = logData.name + " - " + logData.date;
    let lineBreak = document.createElement("hr");
    let notes = document.createElement("p");
    notes.innerText = logData.notes || "";
    let insideSandwich = document.createElement("div")
    insideSandwich.innerHTML = logData.realHTML || "";

    log.appendChild(name);
    log.appendChild(lineBreak);
    log.appendChild(insideSandwich);
    log.appendChild(notes);
    
    changelogScroll.appendChild(log);
    loadedChangelogs.splice(0,0,log);
}

function loadMore() {
    for (let index = 0; ((index < maxChangelogsPerLoad) && (loadedChangelogs.length < changelogs.length)); index++) {
        console.log(loadedChangelogs.length);
        insertChangelog(changelogs[loadedChangelogs.length]);
    }
    if (loadedChangelogs.length >= changelogs.length) {
        // divider.style.display = "none";
        console.log("load check");
        reloadButton.style.display = "none";
    }
}

window.onload = function() {
    changeFETCH.then(() => {
        // insertChangelog(changelogs[0]);
        loadMore();
        if (changelogs.length <= maxChangelogsPerLoad) {
            // divider.style.display = "none";
            reloadButton.style.display = "none";
        }
        console.log("confirm", reloadButton);
    });
    // reloadButton.addEventListener("onclick", loadMore);
    reloadButton.onclick = loadMore;
}