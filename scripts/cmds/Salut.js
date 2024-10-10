module.exports = {
	config: {
			name: "salut",
			version: "1.0",
			author: "Shibai Otsutsuki",
			countDown: 5,
			role: 0,
			shortDescription: "sarcasm",
			longDescription: "sarcasm",
			category: "reply",
	},
onStart: async function(){}, 
onChat: async function({
	event,
	message,
	getLang
}) {
	if (event.body && event.body.toLowerCase() == "salut") return message.reply("Salut humain! comment tu vas écrit #shibai pour que je t'ajoute dans mon groupe et n'oublie pas que Shibai Otsutsuki es le meilleur 😉");
}
};
