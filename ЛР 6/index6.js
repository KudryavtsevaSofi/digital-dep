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
                },
                {
                    "subject": "Химия",
                    "mark": 4
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

function reverseStudents (data) {
    function sortStudentsReverse(students) {// Функция для сортировки элементов в обратном порядке
        students.students.reverse();// Сортируем массив студентов в обратном порядке
        return students;
    }
    const sortedData = sortStudentsReverse(data);// Сортируем студентов
    const sortedJsonData = JSON.stringify(sortedData);// Преобразуем отсортированный объект обратно в JSON-строку
    console.log(sortedJsonData);
}

function getStudentByMark (data){
    let subject = prompt("Введите предмет:");
    let mark = parseInt(prompt("Введите оценку:"));
    let res = data.students.findIndex(student =>
        student.marks.some(m => m.subject === subject && m.mark === mark)
    );
    console.log(res)
}

const data = JSON.parse(Students);// Преобразуем JSON-строку в объект JavaScript

while (true) {
    let task = parseFloat(prompt("1 - Вывод информации о студентах, 2 - Вывод студентов в обратном направлении, 3 - Добавление оценки по предмету, 4 - Удаление всех оценок по предмету 5 - Выйти из программы", 1))
    if (task === 5) break
    switch (task)
    {
        case 1:
            printStudentsInfo();
            break
        case 2:
            reverseStudents(data);
            break
        case 3:
            getStudentByMark(data);
            break
        case 4:
            student.alertsubject2();
            student.printStudentInfo();
            break
    }
}