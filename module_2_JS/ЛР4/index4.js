//ОДНОМЕРНЫЕ МАССИВЫ
//4.1 сумма элементов до минимального
function Task1_1() {
    function indexOfSmallest(a) {
            let lowest = 0;
            for (let i = 1; i < a.length; i++) {
                if (a[i] < a[lowest])
                    lowest = i;
            }
            return lowest;
        }
    alert("функция, принимающая на вход массив вещественных чисел и возвращающую сумму элементов массива, расположенных до минимального элемента");
    arrStr = prompt("Введите элементы массива через запятую без пробелов");
    let arr = arrStr.split(',').map(Number);
    console.log(arr)
    let minInd = indexOfSmallest(arr)
    let sum = 0
    for (let i = 0; i < minInd; i++) {
            sum += arr[i];
            
    }
    console.log(sum);
    alert('Сумма элементов до минимальногоравна ' + sum)
}

//4.2 сумма модулей элементов после первого нуля
function Task1_2() {
    function indexFirstOfZero(a) {
        for (let i = 0; i < a.length; i++) {
            if (a[i] === 0){
                return i;   
            }
        }
    }
    alert("функция, принимающая на вход массив вещественных чисел и возвращающую сумму модулей элементов массива, расположенных после первого элемента равного нулю");
    arrStr = prompt("Введите элементы массива через запятую без пробелов");
    let arr = arrStr.split(',').map(Number);
    console.log(arr)
    let zeroInd = indexFirstOfZero(arr)
    let sum = 0
    for (let i = zeroInd + 1; i < arr.length; i++) {
        sum += Math.abs(arr[i]);
    }
    console.log(sum);
    alert('Сумма элементов после нулевого равна ' + sum)
}

