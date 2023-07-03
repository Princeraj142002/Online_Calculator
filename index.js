let result = document.getElementById('result');
let equation = '';

function appendNumber(number) {
    equation += number;
    result.value = equation;

    var snd = new Audio('click.wav')
    snd.play()
}

function addOperator(operator) {
    equation += operator;
    result.value = equation;

    var snd = new Audio('click.wav')
    snd.play()
}

function calculate() {
    try {
        const answer = eval(equation);
        result.value = answer;
        equation = answer;
    } catch (error) {
        result.value = 'Error';
    }

    var snd = new Audio('click hard.wav')
    snd.play()
}

function clearResult() {
    document.getElementById('result').style.backgroundColor = "white";
    equation = '';
    result.value = '';

    var snd = new Audio('clear.wav')
    snd.play()

}

let sound = document.getElementById('button');
