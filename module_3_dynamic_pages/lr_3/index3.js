//Массив растений которые изначально будут в таблице
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

//Подключение jQuery
$(document).ready(function(){

    //Удаление строки
    function removeRow(data){
        $("#" + data.id + "-row").remove();
    };

    //Вызов окна для подтверждения удаления строки
    function removeElFromTable(data){
        const answer = confirm("Вы действительно хотите удалить эту запись?");
        if (answer) {
            plants = plants.filter((item) => item.id !== data.id);
            removeRow(data);
        }
    };

    //Очистить форму 
    function clearForm(){
        $("#id").val(function(){
            return "";
        });
        $("#department").val(function(){
            return "";
        });
        $("#class").val(function(){
            return "";
        });
        $("#form").val(function(){
            return "";
        });
        $("#family").val(function(){
            return "";
        });
        $("#genus").val(function(){
            return "";
        });
        $("#type").val(function(){
            return "";
        });
        if ($('.cancel-btn').length) {
            $(".green-btn").val(function() {
                return "Добавить";
            });
            $('.cancel-btn').remove();
        };
    };

    //Изменение кнопок формы
    function returnAddButton(){
        clearForm();
        $(".cancel-btn").remove();
        $(".green-btn").val(function() {
            return "Добавить";
        });
    };

    //Редактирование строки
    function updateForm(data){
        const cells = $("#" + data.id + "-row").children();
        $("#id").val(function(){
            return cells[0].innerText;
        });
        $("#department").val(function(){
            return cells[1].innerText;
        });
        $("#class").val(function(){
            return cells[2].innerText;
        });
        $("#form").val(function(){
            return cells[3].innerText;
        });
        $("#family").val(function(){
            return cells[4].innerText;
        });
        $("#genus").val(function(){
            return cells[5].innerText;
        });
        $("#type").val(function(){
            return cells[6].innerText;
        });

        //Изменение кнопки Добавить на кнопку Изменить
        $(".green-btn").val(function(){
            return "Изменить"
        });

        if(!$('.cancel-btn').length){
            const cancelEl = document.createElement("input");
            cancelEl.classList.add("submit-btn", "cancel-btn");
            cancelEl.setAttribute("type", "button");
            cancelEl.setAttribute("value", "Отменить");
            cancelEl.onclick = function () {
                returnAddButton()
            };
            $(".submit-btn").append(cancelEl);
        };
    };

    //Метод для изменения строки из таблицы
    function updateRow(data){
        const cells = $("#" + data.id + "-row").children();
        cells[0].innerText = data.id;
        cells[1].innerText = data.department;
        cells[2].innerText = data.class;
        cells[3].innerText = data.form;
        cells[4].innerText = data.family;
        cells[5].innerText = data.genus;
        cells[6].innerText = data.type;
    };

    //Метод для изменения записи в массиве JSON
    function updatePlants(data) {
        plants = plants.map((item) => {
            if(item.id.toString() === data.id.toString()) {
                return data;
            }
            return item;
        });
        updateRow(data); 
    };

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

        //Создание кнопки Удалить
        const removeEl = document.createElement("div");
        removeEl.innerText = "Удалить";
        removeEl.classList.add("red-btn");
        removeEl.onclick = function (){
            removeElFromTable(data);
        };

        //Создание кнопки Редактировать 
        const editEl = document.createElement("div");
        editEl.innerText = "Редактировать";
        editEl.classList.add("blue-btn");
        editEl.onclick = function (){
            updateForm(data);
        };

        //Добавление кнопок в ячейку
        actionEl.append(editEl, removeEl);

        //Создание строки с id и добавление в нее ячеек
        const row = document.createElement("tr");
        row.setAttribute("id", data.id + "-row");
        row.append(idEl, departmentEl, classEl, formEl, familyEl, genusEl, typeEl, actionEl);

        //Добавление строки в таблицу
        $(".table").append(row);
    };

    //Добавление строк в таблицу из массива plants
    function addRows(){
        plants.forEach((item) => {
            addRow(item);
        });
    };

    //Добавление записи в массив
    function addPlants(plant){
        //Ищем запись с максимальным id и увеличиваем id на 1
        plant.id = Math.max(...plants.map(p => p.id)) +1;
        plants.push(plant);
        addRow(plant);
    };

    $("#my-form").submit(function (event) {
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        const value = $(".green-btn").val();
        if (value === "Добавить") {
            addPlants(data);
        }
        else if (value === "Изменить") {
            updatePlants(data);
        }
        clearForm();
        return false;
    });

    //Метод для поиска строк в таблице
    $("#search").on("keyup", function() {
        const value = $(this).val().toLowerCase();
        $(".table tr").filter(function() {
            const children = $(this).children();
            if(children && children[0].tagName.toLowerCase() === 'td'){
                $(this).toggle(
                    children[1].textContent.toLowerCase().indexOf(value) > -1 ||
                    children[2].textContent.toLowerCase().indexOf(value) > -1 ||
                    children[3].textContent.toLowerCase().indexOf(value) > -1 ||
                    children[4].textContent.toLowerCase().indexOf(value) > -1 ||
                    children[5].textContent.toLowerCase().indexOf(value) > -1 ||
                    children[6].textContent.toLowerCase().indexOf(value) > -1
                )
            }
        });
    });

    addRows();

});