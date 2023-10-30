const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

let prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    ` [${moment().format(
      "YYYY-MM-DD HH:mm:ss"
    )}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    ` [${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("dnd");
   client.on('ready', ()=>{
client.channels.get('1149406303022759988').join()
})

  client.user.setActivity(`.yardım | Colips`, { type: "WATCHING" });

  console.log(
    ` [${moment().format("YYYY-MM-DD HH:mm:ss")}] Oyun ismi ayarlandı!`
  );
};
