document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Project 1",
            description: "A short description of Project 1.",
            image: "project1.jpg",
            link: "https://github.com/yourusername/project1"
        },
        {
            title: "Project 2",
            description: "A short description of Project 2.",
            image: "project2.jpg",
            link: "https://your-live-demo.com"
        },
        {
            title: "Project 3",
            description: "A short description of Project 3.",
            image: "project3.jpg",
            link: "https://github.com/yourusername/project3"
        }
    ];

    const projectContainer = document.getElementById("project-cards");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.classList.add("card");

        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <h2>${project.title}</h2>
            <p class="post-description">${project.description}</p>
            <a href="${project.link}" target="_blank">View Project</a>
        `;

        projectContainer.appendChild(projectCard);
    });
});