function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}
function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}
function pow(a, b) {
    return Math.pow(a, b);
}
function sqrt(a) {
    return Math.sqrt(a);
}
var operand1 = prompt("Введите первое число: ");
var sign = prompt("Введите знак арифметической операции: + - * / ^ ");
var operand2 = prompt("Введите второе число: ");
var result = undefined;

operand1 = parseInt(operand1);//глобальный метод parseInt
operand2 = parseInt(operand2);//глобальный метод parseInt
switch (sign) {
    case "+":
        result = add(operand1, operand2);
        break;
        case "sqrt":
        result = sqrt(operand1);
        break;
    case "^":
        result=pow(operand1, operand2)
        break;
    case "-":
        result = sub(operand1, operand2);
        break;
    case "*":
        result = mul(operand1, operand2);
        break;
    case "/":
        result = div(operand1, operand2);
        break;
    default:
        document.write("<p><b style='color:red'>" + sign + "</b> - не является знаком арифметической операции.");
}

if (result != undefined)
    document.write("<p>" + operand1 + " " + sign + " " + operand2 + " = " + result);
