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
}

class marksClass {
    constructor (subjekt, mark) {
        this.subjekt = subjekt;
        this.mark = mark;
        function avgMarks () {
            let sum = 0;
            for (let i=0; i<this.marks.length; i++) {
                sum += this.marks[i].mark;
                avg = sum/this.marks.length;
            }
            console.log(avg)
        }
    }
}


