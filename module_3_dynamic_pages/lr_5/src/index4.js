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
            fetch('http://localhost:3000/plants/' + data.id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                }
            }).then(response => {
                if (response.status === 200) {
                removeRow(data)
            } else {
                alert ('Что-то пошло не так при попытке удаления');
            }
        })
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
        $("#id").val(function(){
            return data.id;
        });
        $("#department").val(function(){
            return data.department;
        });
        $("#class").val(function(){
            return data.class;
        });
        $("#form").val(function(){
            return data.form;
        });
        $("#family").val(function(){
            return data.family?.id;
        });
        $("#genus").val(function(){
            return data.genus;
        });
        $("#type").val(function(){
            return data.type;
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
        cells[4].innerText = data.family?.name;
        cells[5].innerText = data.genus;
        cells[6].innerText = data.type;
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
        familyEl.innerText = data.family?.name;

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
    function addRows(plants){
        plants.forEach((item) => {
            addRow(item);
        });
    };

    //Добавление записи в массив
    function addPlants(plant){
        fetch('http://localhost:3000/plants/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(plant)
        }).then(response => response.json())
            .then(async data => await addPlantsById(data?.id))
    };

//Работа с localStorage и fetch

    //Получение данных с помощью fetch
    fetch('http://localhost:3000/plants?_expand=family')
        .then(response => response.json())
        .then(data => addRows(data));

    function updatePlants(data) {
        fetch(`http://localhost:3000/plants/${data.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data) 
        }).then(response => response.json())
            .then(async data => await updatePlantsById(data?.id))
    };

    //Функция обновление информации о растении в таблице
    async function updatePlantsById(id){
        const plant = await getPlantsById(id);
        updateRow(plant);
    }

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

    //Функция для динамического добавления элементов списка
    function addFamilies(families){
        $.each(families, (i, value) =>
            $('#family').append(`<option value='${value.id}'>${value.name}</potion>`)
        );
    }

    fetch('http://localhost:3000/families')
        .then(response => response.json())
        .then(families => addFamilies(families));

    //Функция для получения информации о растении по идентификатору
    async function getPlantsById(id) {
        const response = await fetch(`http://localhost:3000/plants/${id}?_expand=family`);
        const result = await response.json();
        return result;
    }

    async function addPlantsById(id) {
        const plant = await getPlantsById(id);
        addRow(plant);
    }

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

});