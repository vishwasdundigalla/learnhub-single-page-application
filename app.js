const app = document.getElementById("app");

const navLinks = document.querySelectorAll("nav a");

const pages = {
    "/home": `
        <section class="hero">
            <h1>Welcome to LearnHub</h1>

            <p>
                LearnHub is a simple Single Page Application
                that demonstrates dynamic content loading using
                HTML, CSS and JavaScript.
            </p>

            <a href="#/about" class="btn" data-route="/about">
                Learn More
            </a>
        </section>
    `,

    "/about": `
        <section class="section">
            <h1>About LearnHub</h1>

            <p>
                LearnHub is a demonstration project created to
                understand how Single Page Applications work.
                The application dynamically changes content
                without refreshing the complete webpage.
            </p>

            <br>

            <p>
                JavaScript manages the routing and browser
                history while HTML provides the structure and
                CSS provides the visual design.
            </p>
        </section>
    `,

    "/services": `
        <section class="section">
            <h1>Our Services</h1>

            <p>
                We provide learning resources and development
                solutions for students and beginners.
            </p>

            <div class="cards">

                <div class="card">
                    <h3>Web Development</h3>
                    <p>
                        Learn HTML, CSS and JavaScript
                        for modern web development.
                    </p>
                </div>

                <div class="card">
                    <h3>Programming</h3>
                    <p>
                        Improve programming skills through
                        practical examples and projects.
                    </p>
                </div>

                <div class="card">
                    <h3>Projects</h3>
                    <p>
                        Build real-world projects to
                        improve your technical skills.
                    </p>
                </div>

            </div>
        </section>
    `,

    "/contact": `
        <section class="section">
            <h1>Contact Us</h1>

            <p>
                Have any questions? Send us a message.
            </p>

            <form class="contact-form" id="contactForm">

                <input
                    type="text"
                    placeholder="Your Name"
                    required
                >

                <input
                    type="email"
                    placeholder="Your Email"
                    required
                >

                <textarea
                    placeholder="Your Message"
                    required
                ></textarea>

                <button type="submit">
                    Send Message
                </button>

            </form>
        </section>
    `
};


// Load page
function loadPage(route) {

    if (!pages[route]) {

        app.innerHTML = `
            <section class="error">

                <h1>404</h1>

                <p>
                    Sorry, the page you are looking for
                    does not exist.
                </p>

                <a href="#/home"
                   class="btn"
                   data-route="/home">
                   Go Home
                </a>

            </section>
        `;

        updateActiveLink("");

        return;
    }

    app.innerHTML = pages[route];

    updateActiveLink(route);

    setupContactForm();
}


// Update active navigation
function updateActiveLink(route) {

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.dataset.route === route) {
            link.classList.add("active");
        }

    });
}


// Handle navigation clicks
document.addEventListener("click", function (event) {

    const link = event.target.closest("[data-route]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const route = link.dataset.route;

    window.location.hash = route;
});


// Handle URL/hash changes
window.addEventListener("hashchange", function () {

    const route =
        window.location.hash.substring(1) || "/home";

    loadPage(route);

});


// Contact form
function setupContactForm() {

    const form = document.getElementById("contactForm");

    if (!form) {
        return;
    }

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Thank you! Your message has been submitted.");

        form.reset();

    });
}


// Initial page
const initialRoute =
    window.location.hash.substring(1) || "/home";

loadPage(initialRoute);