//произведение двух максимальных чисел
function Task1() {
    function fMul([a, b, c]){
        let arr1 = [a, b, c]
        arr1.sort()
        arr1.shift()
        console.log(arr1)
        let mul = 1
        arr1.forEach(item => mul *= item)
        alert('Произведение чисел ' + arr1 + ' равно ' + mul);
    }
    alert("функция, которая принимает три числовых параметра и возвращает произведение двух максимальных из них");
    [a, b, c]= [+prompt("Введите первое число"), +prompt("Введите второе число"), +prompt("Введите третье число")]
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Введите числовое значение')
        return
    } else {
        fMul([a, b, c])
    }
}

function Task2() {
    alert("функция, которая принимает на вход два параметра: имя и звание. Значение звания по умолчанию «рядовой»");
    firstName = prompt("Введите имя")
    rank = prompt("Введите звание", "рядовой")
        alert('Имя - ' + firstName + ', звание - ' + rank);
}

function Task4() {
    function numCheck (n) {
        if (n % 2 === 0){
        let square = n => n**2
        alert('Ваше число четное, его квадрат равен ' + square)
        console.log(square)
    } else {
        let cube = n => n**3
        console.log(cube)
        alert('Ваше число нечетное, его квадрат равен ' + cube)
        console.log(cube)
        }
    }
    
    alert("Проверка числа на совершенность");
    n = +(prompt("Введите число для проверки"));
    numCheck (n)
    
}

let task = parseFloat(prompt("Выберите номер задания", 1))
switch (task)
{
    case 1:
        Task1()
        break 
    case 2:
        Task2()
        break
    case 4:
        Task4()
        break
    default:
        alert("Такого задания нет(")
}