const sectionsAnimees = document.querySelectorAll(".fade-section");

const observerSections = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, {
    threshold: 0.15
});

sectionsAnimees.forEach((section) => {
    observerSections.observe(section);
});
