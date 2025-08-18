document.addEventListener('DOMContentLoaded', () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const moonIcon = document.getElementById('moon-icon');
    const sunIcon = document.getElementById('sun-icon');
    const htmlEL = document.documentElement;

    const applyTheme = (theme) => {
        if (theme === 'dark') {
            htmlEL.classList.add('dark');
            moonIcon.classList.add('hidden');
            sunIcon.classList.remove('hidden');
        } else {
            htmlEL.classList.remove('dark');
            moonIcon.classList.remove('hidden');
            sunIcon.classList.add('hidden');
        }
    };

    const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(savedTheme);

    themeToggleButton.addEventListener('click', () => {
        const newTheme = htmlEL.classList.contains('dark') ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    });

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

    const skillsContainer = document.getElementById('skills-container');
    const projectsContainer = document.getElementById('projects-container');

    const skillsData = [
        { name: 'HTML', level: '95%' },
        { name: 'CSS', level: '75%' },
        { name: 'JavaScript', level: '80%' },
        { name: 'C++', level: '85%' },
        { name: 'C', level: '75%' },
        { name: 'Java', level: '80%' },
        { name: 'Python', level: '80%' }
    ];

    const projectsData = [
        { title: "Multiple Choice Questions Quiz", description: "A thrilling quiz to test your wits and knowledge of web-development, cybersecurity, etc.", liveUrl: "#", githubUrl: "#" },
        { title: "Carbon Dioxide Emission Tracker", description: "A CO2 emission tracker tracking CO2 emissions from vehicles, homes, etc. from all across Mumbai", liveUrl: "#", githubUrl: "#" },
        { title: "All-in-One Calculator", description: "A scientific-calculator and unit converter smashed into one clean website. Convert length,weight,money,energy,time and much more on the go", liveUrl: "#", githubUrl: "#" }
    ];

    skillsData.forEach(skill => {
        skillsContainer.innerHTML += `
        <div class="card">
            <h3>${skill.name}</h3>
            <div class="skill-bar-container">
                <div class="skill-bar-inner" style="width: 0" data-width="${skill.level}"></div>   
            </div>
        </div>
        `;
    });

    projectsData.forEach(project => {
        projectsContainer.innerHTML += `
        <div class="card">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div style="display: flex; gap: 1rem;">
                <a href="${project.liveUrl}">Live Demo</a>
                <a href="${project.githubUrl}">Github</a>
            </div>
        </div>
        `;
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target.querySelector('.skill-bar-inner');
                if (bar) {
                    bar.style.width = bar.getAttribute('data-width');
                    observer.unobserve(entry.target);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('#skills-container .card').forEach(card => {
        observer.observe(card);
    });

});
