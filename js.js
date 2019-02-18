/*
//Пример 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 а - увеличилась на единицу и записалась в "с"
d = b++; alert(d);           // 1 b - записалась в "d" а только после этого увеличилась на единицу
c = (2+ ++a); alert(c);      // 5 a - в ней уже лежит 2 + она еще увеличилась на единицу, и прибавилось 2 и получилось 5
d = (2+ b++); alert(d);      // 4 b - в ней уже лежит 2, зачем к ней прибавилось 2 и получилось 4, а только после этого b увеличилось на еденицу в ней уже лежит 3
alert(a);                    // 3 а - увеличивалась на единицу два раза вледствии выше изложенного кода
alert(b);                    // 3 b - увеличивалась на единицу два раза вледствии выше изложенного кода
*/

/*
//Пример 2
var a = 2;
var x = 1 + (a *= 2);       // x - равен 5 (1+(2*2)=5)
*/


/*
//Пример 3
var a = -7;
var b = 5;

if (a > 0 && b > 0)
    alert(a + ' разделить ' + b + ' равно ' + a / b);

if (a < 0 && b < 0)
    alert(a + ' умножить ' + b + ' равно ' + a * b);

if ((a < 0 && b > 0) || (a > 0 && b < 0))
    alert(a + ' прибавить ' + b + ' равно ' + (a + b));
*/


/*
//Пример 4
var res = prompt('Введите число от 1 до 15');
alert('Вы ввели число ' + res);

switch(res){
    case '1':
        alert('1');
    case '2':
        alert('2');
    case '3':
        alert('3');
    case '4':
        alert('4');
    case '5':
        alert('5');
    case '6':
        alert('6');
    case '7':
        alert('7');
    case '8':
        alert('8');
    case '9':
        alert('9');
    case '10':
        alert('10');
    case '11':
        alert('11');
    case '12':
        alert('12');
    case '13':
        alert('13');
    case '14':
        alert('14');
    case '15':
        alert('Число 15 последнее для вывода');
        break;
    default:
        alert('Вы ввели не верное число');
        break;
}
*/


/*
//Пример 5
function summation(arg1, arg2){
    var res = arg1 + arg2;
    return res;
}
alert('Результат сложения 2 + 8 = ' + summation(2, 8));

function deduction(arg1, arg2) {
    var res = arg1 - arg2;
    return res;
}

alert('Результат вычитания 15 - 8 = ' + deduction(15, 8));

function increase(arg1, arg2) {
    var res = arg1 * arg2;
    return res;
}

alert('Результат умножения 15 * 8 = ' + increase(15, 8));

function divisions(arg1, arg2) {
    var res = arg1 / arg2;
    return res;
}

alert('Результат деления 15 / 3 = ' + divisions(15, 5));
*/


/*
//Пример 6

function summation(arg1, arg2){
    var res = arg1 + arg2;
    return res;
}

function deduction(arg1, arg2){
    var res = arg1 - arg2;
    return res;
}

function increase(arg1, arg2){
    var res = arg1 * arg2;
    return res;
}

function divisions(arg1, arg2){
    var res = arg1 / arg2;
    return res;
}

function mathOperation(arg1, arg2, operation){

    switch (operation){
        case '+':
            alert(summation(arg1, arg2));
            break;
        case '-':
            alert(deduction(arg1, arg2));
            break;
        case '*':
            alert(increase(arg1, arg2));
            break;
        case '/':
            alert(divisions(arg1, arg2));
            break;
        default:
            alert('Вы что-то ввели не верно поробуйте еще раз');
            break;
    }
    return res;
}
var arg1 = parseInt(prompt('Введите первое число'));
var arg2 = parseInt(prompt('Введите второе число'));
var operation = prompt('Введите одно из арифметических действий +, -, *, /');
alert (mathOperation(arg1, arg2, operation));
*/

/*
//Пример 6
var res = (null == 0)
alert(res); // результат будет false так как 0 - это числовой тип данных и в ячейку памяти записано значение "0", а null - тоже записано в память но ячека памяти пуста что и означет "НИЧТО"
*/

/*
//Пример 7
function power(val, pow){

    var result = val;

    if (pow > 1){
       result = (power(val, pow - 1)) * val;
    }
    return result;
}

var val = parseInt(prompt('Введите число которое нужно возвести в степень'));
var pow = parseInt(prompt('Введите число на которое нужно возвести в степень'));
alert (power(val, pow));
*/