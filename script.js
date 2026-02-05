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
        { name: 'Python', level: '80%' },
        { name : 'React.js', level: '65%' },
        { name : 'C#', level: '25%' }
    ];
    const projectsData = [
        { title: "Expense Tracker and Predictor", description: "Used Python (sklearn : linear regression, pandas, tkinter, sqlite3, matplotlib, seaborn, numpy) to collaborate in making an expense tracker that records expenditure amount, date and category of expense, using the user input data predicts expense of the next month.", githubUrl: "https://github.com/logicneuron0/Python_expense_tracker" },
        { title: "Jharkhand Tourism Promotion", description: "Used React.js, made a prototype landing page to promote tourism in Jharkhand. Responsive, creative cursor in PC", githubUrl: "https://github.com/dhruv1946/jharkhand-prototype" },
        { title: "Clock-out landing page", description: "Used React.js, collaborated in developing a landing page for DJSCE SIGAI flagship event. Responsive", githubUrl: "https://github.com/sigai-tech/clockout_landing_pg" }
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
