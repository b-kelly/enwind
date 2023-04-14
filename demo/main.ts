import "./style.css";

document.querySelector(".js-switch-mode")?.addEventListener("click", () => {
    document.body.classList.toggle("theme-dark");
});
