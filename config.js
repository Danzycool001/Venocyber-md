//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "theodoreogbeche1@gmail.com";
global.location = "Lagos.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2349135694776";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUxNTDBmZTJyWGpER3dkOUxoR09lWlU3K0hxWnM5YklZU0tQOHF6NjVrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmh6SkRiL1lCWllORmQ4L1FMVVBQdVVoSDByZ2JDVE5IUWU2bXljK25IMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RnA1bEROaXgrMTFnclVmcUpSREhrTjNpaTJLWDFiNzhzd3VuNzFsbW1NPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoeFFZb0ZCUkFKNUJTOGZuRWJIc3doS1ZJenNHRC9FUEVjaThoWnptK0QwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVPOHI4Wk5jYXFEak9OcDNDR1c4eGNzL2lqU0NDTjUzb1dLdE1iK2dBbmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1WTkNINm82ZWhuS3hMNlRjZWw2YnI1bFM0U1dMNDNDTVpUL2l6VDJRRmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUJoUTlmcFoveTV0ZjYvWDU4bVNWUXhaTkRmWlo4d2M0UmpGQXB1ZHhHMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk16ZFFLbFkyZFBGeElId1BGZUNpUFhOQndZZkpVY1lGaDZuOVF2UDQzQT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlaYnB6Z1ZmTWtJTm1yaGlaaGtUTXR1REI4aDJsRjNVb050emJMdkoyQ29YMkVNbStrVmE4dnh4VFAxVFVLeUFCZlRJK01tUXNnaCswZGc3VnVPRkJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJkVXMzakJWQndqNzNyeFhSNHRhdlp4YkZtQlNDQlQ2cFhRMHRPeVlsbmw0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJRUlRzemYxMlF4U2c1NDRtaTFzdjN3IiwicGhvbmVJZCI6ImQ2Y2M5MTYxLTdlMzAtNDExNi1iY2Q3LTk3N2IyMmM2OTY5YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1VDM1OTRWazA2YlJEM1QyL2wzRFNkMVRsZ1k9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWmZuUGxsd1g5QndhQTFiNi9uMTRLZkpOSzdJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjdOOE1DM0tKIiwibWUiOnsiaWQiOiIyMzQ4MDY5Mzc0NzY3OjMwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOaWRqYzBCRUtXNnBiUUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJveWpVemtYZ2w3ekQrR2JqSFJacmRVbldVZEMwWUVRRG5NTUhTVkVvYzFjPSIsImFjY291bnRTaWduYXR1cmUiOiJRcTBXQ2M4ajJKWjkybjJMa05rRDVub1ZVcEhQc1cvY3hnYk9obHZSMVpmVUI1SVpUZUFJeGxSYVkxd3NmQ2dISVNCZzZHRVlVMUpsbDhUUXhweitDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoia0o1Z3cxMnRLMEhZNkx6RERHRFlWVmpkUUI2bVh2VjdvTEE0WWRoMFI0M1JoNzBHdTRZR3dPUXI5d2U5RW45aVNCK09ESnZqV0JuY2JlUWRoYmJ4QlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDY5Mzc0NzY3OjMwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFNbzFNNUY0SmU4dy9obTR4MFdhM1ZKMWxIUXRHQkVBNXpEQjBsUktITlgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyNzgzMjN9"
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "© Fucus ©~💰🏁",
  packname: process.env.PACK_NAME || "© Fucus ©~💰🏁",
  botname: process.env.BOT_NAME || "© Fucus ©~💰🏁",
  ownername: process.env.OWNER_NAME || "© Fucus ©~💰🏁",
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
