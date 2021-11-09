const output = document.getElementById("num-output");
const dice = document.getElementById("number-dice");
const input = document.getElementById("num-input");

dice.onclick = function() {
    output.innerHTML = Math.floor((Math.random() * input.value) + 1) + 1;
}