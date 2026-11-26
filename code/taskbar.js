taskbar = document.getElementsByClassName("taskbar")[0];

scattyingMarketing = document.createElement("a");
scattyingMarketing.innerText = "scatty.ing";
scattyingMarketing.href = "./index.html";
scattyingMarketing.id = "scattying";

function createTaskbarButton(name, link) {
    let initial;
    if (link) {
        initial = document.createElement("a");
        initial.href = link;

        const realButton = document.createElement("button");
        realButton.innerText = name;
        initial.appendChild(realButton);
    } else {
        initial = document.createElement("button");
        initial.innerText = name;
    }

    return initial;
}

const changelog = createTaskbarButton("Changelog", "./changelog.html");
const accounts = createTaskbarButton("Accounts", "./accounts.html");
const projects = createTaskbarButton("Projects", "./projects.html");

taskbar.appendChild(scattyingMarketing);

taskbar.appendChild(changelog);
taskbar.appendChild(accounts);
taskbar.appendChild(projects);