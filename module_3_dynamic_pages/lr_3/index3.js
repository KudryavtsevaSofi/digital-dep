let plants = [
    {
        id: 1,
        department: "Покрытосеменные",
        class: "Однодольные",
        form: "Спаржецветные",
        family: "Амариллисовые",
        genus: "Подснежник",
        type: "Подснежник Борткевича"
    },
    {
        id: 2,
        department: "Цветковые",
        class: "Однодольные",
        form: "Спаржецветные",
        family: "Амариллисовые",
        genus: "Лук",
        type: "Лук низкий"
    },
    {
        id: 3,
        department: "Цветковые",
        class: "Однодольные",
        form: "Частухоцветные",
        family: "Частуховые",
        genus: "Кальдезия",
        type: "Кальдезия белозоролистная"
    },
    {
        id: 4,
        department: "Цветковые",
        class: "Двудольные",
        form: "Бобовоцветные",
        family: "Бобовые",
        genus: "Копеечник",
        type: "Копеечник седоватый"
    },
    {
        id: 5,
        department: "Цветковые",
        class: "Двудольные",
        form: "Бобовоцветные",
        family: "Бобовые",
        genus: "Эверсмания",
        type: "Эверсмания почти-колючая"
    }
]

//Добавление строки таблицы
function addRow(data) {
    const idEl = document.createElement("td");
    idEl.innerText = data.id;

    const departmentEl = document.createElement("td");
    departmentEl.innerText = data.department;

    const classEl = document.createElement("td");
    classEl.innerText = data.class;

    const formEl = document.createElement("td");
    formEl.innerText = data.form;

    const familyEl = document.createElement("td");
    familyEl.innerText = data.family;

    const genusEl = document.createElement("td");
    genusEl.innerText = data.genus;

    const typeEl = document.createElement("td");
    typeEl.innerText = data.type;

    //Создание ячейки для кнопок
    const actionEl = document.createElement("td");
}

//Добавление строк в таблицу из массива plants
function addRows(){
    plants.forEach((item) => {
        addRow(item);
    });
}

$(document).ready(function(){

});