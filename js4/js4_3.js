var name;
var sname;
var age;

function ask() {
    name = prompt("Введите свое имя:");
    sname = prompt("Введите свою фамилию:");
    age = prompt("Введите свой возраст:");
}

function say() {
    document.write("Имя: " + name + "<br />");
    document.write("Фамилия: " + sname + "<br />");
    document.write("Возраст: " + age + "<br />");
    document.write("<hr/>");
}

do {
    ask();
    say();
    repeater = confirm("Пройти заполнение еще раз?");
} while (repeater);
