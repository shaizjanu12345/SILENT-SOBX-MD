const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nyQCmRYJ#NCGHMqW7sXEFkiELwJ6SnLlnj8ncQM1pjZXolq8K1Vg",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "𝒀𝑶𝑼𝑹 𝑭𝑨𝑻𝑯𝑬𝑹 𝑨𝑹𝑴𝑨𝑵𝑶 𝑰𝑵𝑺𝑰𝑫𝑬 𝑰𝑺 𝑽𝑬𝑹𝒀 𝑩𝑼𝑺𝒀 𝑾𝑰𝑻𝑯 𝒀𝑶𝑼𝑹 𝑩𝑨𝑱𝑰 𝑮𝑨𝑵𝑫𝑶 𝑨𝑼𝑻𝑶 𝑹𝑬𝑷𝑳𝒀 𝑯𝑨𝑰 𝑴𝑰𝑵𝑫 𝑵𝑨𝑨𝑯 𝑲𝑨𝑹𝑵𝑨💪👿",
ALIVE_IMG: process.env.ALIVE_IMG || "https://telegra.ph/file/2a06381b260c3f096a612.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HII KUTI KE BACHY GANDO IM ONLINE I'M SILENT-SOBX-MD WHATSAPP BOT 😊♻️",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "true",
BOT_NAME: process.env.BOT_NAME || "𝐀𝐑𝐌𝐀𝐍𝐎 𝐈𝐍𝐒𝐈𝐃𝐄",
};
