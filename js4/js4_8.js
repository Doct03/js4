function max(a, b, c) {
    //функция показывает максимальное значение аргумента, котороый передан при вызове
    console.log(arguments);
    var maxValue = Number.NEGATIVE_INFINITY; //присваеваем изначально
    //минус бесконечность
    document.write("<p>Number.NEGATIVE_INFINITY = " + maxValue + "<hr/>");
    //перебираем циклом аргументы
    for (
      var i = 0;
      i < arguments.length;
      i++ // arguments - свойство объекта max - который есть функцией
    )
      if (arguments[i] > maxValue) maxValue = arguments[i];

    return maxValue;
  }
  var res = max(-33, 33, 777, -666, -22, 888);
  document.write(
    "<p>Максимальное значение одного из аргументов функции = " + res
  );
