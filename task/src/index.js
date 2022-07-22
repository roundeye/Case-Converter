let text = document.getElementById("text");

let upperButton = document.getElementById("upper-case");
upperButton.addEventListener("click", function () {
    text.value = text.value.toUpperCase();
});

let lowerButton = document.getElementById("lower-case");
lowerButton.addEventListener("click", function() {
    text.value = text.value.toLowerCase();
});

let properButton = document.getElementById("proper-case");
properButton.addEventListener("click", function() {
    text.value = text.value.toLowerCase().split(" ").map(x => x[0].toUpperCase() + x.slice(1)).join(" ");
});

let sentenceButton = document.getElementById("sentence-case");
sentenceButton.addEventListener("click", function() {
    text.value = text.value.toLowerCase().split(". ").map(x => x[0].toUpperCase() + x.slice(1)).join(". ");
});

let saveTextButton = document.getElementById("save-text-file");
saveTextButton.addEventListener("click", function () {
    let filename = "text.txt";
    download(filename, text.value);
});

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
};