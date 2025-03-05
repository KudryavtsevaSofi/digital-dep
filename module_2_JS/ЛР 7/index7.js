Students = `{
    "students": [
        {
            "lastName": "Иванов",
            "firstName": "Иван",
            "marks": [
                {
                    "subject": "Математика",
                    "mark": 2
                },
                {
                    "subject": "Физика",
                    "mark": 4
                },
                {
                    "subject": "Химия",
                    "mark": 3
                }
            ]
        },
        {
            "lastName": "Петров",
            "firstName": "Петр",
            "marks": [
                {
                    "subject": "Математика",
                    "mark": 2
                },
                {
                    "subject": "Физика",
                    "mark": 5
                }
            ]
        },
        {
            "lastName": "Сидоров",
            "firstName": "Сидор",
            "marks": [
                {
                    "subject": "Математика",
                    "mark": 4
                },
                {
                    "subject": "Физика",
                    "mark": 3
                },
                {
                    "subject": "Химия",
                    "mark": 5
                }
            ]
        },
        {
            "lastName": "Никитин",
            "firstName": "Никита",
            "marks": [
                {
                    "subject": "Математика",
                    "mark": 4
                },
                {
                    "subject": "Физика",
                    "mark": 4
                },
                {
                    "subject": "Химия",
                    "mark": 2
                }
            ]
        },
        {
            "lastName": "Павлов",
            "firstName": "Павел",
            "marks": [
                {
                    "subject": "Математика",
                    "mark": 5
                },
                {
                    "subject": "Физика",
                    "mark": 4
                },
                {
                    "subject": "Химия",
                    "mark": 5
                }
            ]
        },
        {
            "lastName": "Руслан",
            "firstName": "Русланов",
            "marks": [
                {
                    "subject": "Математика",
                    "mark": 4
                },
                {
                    "subject": "Физика",
                    "mark": 2
                },
                {
                    "subject": "Химия",
                    "mark": 5
                }
            ]
        }
    ]
}`

function studentsToMap (data) {//функция, которая превращает массив студентов в объект Map, где в качестве ключей используется строка, образованная конкатенацией имени и фамилии
    const map = new Map();
    data.students.forEach(student => {
        const key = `${student.firstName} ${student.lastName}`;
        map.set(key, student);
    });
    console.log(map)
}

function compareFIO (a, b) {//компоратор сортировки студентов по фамилии и имени
    const FIOa = a.lastName.toLowerCase() + a.firstName.toLowerCase();//приведение к нижнему регистру для реализации регистронезависимой сортировки
    const FIOb = b.lastName.toLowerCase() + b.firstName.toLowerCase();
    if (FIOa < FIOb) {
        return -1;
    }
    if (FIOa > FIOb) {
        return 1;
    }
    return 0;
}

function binarySearch (students) {//бинарный поиск студента по фамилии и имени в массиве студентов
    let targetLastName = prompt("Введите фамилию студента:");
    let targetFirstName = prompt("Введите имя студента:");
    let targetFIO = targetLastName+targetFirstName;
    let left = 0;
    let right = students.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        // console.log(mid)
        const midStudent = data.students[mid];
        let midFIO = midStudent.lastName+midStudent.firstName
        // console.log(targetFIO, midFIO)
        if (midFIO === targetFIO) {// Сравниваем фамилии и имена
            return midStudent;
        } else if (midFIO < targetFIO) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return false;
}

function Task1res () {//результат 1 задания
    const result = binarySearch(data.students);
    if (result) {
        console.log("Студент найден:", result);
    } else {
        console.log("Студент не найден.");
    }
}

function Task1(data){//вызов функций 1 задания
    console.log(data.students.sort(compareFIO));
    Task1res (data);
}

function Task2(data){//вызов функций 2 задания
    getAverageMark(data.students);
    shellSort(data.students);
    studentsToMap (data);
}

function getAverageMark(students) { //функция, возвращающая среднюю оценку студента по всем предметам
    students.forEach(student => {
        const totalMarks = student.marks.reduce((sum, mark) => sum + mark.mark, 0);
        const averageMark = totalMarks / student.marks.length;
        student.averageMark = averageMark;
    });
    
}

function shellSort(students) {//функция сортировки Шелла
    let d = Math.floor(students.length / 2);
    while (d > 0) {
        for (let i = d; i < students.length; i++) {
            let temp = students[i];
            let j = i;
            while (j >= d && students[j - d].averageMark > temp.averageMark) {
                students[j] = students[j - d];
                j -= d;
            }
            students[j] = temp;
        }
        d = Math.floor(d / 2);
    }
}

const data = JSON.parse(Students);// Преобразуем JSON-строку в объект JavaScript

while (true) {
    let task = parseFloat(prompt("1 - массив студентов, 2 - Бинарный поиск студентов, 3 - Сортировка Шелла, 4 - Выход", 1))
    if (task === 4) break
    switch (task)
    {
        case 1:
            studentsToMap (data);
            break
        case 2:
            Task1(data);
            break
        case 3:
            Task2(data);
            break
    }
}

