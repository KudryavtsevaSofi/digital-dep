$(document).ready(function(){
    // Задание 2
    document.getElementById('changeTextButton').addEventListener('click', function() {
        $('.container1 p').html(function(){
        return '<p>Вы изменили текст</p>'
        });
    });

    // Задание 3
    $('#changeAttributeButton').click(function() {
        $('a').attr({
            'href': 'https://getbootstrap.com/',
            'title': 'Bootstrap'
        });
    });
    
    // Задание 4
    $('#addImgeButton').click(function() {
        $('.textContainer p').each(function() {
            // Добавляем картинку до абзаца
            $(this).before('<img src="imgBefore.jpg">');
            // Добавляем картинку после абзаца
            $(this).after('<img src="imgAfter.jpg">');
        });
    });

    // Задание 5
    $('#removeFirstPButton').click(function() {
        $('.textContainer p:first').remove();
    });

    // Задание 6
    $('#removeDivPButton').click(function() {
        $('.textContainer').empty();
        $('.textContainer').addClass('empty-container');
    });

    // Задание 7
    $('#updateStylePButton').click(function() {
        $('.textContainer').toggleClass('updateStyleСontainer');
    });
});