function transformName() {
	const nameInput = document.getElementById("name");
	let name = nameInput.value.trim(); // Удаляем пробелы с начала и конца строки
	name =
		name.charAt(0).toUpperCase() +
		name.slice(1).WordUtils.capitalizeFully(name); // Переводим первую букву в верхний регистр, остальные - в нижний
	nameInput.value = name; // Обновляем значение поля ввода
}

function addMessage() {
	let messageInput = document.getElementById("name");
	let messageText = messageInput.value;

	let messageAvatar = document.getElementById("avatar");
	let avatarInput = messageAvatar.value;

	let messagesOfAllFields = document.getElementById("message");
	let messagesFields = messagesOfAllFields.value;
	// Проверка на спам
	messageText = checkSpam(messageText);
	avatarInput = checkSpam(messageAvatar);
	messagesFields = checkSpam(messagesOfAllFields);

	let messageElement = document.createElement("div");
	messageElement.innerText = messageText;
	let messageList = document.getElementById("messages");
	messageList.appendChild(messageElement);
	messageInput.value = "";
	messageAvatar.value = "";
	messagesOfAllFields.value = "";
}

function checkSpam(str) {
	// Преобразование строки к нижнему регистру
	str = str.toLowerCase();
	// Замена 'viagra' или 'xxx' на '***'
	str = str.replace(/viagra/g, "***");
	str = str.replace(/xxx/g, "***");
	return str;
}