//4.3 сумма элементов после последнего нуля
function Task1_3() {
    alert("функция, принимающая на вход массив вещественных чисел и возвращающую сумму элементов, расположенных после последнего элемента равного нулю");
    arrStr = prompt("Введите элементы массива через запятую без пробелов");
    let arr = arrStr.split(',').map(Number);
    console.log(arr)
    let zeroInd = arr.lastIndexOf(0)
    let sum = 0
    if (zeroInd !== -1){
        for (let i = zeroInd + 1; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(sum);
        console.log(zeroInd)
        alert('Сумма элементов по модулю после нуля равна ' + sum)
    } else {
        alert('В массиве нет нулей')
    }
}

//4.4 произведение элементов между максимальным и минимальным элементами
//функции можно заменить на:
//let min = arr.indexOf(Math.min(...arr));
//let max = arr.indexOf(Math.max(...arr));
//4,5,1,5,6,9,4,5

function Task1_4() {
    function indexOfMax(a) {
        let large = 0;        
        for (let i = 0; i < a.length; i++) {
            if (a[i] > a[large]){
                large = i;
            }
        }
        return large;
    }

    function indexOfMin(a) {        
        let lowest = 0;
        for (let i = 1; i < a.length; i++) {
            if (a[i] < a[lowest]){
                lowest = i;
            }
        }
        return lowest;
    }

    alert("функция, принимающая на вход массив вещественных чисел и возвращающую произведение элементов, расположенных между максимальным и минимальным элементами");
    arrStr = prompt("Введите элементы массива через запятую без пробелов");
    let arr = arrStr.split(',').map(Number);
    console.log(arr)
    let maxInd = indexOfMax(arr)
    let minInd = indexOfMin(arr)
    if(maxInd > minInd) {
        arr = arr.slice(minInd+1, maxInd);
        console.log(arr)
    } else if(maxInd < minInd) {
        arr = arr.slice(maxInd+1, minInd);
        console.log(arr)
    }
    let result = arr.reduce(function(sum, i) {
        return sum + i;
    }, 0);
    console.log(maxInd)
    console.log(minInd)
    console.log(result)
    alert('Сумма элементов между минимальным и максимальным равна ' + result)
}

//4.5 количество элементов, равных предыдущему
//1,1,5,6,8,8,4
function Task1_5() {
    alert("функция, принимающая на вход массив вещественных чисел и возвращающую количество элементов, равных предыдущему элементу");
    arrStr = prompt("Введите элементы массива через запятую без пробелов");
    let arr = arrStr.split(',').map(Number);
    let res = arr.filter((el, i, arr) => el === arr[i-1])
    console.log(res)
}

//4.6 среднее арифметическое нечетных чисел
function Task1_6() {
    alert("функция, принимающая на вход массив вещественных чисел и возвращающую среднее арифметическое нечётных элементов");
    arrStr = prompt("Введите элементы массива через запятую без пробелов");
    let arr = arrStr.split(',').map(Number);
    console.log(arr)
    let arr1 = []
    arr1 = arr.filter (el => {
        arrOdd = el % 2 !== 0;
        return arrOdd
    }) 
    console.log(arr1)
    
    console.log(arr1.length)

    let sum = 0
    arr1.forEach(item => {
        sum += item;
        console.log(sum);
    });
    
    let res = sum / arr1.length
    alert('Среднее арифметическое чисел ' + arr1 + ' равно ' + res)
}

//4.7 количество элементов, неравных предыдущему
//1,1,5,6,8,8,4
function Task1_7() {
    alert("функция, принимающая на вход массив вещественных чисел и возвращающую количество элементов, неравных предыдущему элементу");
    arrStr = prompt("Введите элементы массива через запятую без пробелов");
    let arr = arrStr.split(',').map(Number);
    let res = arr.filter((el, i, arr) => el !== arr[i-1])
    console.log(res)
}

//ДВУМЕРНЫЕ МАССИВЫ

//4.2.3 сумма элементов в строке, где есть хотя бы 1 отрицательный элемент (по версии Макса)
/// ReadMatrix - функция считывает эл-ы прямоугольной матрицы
/// count_row - кол-во столбцов
/// count_collumn - кол-во строк
function ReadMatrix(count_collumn, count_row)
{
    let matrix = [];
    for (let i = 0; i < count_collumn; i++){
        matrix[i] = [];
        for (let j = 0; j < count_row; j++){
            let value = +prompt('Введите число');
            matrix[i].push(value)
        }}
    return matrix
}
function SumArray(arr)
{
    let res = 0
    for(a of arr)
    {
        res += a
    }
    return res
}
function SumElemWithInverseNumInRow(matrix)
{
    let sum = 0
    for(row of matrix)
    {
        if(Math.min(...row) < 0)
        {
            sum += SumArray(row)
        }
    }
    return sum;
}
function Task2_3_1()
{
    alert("Функция, принимающую на вход вещественную прямоугольную матрицу и возвращающую сумму элементов в тех строках, которые содержат хотя бы один отрицательный элемент");
    n = Number(prompt("Введите количество столбцов"));
    m = Number(prompt("Введите количество строк"));
    matrix = [[1,2,3],
            [-2,5,6],
            [1,-4,3]]
    sum = SumElemWithInverseNumInRow(matrix)
    console.log(sum)
}

//4.2.3 сумма элементов в строке, где есть хотя бы 1 отрицательный элемент
function Task2_3() {

    alert("Функция, принимающую на вход вещественную прямоугольную матрицу и возвращающую сумму элементов в тех строках, которые содержат хотя бы один отрицательный элемент");
    n = Number(prompt("Введите количество столбцов"));
    m = Number(prompt("Введите количество строк"));
    let sum = 0
    let arr = [];
    for (let i = 0; i < m; i++){
        arr[i]= [];
        for (let j = 0; j < n; j++){
            let value = +prompt('Введите число');
            arr[i].push(value)
        }
    }

    console.log(arr);
    for (let i = 0; i < m; i++){
        for (let j = 0; j < n; j++){
            if (arr[i][j] < 0) {
                arr[i].forEach(item => {
                    sum += item;
                    console.log(sum);
                });
                break
            }  
        }   
    }
}

//4.2.4 минимальные четные элементы строки матрицы
function Task2_4() {
    function minEl (arr) {
        let res = []
        let arr1 = []
        for (let j = 0; j< arr.length; j++){
            arr1[j] = arr[j].filter (el => {
            arrOdd = el % 2 === 0;
            return arrOdd
            })
            arr1[j].sort((a, b) => a - b)
        }
        console.log(arr1)
        for(let f=0; f<arr1.length; f++){
            res[f] = arr1[f][0]
        }
        return res  
    }
    alert("Функция, принимающая на вход вещественную прямоугольную матрицу и возвращающая одномерный массив, состоящий из минимальных четных элементов строк матрицы");
    n = Number(prompt("Введите количество столбцов"));
    m = Number(prompt("Введите количество строк"));
    let arr = [];
    // let arr = [[1, 6, 4], [5, 4, -2], [7, 8, 1]]
    for (let i = 0; i < m; i++){ //цикл для заполнения матрицы элементами
        arr[i]= [];
        for (let j = 0; j < n; j++){
            let value = +prompt('Введите число');
            arr[i].push(value)
        }
    }
    let res = minEl (arr)
    console.log(res)
}   

//4.6 массив номеров последних отрицательных элементов строк
function Task2_6() {
    function lastIndexOfNeg (arr) {
        let arr1 = []
        let arr2 = []
        for (let i = 0; i< arr.length; i++){ 
            arr1[i] = arr[i].filter (el => { //массив отрицательных чисел строки
            arrNeg = el < 0;
            return arrNeg
            })
            console.log(arr1[i])
            lastNeg = arr1[i].at(-1) //последний отрицательный элемент
            console.log(lastNeg)
            arr2[i] = arr[i].indexOf(lastNeg)+1 //запись номеров отрицательных элементов в arr3
            console.log(arr2[i])
        }
        console.log(arr2)
        return arr2
    }

    alert("функция, принимающая на вход вещественную прямоугольную матрицу и возвращающая одномерный массив, элементами которого будут номера последних отрицательных элементов строк матрицы");
    n = Number(prompt("Введите количество столбцов"));
    m = Number(prompt("Введите количество строк"));
    let arr = [];
    // let arr = [[1, -4, 6], [-5, 4, 2], [-7, 8, -1]]

    for (let i = 0; i < m; i++){ //цикл для заполнения матрицы элементами
        arr[i]= [];
        for (let j = 0; j < n; j++){
            let value = +prompt('Введите число');
            arr[i].push(value)
        }
    }
    lastIndexOfNeg(arr)
}

//4.2.7 минимальные элементы столбца матрицы
function Task2_7() {
    function getColumnsMin(arr, rows, columns) {
        const minValues = [];
        for (let column = 0; column < columns; column++) {
            const columnValues = [];
            for (let row = 0; row < rows; row++) {
                columnValues.push(arr[row][column]);
            }
            minValues.push(Math.min(...columnValues));
        }
        console.log(minValues)
    }
    alert("Функция, принимающая на вход вещественную прямоугольную матрицу и возвращающая одномерный массив, состоящий из минимальных четных элементов строк матрицы");
    columns = Number(prompt("Введите количество столбцов"));
    rows = Number(prompt("Введите количество строк"));
    let arr = [];
    // let arr = [[1, 6, 4], [5, 4, -2], [7, 8, 1]]
    for (let i = 0; i < columns; i++){ //цикл для заполнения матрицы элементами
        arr[i]= [];
        for (let j = 0; j < rows; j++){
            let value = +prompt('Введите число');
            arr[i].push(value)
        }
    }
    console.log(arr)
    getColumnsMin (arr, rows, columns)
}   

let task = parseFloat(prompt("Выберите номер задания", 1))
switch (task)
{
    case 1:
        Task1_1()
        break
    case 2:
        Task1_2()
        break
    case 3:
        Task1_3()
        break
    case 4:
        Task1_4()
        break
    case 5:
        Task1_5()
        break
    case 6:
        Task1_6()
        break
    case 7:
        Task1_7()
        break
    case 23:
        Task2_3()
        break
    case 231:
        Task2_3_1()
        break
    case 24:
        Task2_4()
        break
    case 26:
        Task2_6()
        break
    case 27:
        Task2_7()
        break
    default:
        alert("Такого задания нет(")
}