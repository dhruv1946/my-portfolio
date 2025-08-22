
# Personal Portfolio Website
This is a personal portfolio website for me, Dhruv Jain, a passionate web developer and student at Dwarkadas J. Sanghvi College of Engineering. The website showcases his skills, projects, education, and contact information in a clean, modern, and responsive design.
- Link : https://my-portfolio-site-nu-ochre.vercel.app/
## ✨ Features

- Responsive Design: The layout seamlessly adapts to various screen sizes, from mobile phones to desktops.

- Dual Theme: A stunning light and dark mode toggle, with the user's preference saved in local storage for a persistent experience.

- Dynamic Content: Skills and projects are dynamically generated from JavaScript arrays, making them easy to update without touching the HTML structure.

- Animated Skill Bars: Skill proficiency bars animate into view when the user scrolls to the skills section, powered by the efficient Intersection Observer API.

- Smooth Scrolling: Smooth navigation to different sections of the page when clicking on the navigation links.

- Modern UI: A clean and modern user interface featuring gradient text effects, subtle hover animations on cards, and a professional timeline for education.

- Cross-Browser Compatible: Built with standard web technologies to ensure it works on all modern web browsers.


## 🚀 Live Demo
A live version of this portfolio can be viewed here: https://my-portfolio-site-nu-ochre.vercel.app/
## 🛠️ Technologies used

**HTML5**: For the structure and semantic content of the website.

**CSS3**: For styling, including Flexbox, Grid, CSS Variables for theming, and media queries for responsiveness.

**JavaScript (ES6+)**: For DOM manipulation, theme switching, dynamic content loading, and scroll-triggered animations.



## 📂 Project Structure
The project is organized with a clear and simple file structure:
#### 📂My Portfolio :
-  `index.html`       # The main HTML file containing the page structure
-  `style.css`        # The main stylesheet for all styling rules
-  `script.js`        # The JavaScript file for interactivity and dynamic content
-  `resume.pdf`       # Dhruv's resume file (linked for download)
- `WhatsApp Image 2025-08-16 at 12.47.07 PM.jpeg`          # Image assets for the profile picture and background
- `WhatsApp Image 2025-08-16 at 12.47.09 PM.jpeg`        # Image assets for the profile picture and background
## 📘 Getting Started
To get a local copy up and running, follow these simple steps.

1) Clone the repository:

git clone https://github.com/dhruv1946/my-portfolio

2) Navigate to the project directory:

📂My Portfolio :

3) Open the index.html file in your favorite web browser.

## 🔧 Customize for yourself
This portfolio is designed to be easily customized.

1) Update Personal Information
Open `index.html` and modify the text content directly within the HTML elements. You can change:

- Your name, title, and description in the `#about` section.

- Your education and experience details in the `#timeline` sections.

- Your email, phone number, and social media links in the `#contact` section.

- The path to your resume file in the "Download Resume" button's `href` attribute.

2) Update Skills and Projects
Open `script.js` to modify the skills and projects that are displayed on the site.

- To add or change skills, edit the `skillsData` array in the `script.js` file. The level property controls the final width of the skill bar.

`const skillsData = [`

 `   { name: 'HTML', level: '95%' },`

`    { name: 'CSS', level: '75%' },`

`   // Add or modify your skills here`

`];`

- To add or change projects, edit the `projectsData` array. Update the `title,` `description`, `liveUrl`, and `githubUrl` for each project.

`const projectsData = [`
 
`    {` 

`        title: "Your Project Title",` 

`        description: "A brief description of your project.",` 

`        liveUrl: "#", // Link to the live demo`

`        githubUrl: "#" // Link to the GitHub repository`

`    },`

`    // Add or modify your projects here`

`];`

3) Change Images
Replace the image files in the project folder with your own. You will need to update the file paths in:

- `index.html` for the main profile picture `(<img class="profile-image">)`.

- `style.css` for the background image in the about section `(.about-section::before)`.

4) Customize Theme Colors
All theme colors are defined as CSS variables at the top of the `style.css` file. You can easily change the entire site's color scheme by modifying these variables for both light and dark modes.

`:root {`

`    --cyan: #22d3ee;`

`    --blue: #0ea5e9;`

`    --bg-color-light: #f9fafb;`

`    /* ... other light theme colors */`

`    --bg-color-dark: #0a0a0a;`

 `   /* ... other dark theme colors */`

`}`
## 🧗‍♂️ Lessons Learned

This adventure of making myself a portfolio website had taught me multiple things :
- I had to learn JavaScript from scratch.
- I got to revise my CSS skills.
- I learnt how to create a GitHub repository and publish code there.
- I got to know how to host your website through Vercel.
- I got to brush up on my HTML skills as well.