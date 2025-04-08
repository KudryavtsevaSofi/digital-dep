//Подключение jQuery
$(() => {
    const mainUrl = 'http://localhost:3000/plants/'; 
    const store = new DevExpress.data.CustomStore({
        key: 'id',
        load() {
            return sendRequest(mainUrl)
        },
        insert(values) {
            return sendRequest(mainUrl, 'POST', {
                ...values
            })
        },
        remove(key) {
            return sendRequest(`${mainUrl}\\${key}`, 'DELETE');
        },
        update(key, values) {
            return sendRequest(`${mainUrl}\\${key}`, 'PATCH', {
                ...values
            });
        },
    });

    function sendRequest(url, method = 'GET', data) {
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
        dataSource: store,
        noDataText: 'Ничего не найдено',
        showBorders: true,
        searchPanel: {
            visible: true,
            width: 340,
            placeholder: 'Введите данные для поиска...',
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
                    itemType: 'group',
                    colCount: 2,
                    colSpan: 2,
                    items: ['department', 'class', 'form', 'familyId'],
                }, {
                    itemType: 'group',
                    colCount: 2,
                    colSpan: 2,
                    // caption: 'Документы',
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
            dataField: 'familyId',
            dataType: 'string',
            lookup: {
                dataSource: new DevExpress.data.CustomStore({
                    key: 'id',
                    loadMode: 'raw',
                    load() {
                        return sendRequest(`http://localhost:3000/families/`);
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