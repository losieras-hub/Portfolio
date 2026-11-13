
document.addEventListener("DOMContentLoaded", function() {

    const themeButton = document.getElementById("theme-toggle");

    if (themeButton) {

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark-mode");
            themeButton.textContent = "☀️ Light Mode";
        }

        themeButton.addEventListener("click", function() {

            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeButton.textContent = "☀️ Light Mode";
                localStorage.setItem("theme", "dark");
            } else {
                themeButton.textContent = "🌙 Dark Mode";
                localStorage.setItem("theme", "light");
            }

        });

    }


    // Scroll Reveal Animations

    if (typeof ScrollReveal !== "undefined") {

        ScrollReveal().reveal("#projects article", {
            distance: "40px",
            duration: 1000,
            delay: 200,
            origin: "bottom",
            interval: 200,
            reset: false
        });

        ScrollReveal().reveal(".intro-grid section", {
            distance: "40px",
            duration: 1000,
            delay: 200,
            origin: "left",
            reset: false
        });

        ScrollReveal().reveal("h1", {
            distance: "30px",
            duration: 800,
            delay: 200,
            origin: "top",
            reset: false
        });

    }

});
