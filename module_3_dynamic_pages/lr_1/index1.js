//Задание 1
document.getElementById('addHeaderButton').addEventListener('click', function() {
    // Находим элемент, перед которым нужно вставить заголовок
    let contentDiv = document.getElementById('header');

    // Проверяем, существует ли уже заголовок
    let existingHeader = contentDiv.querySelector('h1');

    if (!existingHeader) {
        // Создаем новый элемент заголовка
        let newHeader = document.createElement('h1');
        newHeader.textContent = 'Новый заголовок';

        // Вставляем заголовок перед первым дочерним элементом contentDiv
        contentDiv.insertBefore(newHeader, contentDiv.firstChild);
    }
});

//Задание 2
document.getElementById('textInput').addEventListener('input', function() {
	// Получаем текст из input
	let inputText = this.value;

    // Отображаем текст в абзаце
    document.getElementById('displayText').textContent = inputText;
});

//Задание 4
function changeStyle() {
	 // Находим абзац внутри contentDiv
    let contentParagraph = document.getElementById('justText');

    // Проверяем текущий цвет текста и меняем его
    if (contentParagraph.style.color === 'red') {
        contentParagraph.style.color = 'black';
    } else {
        contentParagraph.style.color = 'red';
    }
}

// Добавляем обработчик события для кнопки changeStyleButton
document.getElementById('changeStyleButton').addEventListener('click', changeStyle);

//Задание 5
// Добавляем обработчик события для кнопки deleteChangeStyleButton
document.getElementById('deleteChangeStyleButton').addEventListener('click', function() {
	// Удаляем обработчик события у кнопки changeStyleButton
	document.getElementById('changeStyleButton').removeEventListener('click', changeStyle);
});