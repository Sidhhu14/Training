const button = document.getElementById("submit");
const content = document.getElementById("para");
let contentVisible = true;

button.addEventListener("click", function () {
    content.style.display = contentVisible ? 'none' : 'block';
    button.value = contentVisible ? 'Show Message' : 'Hide Message';
    contentVisible = !contentVisible;
})