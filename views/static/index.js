const container = document.getElementById("render");
let morse = "";

let startTime;
let endTime;
let spaceStartTime;
let spaceEndTime;

window.addEventListener("keydown", function(e) {
    if (e.code === `Delete`) {
        startTime = performance.now();

        if (spaceStartTime) {
            spaceEndTime = performance.now();
        }
    }
})

window.addEventListener("keyup", function(e) {
    if (e.code === `Delete`) {
        renderSpace();
        endTime = performance.now();
        spaceStartTime = performance.now();
        renderResult();
    }
})

function renderResult() {
    const time = endTime - startTime;

    if (time < 100) {
        morse = morse + ".";
    } else {
        morse = morse + "-";
    }

    container.innerHTML = morse;
}

function renderSpace() {
    const time = spaceEndTime - spaceStartTime;

    if (time > 800) {
        morse = morse + " ";
    }

    container.innerHTML = morse;
}
