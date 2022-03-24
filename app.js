// Happy coding!

const swatches = document.querySelector(".canvas");

swatches.addEventListener("click", function (event) {
    document.body.style.backgroundColor = window.getComputedStyle(event.target).backgroundColor;
});