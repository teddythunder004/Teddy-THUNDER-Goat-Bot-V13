#cmd install upt.js module.exports = {
  config: {
    name: "upt",
    aliases: ["up"],
    version: "1.0",
    author: "Ronald",
    role: 2,
    shortDescription: {
      en: "Displays the total number of users of the bot and check uptime "
    },
    longDescription: {
      en: "Displays the total number of users who have interacted with the bot and check uptime."
    },
    category: "system",
    guide: {
      en: "Use {p}totalusers to display the total number of users of the bot and check uptime."
    }
  },
  onStart: async function ({ api, event, args, usersData, threadsData }) {
    try {
      const allUsers = await usersData.getAll();
      const allThreads = await threadsData.getAll();
      const uptime = process.uptime();
      
const days = 
Math.floor(uptime / (3600 * 24));
      const hours = Math.floor(uptime / 3600);
      const minutes = Math.floor((uptime % 3600) / 60);
      const seconds = Math.floor(uptime % 60);
      
      const uptimeString = `${days} : ${hours} : ${minutes} : ${seconds}`;
      
      api.sendMessage(`[⌛] Shibai Sensei le temps que j'ai duré est:\n\n✪➩ ${uptimeString}\n
[👨🏽‍🦱] Shibai Sensei le nombre d'utilisateurs que j'ai répondu sont:\n\n✪➩ ${allUsers.length}\n
[💬] Shibai Sensei le nombre du groupe que j'ai répondu sont:\n\n✪➩ ${allThreads.length}`, event.threadID);
    } catch (error) {
      console.error(error);
      api.sendMessage("An error occurred while retrieving data.", event.threadID);
    }
  }
};
