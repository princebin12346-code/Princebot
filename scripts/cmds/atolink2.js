module.exports = {
  config: {
    name: "autolinks2",
    version: "1.0",
    author: "SaGor",
    countDown: 3,
    role: 0,
    shortDescription: "Auto reply links by keywords",
    longDescription: "Sends group/page/text-group links when users type specific keywords",
    category: "utility",
  },

  onStart: async function () {},

  onChat: async function ({ api, event }) {
    const msg = event.body?.toLowerCase();
    if (!msg) return;

    // -----------------------------  
    // এখানে আপনার লিঙ্কগুলো সেট করুন  
    // -----------------------------
    const groupLink = "https://facebook.com/groups/islamik.life1/";
    const pageLink = "https://www.facebook.com/Islamic.Fundation";
    const textGroupLink = "https://m.me/j/Abawo-69GGiHYihE/";

    // -----------------------------
    // নির্দিষ্ট শব্দ → নির্দিষ্ট লিংক
    // -----------------------------
    if (msg.includes("group")) {
      return api.sendMessage(
        `📌 আপনার গ্রুপ লিংক:\n${groupLink}`,
        event.threadID
      );
    }

    if (msg.includes("page")) {
      return api.sendMessage(
        `📌 আপনার পেজ লিংক:\n${pageLink}`,
        event.threadID
      );
    }

    if (msg.includes("text group") || msg.includes("textgroup")) {
      return api.sendMessage(
        `📝 আপনার টেক্সট গ্রুপ লিংক:\n${textGroupLink}`,
        event.threadID
      );
    }
  }
};
