// программа, которая считывает единственное целое число n и выводит результат проверки этого числа на простоту
function Task1() {
    alert("Проверка числа на простоту");
    n = Number(prompt("Введите число для проверки"));
    flag = true
    if (n < 2) {
        alert ("Число должно быть больше 1")
        return
    } else {
        for(let i = 2; i < n; i++) {
            if(n % i === 0) flag = false
        }
    }
    if (flag === true) alert('Число ' + n + ' простое');
    else alert('Число ' + n + ' не простое');
}

// автоморфные числа
function IsAutomorf(a, b) {
    var str_a = a.toString();
    var str_b = b.toString();
    for (var i = 0; i < str_b.length; i++)
        if (str_a[str_a.length - str_b.length + i] != str_b[i])
            return false
    return true
}
function Task2() {
    alert('Это программа для вывода всех автоморфных чисел на заданном промежутке');
    [l, r]= [+prompt("Введите первое число"), +prompt("Введите второе число")]
    var tmp = 0
    for (var i=l; i<=r; i++) {
        tmp = i*i
        if (IsAutomorf(tmp, i))
            console.log('Число ' + i + ' автоморфное')
    }  
}

// совершенные числа
function Task3() {
    
    alert("Проверка числа на совершенность");
    n = +(prompt("Введите число для проверки"));
    let divisors = [];    
    for (let i = 0; i < n; i++) {
        if (n % i === 0) {
            divisors.push(i);
        }  
    }

    console.log(divisors)
    let sum = 0;
    for (let j = 0; j < divisors.length; j++) {
            sum += divisors[j];
    }
    console.log(sum)
    if (n === sum) {
            alert('Число ' + n + ' совершенное');
        } else {
            alert('Число ' + n + ' не совершенное');
        }
}

// избыточное число
function Task4() {
    alert("Проверка числа на избыточность");
    x = +(prompt("Введите число для проверки"));
    if (x < 0) {
        alert ("Число должно быть положительным")
        return
    } else {
    let divisors = [];    
    for (let i = 0; i < x; i++) {
        if (x % i === 0) {
            divisors.push(i);
        }  
    }

    console.log(divisors)
    let sum = 0;
    for (let j = 0; j < divisors.length; j++) {
            sum += divisors[j];
    }
    console.log(sum)
    if (x < sum) {
            alert('Число ' + x + ' избыточное');
        } else {
            alert('Число ' + x + ' не избыточное');
        }
    }
}

//негипотенузное число
function Task5() { 
    alert("Проверка числа на гипотенузность");
    c = +(prompt("Введите число для проверки"));
    for (let a = 1; a < c; a++) {   
        for (let b = 1; b < c; b++) {
                if (c ** 2 === (a ** 2 + b ** 2))
                    alert('Число ' + c + ' гипотенузное');  
            }    
    }
    alert('Число ' + c + ' негипотенузное')
}

// числа Армстронга
function isArmstrong (a) {
    let str_a = a.toString()
    console.log (str_a)
    sum = 0
    for (let i = 0; i < str_a.length; i++) {
        sum += Number(str_a[i]) ** str_a.length
    }
    if (sum === a) {
        console.log(str_a.length)
        console.log(sum)
        return true
    }
    return false
}

function Task6() {
    alert ("Проверка числа на число Армстронга")
    l = Number(prompt("Введите начало отрезка"));
    r = Number(prompt("Введите конец отрезка"));
    for (let i=l; i<=r; i++) {
        if (isArmstrong(i)){
            alert ('Число ' + i + ' являются числом Армстронга')}
    }
    alert ('На заданном промежутке нет чисел Армстронга')
    
}

//пифагоровы тройки
function Task7() {
    alert ("Программа для нахождения первых n пифагоровых троек")
    count = Number(prompt("Введите количество пифагоровых троек"))
    let arr = [0, 0, 0]
    let found = 0
    for (let m = 2; found < count; m++){
        for (let n = 1; n<m && found < count; n++){
            a = m**2 - n**2
            b = 2 * m * n
            c = m**2 + n**2
            if (c**2 === a**2 + b**2){
                arr[0] = a
                arr[1] = b
                arr[2] = c
                console.log(arr)
                console.log(m, n)
                console.log(a, b, c)
                found++
            } 
        }
    } 
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
    case 3:
        Task3()
        break
    case 4:
        Task4()
        break
    case 5:
        Task5()
        break
    case 6:
        Task6()
        break
    case 7:
        Task7()
        break    
    default:
        alert("Такого задания нет(")
}
