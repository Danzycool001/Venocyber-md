//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "theodoreogbeche1@gmail.com";
global.location = "Nigeria.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349134429734";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/3keql8";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0p2ak1LVGJWS3ZLVGhPNnBpVEVJUkxNbDhuclkzUnIwd1REZXFqY04zST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMmRMNXFtMGJqdGg5QXFVOGloNVJRalVEMXFBYXg0Sk1IeWVOaXlDb1BSWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RWx0MlA1V251cVNZU3BEU3BJQ3VOV1VYM1BvcUEvdVlZMVF0akhxL2tFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJZRERIQ2lDcU5iWktPNmVRbG9CMVh0OTBkbFY5VW92LzJMdE5PakhXd2hJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIOEhLMVNlUWpReXdYZGM5VWVsRGlqTzZUTWtQUy8yZjVIa3JSR3kzRTQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdpQTB5VnkvcUxaeDY5NVBjdkJxN0s0Q0NYWXdjdUNNU1A3a3hUV1BURHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMElGdktNUDdUeDZXUW1jb1gydnN6RFlsTkNhZ3NXWXFBandNY3p5S3hFYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYklZTmh0d2czN2JjREx3M1JYK2NsYmtlblUrbi91ZmFNdWZuQlBuVGRCST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpKR3EycTh5OXVoSWRqeGQ0NnJzMDJ0amRQdEF2OWkxdEpsOEozSmRJa25CVUdtZW1obGVPZVljT292Y1hONFVCUFdZYTNsMHREYW15REdiR3h6UkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjcsImFkdlNlY3JldEtleSI6IlZ2WlFKbFlGK2hKYmZrRTROY2pNUk42emJhRXliNXBBaHRyc1huTUI5bUE9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImQzOEhOajVjUTYyWnJKTHlRb3FCOFEiLCJwaG9uZUlkIjoiYTAzN2NhYWMtODc4Ni00Y2I4LWJlNmEtMmFiNTk2MmEwMzA5IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImE5Q0hRamROUkN3Z0NuV1N5UWkyeDZqYUh4UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtMVZFN0ZraGdJdm85QWozM3pJSVJ6aXZZS009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiRzJOSzdENlQiLCJtZSI6eyJpZCI6IjIzNDkxMzQ0Mjk3MzQ6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCT09NTE9SRCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSnEvbDBzUWdvYnhzd1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaEIycTVFbm01cENUV0ZTWGxIdUwwcytBTy81dXd6YlBrcDZEdTdadTRXOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRUZSa0FMeTV1ZWlFZGhPYTl3eU1odHJGbVRQUVM0VldnVDk5T25yN1V1b3VzYzVsMDhjS3hERno1emZ0RWhCK1QwdGYyV3hFU0FDaVhuK1c4ZmZWRHc9PSIsImRldmljZVNpZ25hdHVyZSI6IjFqYzQ5T3ZNRXM1Z3J4RFZmRkkrZERSWngxY3p5TVRqYmYzSEpJbHlmaGhpV3I4aUlwMUpYUUYvZnhPbUhzNzh2RnhOa1g0TGUzMTR0NWxTRmRhbUNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0OTEzNDQyOTczNDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQllRZHF1Uko1dWFRazFoVWw1UjdpOUxQZ0R2K2JzTTJ6NUtlZzd1MmJ1RnYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MTk0MTk2NjN9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "Samuel Abatan",
  packname: process.env.PACK_NAME || "Samuel Abatan",
  botname: process.env.BOT_NAME || "Samuel Abatan",
  ownername: process.env.OWNER_NAME || "Samuel Abatan",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-MLNkacQOWsMSwtBZZf0XT3BlbkFJqfgJYOOkiikW5Y4ynpM5",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
