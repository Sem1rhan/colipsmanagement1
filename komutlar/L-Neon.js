const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(new Discord.MessageEmbed()
        .setColor("BLACK")
        .setDescription(
          `<a:unlem:816363628282249266> **Yanlış Kullanım** \n Doğru Kullanım: \`sn!neon [Yazı]\``
        )
    );
  const linqo = `https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=neon-logo&text=${yazi}`
  .replace(' ', '+')

  
  const narcosembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('neonlu Logo Oluşturuldu')
  message.channel.send(narcosembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'neon',
    description: 'Yazdığınız yazıyı neon logoya değiştirir.',
    usage: 'neon'
}