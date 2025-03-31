$(() => {
    const mainUrl = 'http://localhost:3000/plants/';
    const store = new DevExpress.data.CustomStore({
        key: id,
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
        update (key, values) {
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
        dataSourses: store,
        showBorders: true,
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
            dataField: 'family',
            dataType: 'string',
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
})

