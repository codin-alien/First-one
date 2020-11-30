var input = document.querySelector("input");
input.addEventListener("click", highlight);
input.addEventListener("blur", question);
input.addEventListener("keypress", itemKeypress);

function highlight() {
console.log(this);
input.focus();
input.setSelectionRange(0, input.value.length);
}

function question() {
alert ("Would you like to search that?");
}

function itemKeypress(event) {
    if (event.which === 13){
    alert("Searching...");
    input.removeEventListener("blur", question);
    input.childNodes.open;
    console.log(this);
    }
}

