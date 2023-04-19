function transformName() {
	const nameInput = document.getElementById("name"); //получили айди инпута фио
	let name = nameInput.value.trim().toLowerCase(); //убрали лишние пробелы и превели всё в верхний регистр
	// Используем метод capitalize(), чтобы привести первую букву имени к верхнему регистру
	name = capitalize(name);
	return name;
}
function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
/*   В этой функции `transformName()`, добавляем вспомогательную функцию `capitalize()`, 
  которая занимается приведением первой буквы строки к верхнему регистру. Затем используем `capitalize()` 
  для преобразования первой буквы имени в верхний регистр. */

/* Для реализации функции `checkSpam(str)` можно использовать метод `replace()` для замены всех вхождений "viagra" и "XXX" на "***": */
function checkSpam(str) {
	return str.replace(/viagra|XXX/gi, "***");
}
/* Здесь использовали регулярное выражение `/viagra|XXX/gi` для поиска всех вхождений "viagra" и "XXX" в строке `str` с учётом регистра. 
Метод `replace()` заменяет найденные вхождения на "***" и возвращает новую строку. */

//элементы формы
const nameInput = document.getElementById("name");
const Avatarmessage = document.getElementById("avatar");
const messageInput = document.getElementById("message-input");
const messagesDiv = document.getElementById("messages");
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", () => {
	const name = nameInput.value;
	const avatar = Avatarmessage.value;
	const message = messageInput.value;
	const messageElement = document.createElement("div");
	messageElement.innerHTML = `<img src="${avatar}" alt='изображение аватара'><p> ${name}<p/><p>${message}</p>`;
	messagesDiv.appendChild(messageElement);
	messageInput.value = "";
	Avatarmessage.value = "";
	nameInput.value = "";
});
/* Этот код создает пять переменных, которые содержат ссылки на HTML-элементы: 
'nameInput' - для поля ввода ФИО, 
'Avatarmessage' - для поля ввода ссылки на картинку, 
'messageInput' - для текстового поля ввода комментария, 
'messagesDiv' - для контейнера вывода всех элементов, 
'sendButton' - для кнопки отправки сообщения. 
Затем добавляется обработчик события "click" для кнопки отправки сообщения, который создает 
новый HTML-элемент для сообщения, добавляет его в контейнер сообщений и очищает текстовое поле ввода. */
