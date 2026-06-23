const boutonRetourHaut = document.getElementById("retour-haut");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        boutonRetourHaut.classList.remove("d-none");
    } else {
        boutonRetourHaut.classList.add("d-none");
    }
});
