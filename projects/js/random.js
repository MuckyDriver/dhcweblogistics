const output = document.getElementById("num-output");
const min_input = document.getElementById("num-min-input");
const max_input = document.getElementById("num-max-input");
const dice = document.getElementById("number-dice");

dice.onclick = function() {
    var number = Math.floor((Math.random() * max_input.value) + min_input.value);
    output.innerHTML = number;
}