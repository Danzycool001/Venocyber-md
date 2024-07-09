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
global.sudo = process.env.SUDO || "2349135694776";
global.owner = process.env.OWNER_NUMBER || "2348069374767";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU1DWFNZZGs4NjVzVzRUd01id29VaDlUZjZPV00wd3RXYjNpU0VPUEJudz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT1pUdU9FbjF2Vmk0S0JaV29YRzJYNnBydWt4YzA2R2tHSW9VNU53aGVSWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4SWx5b1Ira3FjL3AzSGNqdy9ZOU53QmhYYkwxWUNjd3FnaG1LaVFscjE0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjK0pSamZpc1FueFJ3M3BCdVFFdXBiK1RvVGNFWGw1Y3A4MFJESVVud2w4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdPYURYNWwrRUlMd1FXM0lzZlYzZEJrUmpWTTUyanNzZU9NQ0kxRkhiMUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpmQ3hhWG5UREZzNXA0c3JtSDRFa1RyL3ZIK2R5M0JkbHVSN0g4SG8zaTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOE5mcFpEMERrOGwwZ1NSSjdHRjBxaEJJWHp5bHgrYk9XK0xrcDRFOE1XQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3hoTTdaSVBGekVRU205cjUwYmQ4Y0FHd2QxU09DdTMxVjVQOVpnbU5CRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBxenJnbk5rS05SRFRKaVBFT3lzUms5L21ZT2pzUWNNWXpnc2x1SmNqVy9vVDRWNk1Ya0t5aHdyY2F1MDRnU2llQWR2Vmdqb28rNHJsdXhQQm9JYUFnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQ2LCJhZHZTZWNyZXRLZXkiOiJxYzNneFA5OHlNTDNOUS9VQmxDYWkzR3dDTUNmajdWVFp1K2hKclpyamdFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiIwUzhRLS1UeFFqR1QzWEVJbDcxUFFnIiwicGhvbmVJZCI6ImFiNWMwYmQ2LTEyMTctNGRkOS1iNGUxLTZlNGU2ZGFjYTFmNyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxbmV6NThRWWJCMHZ2VzRBRzhjdmJ5bXhkU0U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0R4UTAraytud04xcGp6dkN3dzVtTXB2QWlJPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRDMjI0NjNBIiwibWUiOnsiaWQiOiIyMzQ4MDY5Mzc0NzY3OjMzQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOaWRqYzBCRUk3UnRyUUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJveWpVemtYZ2w3ekQrR2JqSFJacmRVbldVZEMwWUVRRG5NTUhTVkVvYzFjPSIsImFjY291bnRTaWduYXR1cmUiOiI2VkZ5NHY0MzRlbDhybEJqTDY4UjlxY3I1OXBWVkJrVDJLeGcrTHNLbU1VSThPNnhndWFlZW9JYTVVTm42YmRRQ2VWRWdSeERqdFVlcmpoMGNpVFlDZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoickNOWXVoaW04Ymw2WmY3bllWbjVWOWQ0UW5SZWVlem05K1dIek95UFNJSGVoSlpnSE5reUpkWXVJTS9iNjZTNEk1SkNhSFBrS3hHWlY3UHJGdkdIQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ4MDY5Mzc0NzY3OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFNbzFNNUY0SmU4dy9obTR4MFdhM1ZKMWxIUXRHQkVBNXpEQjBsUktITlgifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjA1NTk3NzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRmlhIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is 𝐕𝐄𝐍𝐎𝐂𝐘𝐁𝐄𝐑 𝐌𝐃",
  author: process.env.PACK_AUTHER || "✞ঔৣŦℨĐĐƳঔৣ✞",
  packname: process.env.PACK_NAME || "✞ঔৣŦℨĐĐƳঔৣ✞",
  botname: process.env.BOT_NAME || "✞ঔৣŦℨĐĐƳঔৣ✞",
  ownername: process.env.OWNER_NAME || "✞ঔৣŦℨĐĐƳঔৣ✞",
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
