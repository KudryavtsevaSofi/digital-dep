//Подключение jQuery
$(document).ready(function(){
    const store = new DevExpress.data.CustomStore({
        key: id,
        load () {
            const deffered = $.Deferred();

            $.ajax ({
                url: 'http://localhost:3000/plants',
                dataType: 'json',
                success(result){
                    deffered.resolve(result, {
                        totalCount: result.length
                    });
                },
                error(){
                    deferred.reject('Ошибка загрузки растений');
                },
                timeout: 5000,
            });

            return deffered.promise();
        },
    });

    $('#gridContainer').dxDataGrid({
        dataSourses: store,
        showBorders: true,
        remoteOperations: true,
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
});