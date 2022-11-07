function setup_new_line() {
    newline = document.createElement('p')
    newline.setAttribute("class", "termtext");
    newline.innerHTML = "luke@luke-gilsinger-net: ";
    term_box = document.getElementById("terminal");
    term_box.appendChild(newline);
    input_box = document.getElementById("input-box");
    input_box.addEventListener("input", function () {
        input_box = document.getElementById("input-box");
        current_term_line.innerText = "luke@luke-gilsinger-net: " + input_box.value;
    })
    current_term_line = newline;
}
