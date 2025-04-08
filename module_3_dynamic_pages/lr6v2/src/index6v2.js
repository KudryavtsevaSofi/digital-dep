//Подключение jQuery
$(() => {
    const mainUrl = 'http://localhost:3000/plants/'; 
    const store = new DevExpress.data.CustomStore({
        key: 'id',
        load() { //функция загрузки данных
            return sendRequest(mainUrl); 
        },
        insert(values) {//функция доставки данных
            return sendRequest(mainUrl, 'POST', {
                ...values
            });
        },
        remove(key) { //функция удаления данных
            return sendRequest(`${mainUrl}\\${key}`, 'DELETE');
        },
        update (key, values) { //функция обновления данных
            return sendRequest(`${mainUrl}\\${key}`, 'PATCH', {
                ...values
            });  
        },
    });

    function sendRequest(url, method = 'GET', data) { //отправка данных на сервер
        const d = $.Deferred();

        $.ajax(url, {
            method,
            data,
            cache: false,
        }).done((result) => {
            d.resolve(result);
        }).fail((xhr) => {
            d.reject(xhr.responseJSON ? xhr.responseJSON.Message : xhr.statusText);
        });

        return d.promise();
    }
        
    $('#gridContainer').dxDataGrid({
        dataSourses: store,
        noDataText:'Ничего не найдено',
        showBorders: true,
        searchPanel: {
            visible: true,
            width: 340,
            placeholder: 'Поиск...',
        },
        headerFilter: {
            visible: true,
        },
        editing: {
            mode: 'popup',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            texts: {
                addRow: 'Добавить',
                deleteRow: 'Удалить',
                editRow: 'Изменить',
                saveRowChanges: 'Сохранить',
                canselRowChanges: 'Отменить',
                confirmDeleteMessage: 'Вы действительно хотите удалить?'
            },
            useIcons: true,
            popup: {
                title: 'Информация',
                showTitle: true,
                width: 700,
                height: 375,
            },
            form: {
                items: [{
                    itemsType: 'group',
                    colCount: 2,
                    colSpan: 2,
                    items: ['department', 'class', 'form', 'family'],
                }, {
                    itemsType: 'group',
                    colCount: 2,
                    colSpan: 2,
                    items: ['genus', 'type'],
                }],
            },
        },
        paging: {
            enabled: false,
        },
        columns: [{
            caption: 'Идентификатор',
            width: 130,
            dataField: 'id',
            dataType: 'number',
        }, {
            caption: 'Отдел',
            dataField: 'department',
            dataType: 'string',
        }, {
            caption: 'Класс',
            dataField: 'class',
            dataType: 'string',
        }, {
            caption: 'Порядок',
            dataField: 'form',
            dataType: 'string',
        }, {
            caption: 'Семейство',
            width: 200,
            dataField: 'family',
            dataType: 'string',
            lookup: {
                dataSourse: new DevExpress.data.CustomStore({
                    key: 'id',
                    loadMode: 'raw',
                    load() {
                        return sendRequest('http://localhost:3000/families/');
                    },
                }),
                valueExpr: 'id',
                displayExpr: 'name',
            },
        }, {
            caption: 'Род',
            dataField: 'genus',
            dataType: 'string',
        }, {
            caption: 'Вид',
            dataField: 'type',
            dataType: 'string',
        }],
    }).dxDataGrid('instance');

});