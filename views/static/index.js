const container = document.getElementById("render");
let morse = "";

let pressedTime;

window.addEventListener("keydown", function(e) {
    if (pressedTime && (performance.now() - pressedTime) > 800) {
        renderSpace();
    }

    if (e.code === "Delete") {
        renderShort();
        pressedTime = performance.now();
    } else if (e.shiftKey) {
        renderLong();
        pressedTime = performance.now();
    }
})

function renderShort() {
    morse = morse + ".";
    container.innerHTML = morse;
}

function renderLong() {
    morse = morse + "-";
    container.innerHTML = morse;
}

function renderSpace() {
    morse = morse + " ";
    container.innerHTML = morse;
}
