//JSON объект
const studentVar = {
    firstName: 'Соня',
    secondName: 'Кудрявцева',
    marks: [{subject: 'математика', mark: 5}, 
        {subject: 'химия', mark: 4}, 
        {subject: 'физика', mark: 3}]
}

class marksClass {
    constructor (subject, mark) {
        this.subject = subject;
        this.mark = mark; 
    }
}

class studentClass {
    constructor (firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.marks = [];  
    } 
    
    getAverageMark() { //3. метод, возвращающий среднюю оценку студента по всем предметам
        if (this.marks.length === 0) {
        return 0;
        }
        const totalMarks = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
        let resAvgMarks = totalMarks / this.marks.length;
        console.log(`Средняя оценка по всем предметам:  ` + resAvgMarks);
    }

    alertsubject1 (){ //alert для ввода предмета
        let subject = prompt("Введите название предмета:");
        this.getMarksBysubject(subject);
    } 

    getMarksBysubject(subject) { //4. метод, возвращающий все оценки по переданному предмету
        console.log(this.marks.filter(mark => mark.subject === subject));
    }

    alertAddMark (){ //alert для добавления оценки по предмету
        let subject = prompt("Введите название предмета:");
        let mark = parseInt(prompt("Введите оценку:"));
        this.addMark(subject, mark);
    }

    addMark (subject, mark){ //5. метод добавления оценки по предмету
        let newMark = new marksClass(subject, mark);
        this.marks.push(newMark);
    }

    alertsubject2 (){ //alert для ввода предмета
        let subject = prompt("Введите название предмета:");
        this.removeMarksBysubject(subject);
    }

    removeMarksBysubject(subject) { //6. метод, удаляющий все оценки по переданному предмету
        this.marks = this.marks.filter(mark => mark.subject !== subject);
    }

    printStudentInfo() { //метод вывода информации о студенте
        console.log(`Студент: ${this.firstName} ${this.secondName}`);
        console.log("Оценки:");
        this.marks.forEach(mark => {
            console.log(`${mark.subject}: ${mark.mark}`);
        });
    }
}

const student = new studentClass("Соня", "Кудрявцева");
student.addMark("Математика", 5);
student.addMark("Физика", 4);
student.addMark("Химия", 3);

while (true) {
    let task = parseFloat(prompt("1 - Вывод средней оценки студента по всем приедметам, 2 - Вывод оценок по заданному предмету, 3 - Добавление оценки по предмету, 4 - Удаление всех оценок по предмету 5 - Выйти из программы", 1))
    if (task === 5) break
    switch (task)
    {
        case 1:
            student.getAverageMark();
            student.printStudentInfo();
            break
        case 2:
            student.alertsubject1();
            student.printStudentInfo();
            break
        case 3:
            student.alertAddMark();
            student.printStudentInfo();
            break
        case 4:
            student.alertsubject2();
            student.printStudentInfo();
            break
    }
}

