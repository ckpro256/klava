
let content = document.querySelector(".text");
let matn = ""
function say(e) {
    matn += e;
    content.textContent = matn;
}
