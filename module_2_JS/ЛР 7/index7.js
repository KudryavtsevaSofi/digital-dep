Students = `{
    "students": [
        {
            "lastName": "Иванов",
            "firstName": "Иван",
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
                    "mark": 4
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
                    "mark": 4
                },
                {
                    "subject": "Химия",
                    "mark": 5
                }
            ]
        },
        {
            "lastName": "Никита",
            "firstName": "Никитин",
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
                    "mark": 5
                }
            ]
        },
        {
            "lastName": "Павел",
            "firstName": "Павлов",
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
                    "mark": 5
                }
            ]
        }
        
    ]
}`

function studentsToMap (data) {//4. функция, которая превращает массив студентов в объект Map, где в качестве ключей используется строка, образованная конкатенацией имени и фамилии
    const map = new Map();
    data.students.forEach(student => {
        const key = `${student.firstName} ${student.lastName}`;
        map.set(key, student);
    });
    console.log(map)
}

function compareFIO (a, b) {
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

function binarySearch (array, element, start = 0, end = array.lenght - 1) {
    const middle = ((start + end) / 2);

    if (element === array[middle.lastName] + + array[middle.firstName]) {
        return middle;
    }

    if (start >= end) {
        return -1;
    }

    if (element < array[middle.lastName] + + array[middle.firstName]) {
        return binarySearch (array, element, start, middle - 1);
    } else {
        return binarySearch (array, element, middle + 1, end);
    }
}

function Task1(data){
    data.students.sort(compareFIO);
    binarySearch(data);
    studentsToMap (data);
}

const data = JSON.parse(Students);// Преобразуем JSON-строку в объект JavaScript

while (true) {
    let task = parseFloat(prompt("1 - массив студентов, 2 - Сортировка Шелла, 3 - Индекс первого студента в массиве, у которого есть указанная оценка 4 - Массив студентов в виде объекта map, 5 - Удаление студентов, у которых нет оценок по заданному предмету, 6 - Выход", 1))
    if (task === 6) break
    switch (task)
    {
        case 1:
            studentsToMap (data);
            break
        case 2:
            Task1(data);
            break
        case 3:
            getStudentByMark(data);
            break
    }
}

