const Discord = require('discord.js')
const client = new Discord.Client();
const PREFIX = "!"
NotOn = "@here"
PCC = 0
PCV = 0

client.on('ready', () =>{
   console.log('Time for DND');
   client.user.setActivity('Dungeoning those Dragons')
})

client.on("message", message => {
            
    
        
        
    let args = message.content.substring(PREFIX.length).split(" ");
   
       switch(args[0]){
   
           case 'd8': 
           ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           rolld8 = Math.floor((Math.random() *8) + 1);
           message.channel.send(rolld8)
           }
           break;
           case 'd20': 
           
           ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           
           rolld20IG = Math.floor((Math.random() *20) + 1);
           rolld20 = rolld20IG + 1
           if (rolld20 > 19) {
            message.channel.send(rolld20)
            message.channel.send ("Nat 20! Nice!");
           }
           else {
                message.channel.send(rolld20)
         }
         }
            break;
            
            case 'd12':
               ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) { 
           rolld12 = Math.floor((Math.random() *12) + 1);
           message.channel.send (rolld12)
           }
           break;
           
           case 'd6': 
           ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           rolld6 = Math.floor((Math.random() *6) + 1);
           message.channel.send (rolld6)
           }
            break;
            case 'd4': 
            ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           rolld4 = Math.floor((Math.random() *4) + 1);
           message.channel.send (rolld4)
           }
            break;
            case 'd10': 
            ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
            rolld10 = Math.floor((Math.random() *10) + 1);
            message.channel.send (rolld10)
           }
            break;
            
            case 'GetOn': 
           
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)
            message.channel.send (NotOn)


            
             
            


            case 'roll':
               
            if (args[2]) {
            TTR = (args[1]) 
               if (TTR < 16) {
                 WTR = (args[2])
                  RWTR = WTR.substring(1)
                     if (RWTR < 100) {
                       PRolled = Math.floor((Math.random() *RWTR) + 1);
                        message.channel.send(PRolled)
                           if (TTR > 99); {
                           }  for (let  Lettuce = 1; Lettuce < TTR; Lettuce++) {
                                 RWTR = WTR.substring(1)
                                 Rolled = Math.floor((Math.random() *RWTR) + 1);
                              }   message.channel.send(Rolled)
                     
                    } else if (RWTR > 100) {message.channel.send ("Sorry, you an only roll up to a d100, this is to prevent spam and my computer from exploding")}        
            
               } else if (TTR > 14) {message.channel.send ("Sorry, you an only roll up to 15 dice at a time, this is to prevent spam and my computer from exploding")}
         
            }
            break;         
            

}})


client.login('ODAxNDgzODI4ODU3Mjc0Mzc4.YAhV-w.pOcIAkbiUdA4tmZRoEVp3DERvSI');