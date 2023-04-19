function transformName() {
	const nameInput = document.getElementById("name");
	let name = nameInput.value.trim().toLowerCase();
	// Используем метод capitalize(), чтобы привести первую букву имени к верхнему регистру:
	name = capitalize(name);
	return name;
}

function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
/*   В этой функцие `transformName()`, мы добавляем вспомогательную функцию `capitalize()`, 
  которая занимается приведением первой буквы строки к верхнему регистру. Затем мы используем `capitalize()` 
  для преобразования первой буквы имени в верхний регистр. */

const nameInput = document.getElementById("name");
const Avatarmessage = document.getElementById("avatar");
const messagesDiv = document.getElementById("messages");
const messageInput = document.getElementById("message-input");
const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", () => {
	const name = nameInput.value;
	const avatar = Avatarmessage.value;
	const message = messageInput.value;
	const messageElement = document.createElement("div");
	messageElement.textContent = name + " " + avatar + " " + message;
	messagesDiv.appendChild(messageElement);
	messageInput.value = "";
	Avatarmessage.value = "";
	nameInput.value = "";
});
