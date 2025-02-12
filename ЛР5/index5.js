//JSON объект
const studentVar = {
    firstName: 'Соня',
    secondName: 'Кудрявцева',
    marks: [{subjekt: 'математика', mark: 5}, 
        {subjekt: 'химия', mark: 4}, 
        {subjekt: 'физика', mark: 3}]
}

function printStudentInfo(studentVar) {
    console.log(`Студент: ${studentVar.firstName} ${studentVar.secondName}`);
    console.log("Оценки:");
    studentVar.marks.forEach(mark => {
      console.log(`${mark.subjekt}: ${mark.mark}`);
    });
  }
  
  printStudentInfo(studentVar);

class studentClass {
    constructor (firstName, secondName) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.marks = [];  
    } 
}

class marksClass {
    constructor (subjekt, mark) {
        this.subjekt = subjekt;
        this.mark = mark; 
    }
}

let task = parseFloat(prompt("1 - Вывод средней оценки студента по всем приедметам, 2 - Вывод оценок по заданному предмету, 3 - Добавление оценки по предмету, 4 - Удаление всех оценок по предмету", 1))
switch (task)
{
    case 1:
        Task1_1()
        break
    case 2:
        Task1_2()
        break
    case 3:
        addMark()
        break
    case 4:
        addMark()
        break
}

function addMark (subjekt, mark){
    let newMark = new marksClass(subjekt, mark);
    this.marks.push(newMark);
    printStudentInfo(studentVar);
}

function getAverageMark() {
    if (this.marks.length === 0) {
      return 0;
    }
    const totalMarks = this.marks.reduce((sum, mark) => sum + mark.mark, 0);
    return totalMarks / this.marks.length;
  }

// marksClass.avgMarks = function  () {
//     let sum = 0;
//     for (let i=0; i<Object.keys(marksClass).length; i++) {
//         sum += Object.keys(marksClass)[i];
//         avg = sum/Object.keys(marksClass).length;
//     }
//     console.log(avg)
//     console.log(sum)
// }

// console.log(marksClass.avgMarks())


