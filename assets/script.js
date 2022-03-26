const projects = [
    {
        name: "dately",
        repo: "https://github.com/GitGals/Dately",
        live: "https://gitgals.github.io/Dately/",
    },
    {
        name: "weather",
        repo: "https://github.com/freyaliesel/Weather-Dashboard",
        live: "https://freyaliesel.github.io/Weather-Dashboard/",
    },
    {
        name: "scheduler",
        repo: "https://github.com/freyaliesel/Work-Day-Scheduler",
        live: "https://freyaliesel.github.io/Work-Day-Scheduler/",
    },
    {
        name: "quiz",
        repo: "https://github.com/freyaliesel/Code-Quiz",
        live: "https://freyaliesel.github.io/Code-Quiz/",
    },
    {
        name: "scratch",
        repo: "https://scratch.mit.edu/projects/497157717/editor/",
        live: "https://scratch.mit.edu/projects/497157717/",
    },
];

function redirect(target) {
    if (target.className.includes("content")) {
        let parent = target.closest("a");
        for (const project of projects) {
            if (parent.id == project.name) {
                parent.setAttribute("href", project.repo);
            }
        }
    } else if (target.className.includes("project")) {
        for (const project of projects) {
            if (target.id == project.name) {
                target.setAttribute("href", project.live);
            }
        }
    }
}

document.querySelector("#work").addEventListener("mouseover", function (event) {
    redirect(event.target);
});
