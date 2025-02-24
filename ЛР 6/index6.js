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
        }
    ]
}`

function printStudentsInfo () {
    console.log(JSON.stringify(Students))
}

function reverseStudents (data) { //1. функция, которая возвращает переданный массив студентов, упорядоченный в обратном направлении.
    function sortStudentsReverse(students) {// Функция для сортировки элементов в обратном порядке
        students.students.reverse();// Сортируем массив студентов в обратном порядке
        return students;
    }
    const sortedData = sortStudentsReverse(data);// Сортируем студентов
    const sortedJsonData = JSON.stringify(sortedData);// Преобразуем отсортированный объект обратно в JSON-строку
    console.log(sortedJsonData);
}

function getAllStudentsByMark(data) { //2. функция, которая находит и возвращает индексы всех студентов в массиве, у которых есть указанная оценка по указанному предмету
    let subject = prompt("Введите предмет:");
    let mark = parseInt(prompt("Введите оценку:"));
    const indices = [];
    data.students.forEach((student, index) => {
        const hasMark = student.marks.some(m => m.subject === subject && m.mark === mark);
        if (hasMark) {
            indices.push(index);
        }
    });
    console.log(indices);
    return indices;
}

function getStudentByMark (data){//3. функция, которая находит и возвращает индекс первого студента в массиве, у которого есть указанная оценка по указанному предмету
    let subject = prompt("Введите предмет:");
    let mark = parseInt(prompt("Введите оценку:"));
    let res = data.students.findIndex(student =>
        student.marks.some(m => m.subject === subject && m.mark === mark)
    );
    console.log(res)
}

function studentsToMap (data) {//4. функция, которая превращает массив студентов в объект Map, где в качестве ключей используется строка, образованная конкатенацией имени и фамилии
    const map = new Map();
    data.students.forEach(student => {
        const key = `${student.firstName} ${student.lastName}`;
        map.set(key, student);
    });
    console.log(map)
}

function deleteStudents (data) {//5. функция, , которая удаляет из переданного массива всех студентов, у которых нет оценок по указанному предмету
    let subject = prompt("Введите предмет:");
    let res = data.students.filter(student =>
        student.marks.some(mark => mark.subject === subject)
    );
    console.log(res)
}

const data = JSON.parse(Students);// Преобразуем JSON-строку в объект JavaScript

while (true) {
    let task = parseFloat(prompt("1 - массив студентов, упорядоченный в обратном направлении, 2 - Индексы всех студентов в массиве, у которых есть указанная оценка, 3 - Индекс первого студента в массиве, у которого есть указанная оценка 4 - Массив студентов в виде объекта map, 5 - Удаление студентов, у которых нет оценок по заданному предмету, 6 - Выход", 1))
    if (task === 6) break
    switch (task)
    {
        case 1:
            reverseStudents(data);
            break
        case 2:
            getAllStudentsByMark(data);
            break
        case 3:
            getStudentByMark(data);
            break
        case 4:
            studentsToMap(data);
            break
        case 5:
            deleteStudents(data);
            break
    }
}