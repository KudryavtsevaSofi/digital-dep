//JSON объект
const studentVar = {
    firstName: 'Соня',
    secondName: 'Кудрявцева',
    marks: [{subjekt: 'математика', mark: 5}, 
        {subjekt: 'химия', mark: 4}, 
        {subjekt: 'физика', mark: 3}]
}

console.log(studentVar)

class studentClass {
    constructor (firstName, secondName, marks) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.marks = marks;  
    }
    info () {
            console.log('Имя: ' + this.firstName + this.secondName + ', оценки: ' + JSON.stringify(this.marks))
    }  
    get fullName() {
        return `${this.name} ${this.surname}`;
      }   
    set fullName(value) {
    [this.name, this.surname] = value.split(" "); 
    } 
}

class marksClass {
    constructor (subjekt, mark) {
        this.subjekt = subjekt;
        this.mark = mark; 
    }
    get subjektMarks() {
        return `${this.subjekt} ${this.mark}`;
    }
    set subjektMarks(value) {
    [this.subjekt, this.mark] = value.split(" ");
    }
}

let subjekt = new marksClass.subjekt(prompt("Введите предмет"))
let mark = new marksClass.mark(prompt("Введите оценку"))
console.log(marksClass)

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


