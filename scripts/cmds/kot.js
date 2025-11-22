module.exports = {
  config: {
    name: "mentionreply",
    version: "1.0",
    author: "SaGor",
    countDown: 3,
    role: 0,
    shortDescription: {
      en: "Reply when a specific ID is mentioned"
    },
    description: {
      en: "Bot will reply with a custom message when a specific user ID is mentioned"
    },
    category: "utility",
    guide: {
      en: "{pn} (auto reply on specific ID mention)"
    }
  },

  onStart: async function ({ message }) {
    return message.reply("Mention reply system activated!");
  },

  onChat: async function ({ message, event }) {

    // 🐐 এখানে আপনি আপনার TARGET IDS সেট করবেন
    const targetList = {
      "61574843383066": "মুক্তা ম্যাম সুদু আমার কেউ নজর দিবিনা👿",
      "10009876543211756": "🔥 ভাইকে ডাকছেন? উনি এখন ব্যস্ত! 🤭",
      "61556888888888657": "😈 তার কথা বললেই আমি হাজির!"
    };

    // message তে mention আছে কিনা দেখুন
    if (!event.mentions || Object.keys(event.mentions).length === 0) return;

    // প্রতিটি mention চেক
    for (const uid of Object.keys(event.mentions)) {
      if (targetList[uid]) {
        return message.reply(targetList[uid]);  
      }
    }
  }
};
