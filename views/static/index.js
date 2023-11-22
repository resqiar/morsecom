const container = document.getElementById("render");
const input = document.getElementById("code-input");
const decryptContainer = document.getElementById("render-decrypt");
let morse = "";

let pressedTime;

window.addEventListener("keydown", function(e) {
    if (e.code === "Delete" || e.key === "Shift") {
        if (pressedTime && (performance.now() - pressedTime) > 500) renderSpace();
    }
});

window.addEventListener("keyup", function(e) {
    if (e.code === "Delete") {
        renderShort();
        pressedTime = performance.now();
    } else if (e.key === "Shift") {
        renderLong();
        pressedTime = performance.now();
    } else if (e.key === "Backspace") {
        deleteOneStep();
        pressedTime = performance.now();
    }
})

function renderShort() {
    morse = morse + ".";
    populate(morse);
}

function renderLong() {
    morse = morse + "-";
    populate(morse);
}

function renderSpace() {
    morse = morse + " ";
    populate(morse);
}

function deleteOneStep() {
    morse = morse.slice(0, morse.length - 1);
    populate(morse);
}

function populate(val) {
    container.innerText = val;
    input.value = val;
}
