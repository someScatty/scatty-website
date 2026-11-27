const metadata = new URL(mainURL.origin + "/code/changelogs.json");
// console.log(metadata);

const maxChangelogsPerLoad = 3;
fetch(metadata)
    .then((response) => response.json())
    .then((response) => {
        // console.log(response.changelogs);
        let currentChange = response.changelogs[0];
        const ChangelogStat = document.getElementById("ChangelogStat");
        const ChangelogChanges = document.getElementById("ChangelogChanges");
        const ChangelogNotes = document.getElementById("ChangelogNotes");

        ChangelogStat.innerText = currentChange.name + " - " + currentChange.date;
        ChangelogChanges.innerHTML = currentChange.realHTML;
        ChangelogNotes.innerText = currentChange.notes;
    })

// just in case
updateImageEmbeds();