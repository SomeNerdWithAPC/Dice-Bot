const Discord = require('discord.js')
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});
const PREFIX = "!"


client.on('ready', () =>{
   console.log('Time for DND');
   client.user.setActivity('Dungeoning those dragons', { type: 'PLAYING' })
})

client.on("messageCreate", message => {

    let args = message.content.substring(PREFIX.length).split(" ");
   
       switch(args[0]){
   
           case 'd8': 
           ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           rolld8 = Math.floor((Math.random() *8) + 1);
           message.reply(rolld8.toString())
           }
           break;
           case 'd20': 
           
           ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           
           rolld20IG = Math.floor((Math.random() *20) + 1);
           rolld20 = rolld20IG + 1
           if (rolld20 > 19) {
            message.reply("Nat 20! Nice!");
           }
           else {
                message.reply(rolld20.toString())
         }
         }
            break;
            
            case 'd12':
               ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) { 
           rolld12 = Math.floor((Math.random() *12) + 1);
           message.reply(rolld12.toString())
           }
           break;
           
           case 'd6': 
           ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           rolld6 = Math.floor((Math.random() *6) + 1);
           message.reply(rolld6.toString())
           }
            break;
            case 'd4': 
            ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           rolld4 = Math.floor((Math.random() *4) + 1);
           message.reply(rolld4.toString())
           }
            break;
            case 'd10': 
            ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
            rolld10 = Math.floor((Math.random() *10) + 1);
            message.reply(rolld10.toString())
           }
            break;
//this command has been removed, If you'd like to complain about this decision, DM me on discord @cash#2258


            case 'roll':
               
            if (args[2]) {
            TTR = (args[1]) 
               if (TTR < 16) {
                 WTR = (args[2])
                  RWTR = WTR.substring(1)
                     if (RWTR < 100) {
                       PRolled = Math.floor((Math.random() *RWTR) + 1);
                        message.channel.send(PRolled.toString())
                           if (TTR > 99); {
                           }  for (let  Lettuce = 1; Lettuce < TTR; Lettuce++) {
                                 RWTR = WTR.substring(1)
                                 CRolled = Math.floor((Math.random() *RWTR) + 1);
                              }   message.reply(CRolled.toString())
                     
                    } else if (RWTR > 100) {message.reply("Sorry, you an only roll up to a d100, this is to prevent spam and my computer from exploding")}        
            
               } else if (TTR > 15) {message.reply("Sorry, you an only roll up to 15 dice at a time, this is to prevent spam and my computer from exploding")}
         
            }
            break;         
            

}})


client.login(No);
