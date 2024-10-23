document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Proyecto 1",
            description: "Descripción del proyecto 1.",
            link: "#"
        },
        {
            title: "Proyecto 2",
            description: "Descripción del proyecto 2.",
            link: "#"
        },
        {
            title: "Proyecto 3",
            description: "Descripción del proyecto 3.",
            link: "#"
        }
    ];

    const projectContainer = document.getElementById('project-container');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';
        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" target="_blank">Ver Proyecto</a>
        `;
        projectContainer.appendChild(projectDiv);
    });

    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Mensaje enviado. Gracias por contactarme!");
        this.reset();
    });
});
