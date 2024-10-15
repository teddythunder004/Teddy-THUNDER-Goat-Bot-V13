module.exports = {
	config: {
			name: "salut",
			version: "1.0",
			author: "Messie osango",
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
	if (event.body && event.body.toLowerCase() == "salut") return message.reply("SALUT QUE PUIS-JE FAIRE POUR TOI EN CETTE JOURNÉE MAGNIFIQUE ?");
}
};
