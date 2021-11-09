const output = document.getElementById("num-output");
const dice = document.getElementById("number-dice");
const input = document.getElementById("num-input");

dice.onclick = function() {
    console.log(input.Value)
    if (input.Value >= 1) {
        output.innerHTML = '∴';
    } else {
        output.innerHTML = Math.floor((Math.random() * input.value) + 1);
    }
}