const container = document.getElementById("render");
const decryptContainer = document.getElementById("render-decrypt");
let morse = "";

let pressedTime;

window.addEventListener("keydown", function() {
    if (pressedTime && (performance.now() - pressedTime) > 400) {
        renderSpace();
    }
});

window.addEventListener("keyup", function(e) {
    if (e.code === "Delete") {
        renderShort();
        pressedTime = performance.now();
    } else if (e.key === "Shift") {
        renderLong();
        pressedTime = performance.now();
    }

    decrypt();
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

const mtoa = new Map([
    [".-", "A"],
    ["-...", "B"],
    ["-.-.", "C"],
    ["-..", "D"],
    [".", "E"],
    ["..-.", "F"],
    ["--.", "G"],
    ["....", "H"],
    ["..", "I"],
    [".---", "J"],
    ["-.-", "K"],
    [".-..", "L"],
    ["--", "M"],
    ["-.", "N"],
    ["---", "O"],
    [".--.", "P"],
    ["--.-", "Q"],
    [".-.", "R"],
    ["...", "S"],
    ["-", "T"],
    ["..-", "U"],
    ["...-", "V"],
    [".--", "W"],
    ["-..-", "X"],
    ["-.--", "Y"],
    ["--..", "Z"],
    ["-----", "0"],
    [".----", "1"],
    ["..---", "2"],
    ["...--", "3"],
    ["....-", "4"],
    [".....", "5"],
    ["-....", "6"],
    ["--...", "7"],
    ["---..", "8"],
    ["----.", "9"],
    [".-.-.", "+"],
    ["-...-", "="],
]);

function decrypt() {
    let result = "";
    const res = morse.split(" ");

    for (let i = 0; i < res.length; i++) {
        if (mtoa.has(res[i])) result = result + mtoa.get(res[i]);
    }

    decryptContainer.innerText = result;
}
