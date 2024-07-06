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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT01RdVBJRVJhVnN6SnBNVzFoMjhYN3ZZNXhOVlM2UWJ0Q0ZacmJRYmRGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUkJPeWsyZFAyYTdzeE0raG1oM1JVdzdUVjFXVHd3VmpMaGRPRVBVSi9GMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyT3VvK0RnM3N1ajNkalJZdzVLRkIrTWxUdlAxN2YzMFhKTkdzSFVFVWxFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkV3BIMXE0RXM1WGpTNjc0T3oralJlNmZGVW1RZWlLY3BKQi8yVXd5cG5zPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRETkY3RVhMckpBMng0NHB1MDArbGc3Q1Y3Z09OZjVvdURJVm5xazFoR2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjV3OHNYbFQzK1dWc3BUUFdCbmtFZk5HenJqN3I1bkVORURuYmRmcXh3UVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUVCc0N2dXlkaDE2QVQwTDE4TEpJV1BibTdZTjhDazJvNXBWbmlBZVVHTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUxHRmpZbFlDcjdPbUN5M2hOa0c3dno2Qm4vWlFGbkVjbGUyTFFPZWMxVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9JZEl2RXJtT0hRK01DckRselk5MEJZbjlHdEQ2blBxb3VpbFl4S2JNZ3ZJVFJDNVF4ekV2dlpYZ1JzdmdHNWN6TnFDcDgra3R0TVdpcGk2VFlZcGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiIvVVRHUU9Ndk5aU2d6MnBCZlJ4am9DNStHRGVDbGZKSUtyUXE1VGp2MEpjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIxVEZRYlJHVVN0R3ZnbFhtcGhrVFdRIiwicGhvbmVJZCI6ImRhOTAxY2Q4LTM0ODMtNDE0Ni1hMmE4LTUxZTY0M2ZhMjk0MyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrdzlIeDM2WEVQeGJuaThWbUs2emlVR3RNUE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNGxsRkt4SVRNKzFxbEdYaUhneXpUZVlpTWFRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJaUFkxMjY0IiwibWUiOnsiaWQiOiIyMzQ5MTM1Njk0Nzc2OjEyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPN05sdWNDRU03bXBiUUdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFMW1MLytVVlp2eDhlSzZzc1F6bk5GclZrc0tlWThOQzVzb29GWVVXNDBBPSIsImFjY291bnRTaWduYXR1cmUiOiJzRUNPYUlGN1QvcC9UVjd0SndKN3hBMHRaaTdmQ2hJWjM1SThjSTFZaHVCMkdMVU1CUHlncFFsdGJ3TUFSdklVU2REUDZNMTN1RnJjZ1g2enNQSFRDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiOFplRHVjZmJTK3kyTXRoTmpJL3VBN1dRSmJPK2liUUpKVEZycW1qOTFSaU5zNUl1Z3FTSTFvM1BBMFdLOThtUDJDWU4ybVpXZTNzOXQ4Y3J0a3FhaUE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTM1Njk0Nzc2OjEyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJOWmkvL2xGV2I4ZkhpdXJMRU01elJhMVpMQ25tUERRdWJLS0JXRkZ1TkEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjAyODM5OTYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSjNrIn0="
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
