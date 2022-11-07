function processCmd(command) {
    if (command == "help") {
        stdout("Available commands: help, clear, clear_top, about_luke, projects")
    } else if (command == "") {

    } else if (command == "clear") {
        termbox = document.getElementById("terminal")
        termbox.innerHTML = "";
    } else if (command == "clear_top") {
        current_showing_element = document.getElementById(showing_element);
        current_showing_element.setAttribute("style", "display: none;");
        current_showing_element = null;
    } else if (command == "about_luke") {
        if (showing_element != null) {
            current_showing_element = document.getElementById(showing_element);
            current_showing_element.setAttribute("style", "display: none;");
        }
        about_luke_div = document.getElementById("about_luke_div");
        about_luke_div.setAttribute("style", "");
        showing_element = "about_luke_div";
    } else if (command == "projects") {
        if (showing_element != null) {
            current_showing_element = document.getElementById(showing_element);
            current_showing_element.setAttribute("style", "display: none;");
        }
        projects_div = document.getElementById("projects_div");
        projects_div.setAttribute("style", "");
        showing_element = "projects_div";
    } else {
        stdout("Unknown command, type help for a list of available commands")
    }
}

function stdout(out) {
    newline = document.createElement('p')
    newline.setAttribute("class", "termtext");
    newline.innerText = out;
    term_box = document.getElementById("terminal");
    term_box.appendChild(newline);
}

function sendCmd() {
    input_box = document.getElementById("input-box");
    command = input_box.value;
    input_box.value = "";
    processCmd(command);
    setup_new_line();
}

input_box = document.getElementById("input-box");
input_box.addEventListener("keydown", function (event) {
    if (event.keyCode == 13) {
        sendCmd();
    }
})