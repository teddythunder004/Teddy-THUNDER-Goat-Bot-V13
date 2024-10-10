module.exports = {
	config: {
			name: "publicité",
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
	if (event.body && event.body.toLowerCase() == "publicité") return message.reply("Salut! je me nomme Shibai Otsutsuki c'est moi le Dieu des Otsutsuki alias le Datara Naimo Kami Deidarabochi ☠️ dit G.A.L.V.A.T.R.O.N pour me contacter veillez m'écrire sur Whatsapp ( +2250594685427 ) où veillez m'appeler au ( +2250767868530 ) où encore m'écrire sur ma page Facebook: ( https://www.facebook.com/profile.php?id=61561751986955 ) merci!");
}
};
