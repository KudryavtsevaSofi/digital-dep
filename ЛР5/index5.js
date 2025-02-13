//JSON объект
const studentVar = {
    firstName: 'Соня',
    secondName: 'Кудрявцева',
    marks: [{subjekt: 'математика', mark: 5}, 
        {subjekt: 'химия', mark: 4}, 
        {subjekt: 'физика', mark: 3}]
}

class marksClass {
    constructor (subjekt, mark) {
        this.subjekt = subjekt;
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

    alertSubjekt1 (){ //alert для ввода предмета
        let subjekt = prompt("Введите название предмета:");
        this.getMarksBySubjekt(subjekt);
    } 

    getMarksBySubjekt(subjekt) { //4. метод, возвращающий все оценки по переданному предмету
        console.log(this.marks.filter(mark => mark.subjekt === subjekt));
    }

    alertAddMark (){ //alert для добавления оценки по предмету
        let subjekt = prompt("Введите название предмета:");
        let mark = parseInt(prompt("Введите оценку:"));
        this.addMark(subjekt, mark);
    }

    addMark (subjekt, mark){ //5. метод добавления оценки по предмету
        let newMark = new marksClass(subjekt, mark);
        this.marks.push(newMark);
    }

    alertSubjekt2 (){ //alert для ввода предмета
        let subjekt = prompt("Введите название предмета:");
        this.removeMarksBySubjekt(subjekt);
    }

    removeMarksBySubjekt(subjekt) { //6. метод, удаляющий все оценки по переданному предмету
        this.marks = this.marks.filter(mark => mark.subjekt !== subjekt);
    }

    printStudentInfo() { //метод вывода информации о студенте
        console.log(`Студент: ${this.firstName} ${this.secondName}`);
        console.log("Оценки:");
        this.marks.forEach(mark => {
            console.log(`${mark.subjekt}: ${mark.mark}`);
        });
    }
}

const student = new studentClass("Соня", "Кудрявцева");
student.addMark("Математика", 5);
student.addMark("Физика", 4);
student.addMark("Химия", 3);

let task = parseFloat(prompt("1 - Вывод средней оценки студента по всем приедметам, 2 - Вывод оценок по заданному предмету, 3 - Добавление оценки по предмету, 4 - Удаление всех оценок по предмету", 1))
switch (task)
{
    case 1:
        student.getAverageMark();
        student.printStudentInfo();
        break
    case 2:
        student.alertSubjekt1();
        student.printStudentInfo();
        break
    case 3:
        student.alertAddMark();
        student.printStudentInfo();
        break
    case 4:
        student.alertSubjekt2();
        student.printStudentInfo();
        break
}


