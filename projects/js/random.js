const output = document.getElementById("num-output");
const dice = document.getElementById("number-dice");
const input = document.getElementById("num-input");

dice.onclick = function() {
    if (input.Value == "" || input.Value == 0 ) {
        output.innerHTML = '∴';
    } else {
        output.innerHTML = Math.floor((Math.random() * input.value) + 1);
    }
}