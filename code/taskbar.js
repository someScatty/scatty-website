taskbar = document.getElementsByClassName("taskbar")[0];
console.log(taskbar);

scattyingMarketing = document.createElement("p");
scattyingMarketing.innerText = "scatty.ing";
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

const home = createTaskbarButton("Home Page", "./index.html");
const changelog = createTaskbarButton("Changelog", "./changelog.html");
const accounts = createTaskbarButton("Accounts", "./accounts.html");

taskbar.appendChild(scattyingMarketing);

taskbar.appendChild(home);
taskbar.appendChild(changelog);
taskbar.appendChild(accounts);