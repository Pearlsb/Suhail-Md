const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_57_05_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOCxcbiAgICAgICAgNTUsXG4gICAgICAgIDI3LFxuICAgICAgICA4NSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMzksXG4gICAgICAgIDc2LFxuICAgICAgICA5MixcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjAsXG4gICAgICAgIDU2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDY2LFxuICAgICAgICAzOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTczLFxuICAgICAgICA1NyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2NSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzYsXG4gICAgICAgIDcyLFxuICAgICAgICA2MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MixcbiAgICAgICAgNCxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjE1LFxuICAgICAgICA3NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjM3LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2LFxuICAgICAgICAzNixcbiAgICAgICAgMTgzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjU1LFxuICAgICAgICA4LFxuICAgICAgICA5OCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzUsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTg4LFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA4MixcbiAgICAgICAgMTk0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNixcbiAgICAgICAgMCxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5NixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA5OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA5MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzksXG4gICAgICAgIDY2LFxuICAgICAgICA2MixcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDczLFxuICAgICAgICAyMDgsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDgyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE0LFxuICAgICAgICA2MCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTAxLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0MyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6N0lRajI0MzI0dnJ4MHAzRWo2Y1l0VnUyYTR6WnV5VUVoTTV6aDFySmJBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJQUzJoUjBHUVR3U3pBSjNDaFZaelRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjAwN2I0ZjNlLWQ4MmQtNGQ4Ni05MmNjLTIzMDY5Mjc1MjY3ZlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA1NCxcbiAgICAgIDIxMyxcbiAgICAgIDIwMCxcbiAgICAgIDQ5LFxuICAgICAgMjUsXG4gICAgICAxMTksXG4gICAgICAxMDksXG4gICAgICAyMjQsXG4gICAgICAxMTUsXG4gICAgICA2LFxuICAgICAgOTcsXG4gICAgICAxMDMsXG4gICAgICAxOTUsXG4gICAgICA5LFxuICAgICAgMjI3LFxuICAgICAgMTE2LFxuICAgICAgNjUsXG4gICAgICAxOTgsXG4gICAgICAxMzgsXG4gICAgICAxMDJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI3LFxuICAgICAgMTM3LFxuICAgICAgMTg0LFxuICAgICAgMTUsXG4gICAgICAyMixcbiAgICAgIDIxMSxcbiAgICAgIDI0OCxcbiAgICAgIDI0OCxcbiAgICAgIDE5OCxcbiAgICAgIDIxOSxcbiAgICAgIDEzMyxcbiAgICAgIDQ0LFxuICAgICAgNixcbiAgICAgIDgyLFxuICAgICAgMjQwLFxuICAgICAgMTUyLFxuICAgICAgMTIsXG4gICAgICA3MyxcbiAgICAgIDE1OCxcbiAgICAgIDI0OVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJMM0dWMk5EOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA3MzI5NjQ4MzozOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQyNTcxNDgxNzI3MTE5OjM4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0ppUTk1QU1FSmVsMExJR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL1JnT1hURVEraUhNY1RLbEgvYzJ4V1JqeEhxZk1GWktIOFFRNTgzRzFtRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJGZCtNUXU5M3MxdEV4bzJzVTZzem9EWW15UjY1T2pySmtqc1JQTDUxZGhPTU1tMXlZcXJ5M3crNld4WWtvYU5MTWdCc1k4MkZSYmVac3p5QUo1YkVnUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJaaGRPMVpJM1RuMll2ZTZPK0NXZVR4a1RrenpuYzMvZUlqMXJTcExTOUN6U08vSmdweExid3dacGU3QUtxckZLVzZFcE9YSVdiUW5aUDNaMC93RkdBUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDczMjk2NDgzOjM4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDk3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjc4NTgxOVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
