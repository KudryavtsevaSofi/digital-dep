// ПРИВЕТ
function Task1() {
    let fName = prompt("Введите свое имя");
    alert("Привет " + fName);
}
// Shift+Alt+F форматирование 
// ПЛОЩАДЬ ТРЕУГОЛЬНИКА ПО КООДИНАТАМ ВЕРШИН
function Task2() {
    alert('Это программа для вычисления площади треугольника по координатам вершин');
    [x1, y1] = [+prompt("x1"), +prompt('y1')];
    [x2, y2] = [+prompt("x2"), +prompt('y2')];
    [x3, y3] = [+prompt("x3"), +prompt('y3')];
    let a=Math.sqrt((x2-x1) ** 2 + (y2-y1) ** 2);
    let b=Math.sqrt((x3-x2) ** 2 + (y3-y2) ** 2);
    let c=Math.sqrt((x3-x1) ** 2 + (y3-y1) ** 2);
    let P=a+b+c;
    let p2=P/2;
    let S=Math.sqrt(p2*(p2-a)*(p2-b)*(p2-c));
    alert('Площадь треугольника с указанными координатами вершин равна ' + S);
}
// ПЕРЕВОД КООРДИНАТ ИЗ ДЕКАРТОВОЙ СИСТЕМЫ КООРДИНАТ В ПОЛЯРНУЮ
function Task3() {
    console.log ('Это программа для перевода координат из декатовой системы в полярную');
    [x, y] = [+prompt("x"), +prompt('y')];
    let r=Math.sqrt(x ** 2 + y ** 2); 
    let u1=x / y;
    let u2=Math.tan(u1);
    let u3= - Math.atan(u2);
    console.log ('Координаты в полярной системе координат: полярный радиус = ' + r +', полярный угол = ' + u3 );
}
// СУММА ЧЛЕНОВ ГЕОМЕТРИЧЕСКОЙ ПРОГРЕССИИ
function Task4() {
    function GeomProgress(b1, q, n){
        Sn = (b1 * (q**n - 1))/(q-1)
        return Sn
    }
    b1 = parseFloat(prompt("Введите первое число", 0))
    q = parseFloat(prompt("Введите шаг", 0))
    while(q <= 1)
    {
        q = parseFloat(prompt("Некорректный шаг, введите другой", 0))
    }
    
    n = parseFloat(prompt("Введите количество чисел", 0))
    
    alert("Сумма геометрической прогрессии = " + GeomProgress(b1, q, n))
    console.log("Сумма геометрической прогрессии = ", GeomProgress(b1, q, n))
    console.log("b1 = ", b1)
    console.log("q = ", q)
    console.log("n = ", n)
}

// сумма элементов арифметической  прогрессии
function Task5() {
    function arithProgress(a1, d, n){
        an = a1 + d * (n - 1)
        Sn = ((a1 + an) / 2) * n
        return Sn
    }
    a1 = parseFloat(prompt("Введите первое число", 0))
    d = parseFloat(prompt("Введите шаг", 0))
    while(d <= 1)
    {
        d = parseFloat(prompt("Некорректный шаг, введите другой", 0))
    }
    
    n = parseFloat(prompt("Введите количество чисел", 0))
    
    alert("Сумма геометрической прогрессии = " + arithProgress(a1, d, n))
    console.log("Сумма геометрической прогрессии = ", arithProgress(a1, d, n))
    console.log("a1 = ", a1)
    console.log("d = ", d)
    console.log("n = ", n)
}

// окружность, описанную около треугольника, заданного координатами вершин
function Task6() {
    alert('Это программа для построения окружности, описанной около треугольника, заданного координатами вершин');
    [x1, y1] = [+prompt("x1"), +prompt('y1')];
    [x2, y2] = [+prompt("x2"), +prompt('y2')];
    [x3, y3] = [+prompt("x3"), +prompt('y3')];
    // вычисление середины сторон треугольника
    let x4 = (x1+x2)/2;
    let y4 = (y1+y2)/2;
    let x5 = (x1+x3)/2;
    let y5 = (y1+y3)/2;
    //кооффициенты 2х прямых,перпендикулярных сторонам и проходящих через их середины
    let a1 = x2-x1;
    let b1 = y2-y1;
    let c1 = x4*(x2-x1)+y4*(y2-y1);
    let a2 = x3-x1;
    let b2 = y3-y1;
    let c2 = x5*(x3-x1)+y5*(y3-y1);
    //координаты центра=точка пересечения прямых
    let xo = Math.round((c1*b2-c2*b1)/(a1*b2-a2*b1));
    let yo = Math.round((a1*c2-a2*c1)/(a1*b2-a2*b1));
    //радиус окружности по длине сторон и полупериметру
    l1 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    l2 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2)
    l3 = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2)
    HalfP = (l1 + l2 + l3) / 2
    r = Math.round((l1 * l2 * l3) / (4 * Math.sqrt(HalfP * (HalfP - l1) * (HalfP - l2) * (HalfP - l3))))
    // let r = Math.round(Math.sqrt(Math.sqrt(x1 - xo) + Math.sqrt(y1 - yo)));
    console.log(x1, y1, x2, y2, x3, y3)
    console.log(l1, l2, l3)
    alert('Координаты центра окружности: ' + xo + ", " + yo + ", радиус окружности: " + r);
}

// окружность, окружность, вписанную в треугольник, заданный координатами вершин
function Task7() {
    alert('Это программа для построения окружности, вписанной в треугольник, заданный координатами вершин');
    [x1, y1] = [+prompt("x1"), +prompt('y1')];
    [x2, y2] = [+prompt("x2"), +prompt('y2')];
    [x3, y3] = [+prompt("x3"), +prompt('y3')];
    //радиус окружности по площади треугольника и полупериметру
    l1 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
    l2 = Math.sqrt((x3 - x2) ** 2 + (y3 - y2) ** 2)
    l3 = Math.sqrt((x1 - x3) ** 2 + (y1 - y3) ** 2)
    HalfP = (l1 + l2 + l3) / 2
    let S=Math.sqrt(HalfP*(HalfP-l1)*(HalfP-l2)*(HalfP-l3));
    let r = Math.round(2*S/(l1+l2+l3))
    //координаты центра по пересечению биссектрис
    let xo = Math.round((l1*x3+l3*x2+l2*x1) / (l1+l2+l3))
    let yo = Math.round((l1*y3+l3*y2+l2*y1) / (l1+l2+l3))
    console.log(x1, y1, x2, y2, x3, y3)
    console.log(l1, l2, l3)
    console.log(r)
    console.log(xo, yo)
    alert('Координаты центра окружности: ' + xo + ", " + yo + ", радиус окружности: " + r);
}

let task = parseFloat(prompt("Какое задание хочешь посмотреть?", 1))
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