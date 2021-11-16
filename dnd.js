const Discord = require('discord.js')
const client = new Discord.Client({ intents: ['GUILDS', 'GUILD_MESSAGES']});
const PREFIX = "!"
var profile = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var MHP = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var HP = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var Init = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var InitS = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var InitID = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var InitIDI = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var PName = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
CS = 1
ACTC = 1
TDR = 0
CHPP = 1
AIDS = 1






client.on('ready', () =>{
   console.log('Time for DND');
   client.user.setActivity('!help for Help!', { type: 'PLAYING' })
})

client.on("messageCreate", message => {
   serverName = message.guild.name
    
    
            
    
        
        
    let args = message.content.substring(PREFIX.length).split(" ");
   
       switch(args[0]){
   


         case 'help':
         message.channel.send("Hello! Thanks for using DND Bot! Our commands are as follows")
         message.channel.send("Dice Commands: These commands are 1d20,1d12,1d10,1d8,1d6 and 1d4. These commands can also be use to roll more than one dice, for example, 3d6 would roll 3 d6's, and this works for any dice and any number up to 9")
         message.channel.send("!roll command: This command rolls specific dice with specific number, for example, you would do !roll 1 d18 if you need a d18 for whatever reason, this works with any amount of dice up to 15, and any number below 100")
         message.channel.send("!CHPP: Creates a Health Point Profile, automatically linked with your user ID, this command allows for use of DND bots HP tracking capabilities!")
         message.channel.send("!MHP: Sets a max HP for your Health Point Profile, for example, !MHP 100, would set your max HP to 100")
         message.channel.send("!AHP: Adds to your curent HP, for example, !AHP 10 would add 10 HP to your current HP total")
         message.channel.send("!DMG: SUbtracts from your current HP, for example, !DMG 10 would take 10 away from your current HP total")

         
         message.channel.send("Once again, Thanks for using DND bot, if you would like to give feedback, DM me at @cash#2258, if you would like to view this code, go to https://github.com/SomeNerdWithAPC/Dice-Bot")
         //If you came here from the !help message, thank you for caring so much about my crappy discord bot!

         break;
           case 'd8': 
           TDR = TDR - TDR
           ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           rolld8 = Math.floor((Math.random() *8) + 1);
           TDR = TDR + rolld8
           message.reply(rolld8.toString())
           }
           message.reply('Total: ' + TDR.toString())
           break;
           case 'd20': 
           TDR = TDR - TDR
           ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           
           rolld20IG = Math.floor((Math.random() *20) + 1);
           rolld20 = rolld20IG + 0
           TDR = TDR + rolld20
           if (rolld20 > 19) {
            message.reply("Nat 20! Nice!");
           }
           else {
                message.reply(rolld20.toString())
         }
         }
         if (ATTRD > 1) {
         message.reply('Total: ' + TDR.toString())
         }
         
            break;
            
            case 'd12':
               ATTRD = message.content.charAt(0)
               TDR = TDR - TDR
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) { 
           rolld12 = Math.floor((Math.random() *12) + 1);
           TDR = TDR + rolld12
           message.reply(rolld12.toString())
           }
           if (ATTRD > 1) {
           message.reply('Total: ' + TDR.toString())
           }
           break;
           
           case 'd6': 
           TDR = TDR - TDR
           ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           rolld6 = Math.floor((Math.random() *6) + 1);
           TDR = TDR + rolld6
           message.reply(rolld6.toString())
           }
           if (ATTRD > 1) {
           message.reply('Total: ' + TDR.toString())
           }
            break;
            case 'd4': 
            TDR = TDR - TDR
            ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
           rolld4 = Math.floor((Math.random() *4) + 1);
           TDR = TDR + rolld4
           message.reply(rolld4.toString())
           }
           if (ATTRD > 1) {
           message.reply('Total: ' + TDR.toString())
           }
            break;
            case 'd10': 
            TDR = TDR - TDR
            ATTRD = message.content.charAt(0)
           for (let  Lettuce = 0; Lettuce < ATTRD; Lettuce++) {
            rolld10 = Math.floor((Math.random() *10) + 1);
            TDR = TDR + rolld10
            message.reply(rolld10.toString())
           }
           if (ATTRD > 1) {
           message.reply('Total: ' + TDR.toString())
           }
            break;


            //case 'roll':
            message.reply("Sorry, the !roll command is currentl disabled due to a bug, Sorry!")
            break;
            case 'roll':
               
            if (args[2]) {
            TTR = (args[1]) 
               if (TTR < 16) {
                 WTR = (args[2])
                  RWTR = WTR.substring(1)
                     if (RWTR < 100) {
                       PRolled = Math.floor((Math.random() *RWTR) + 1);
                        message.reply(PRolled.toString())
                           if (TTR > 99); {
                           }  for (let  Lettuce = 1; Lettuce < TTR; Lettuce++) {
                                 RWTR = WTR.substring(1)
                                 BRolled = Math.floor((Math.random() *RWTR) + 1);
                                 message.reply(BRolled.toString())
                              }  
                     
                    } else if (RWTR > 100) {message.reply("Sorry, you an only roll up to a d100, this is to prevent spam and my computer from exploding")}        
            
               } else if (TTR > 15) {message.reply("Sorry, you an only roll up to 15 dice at a time, this is to prevent spam and my computer from exploding")}
         
            }
            break;        
            
            case 'Cahp':
               CS = 1
               
               for (let  Lettuce = 1; Lettuce < 15; Lettuce++) {
                  console.log(profile[CS])
                  if (profile[CS] != 0) {
                    CS = CS + 1
                    
                  } else {
                     profile[CS] = message.author.id 
                     
                     message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                     break;
                  }

               }
         
                          
            break;
            case 'CHPP':
               if (profile[1] != 0) {
                  
               } else {
                  profile[1] = message.author.id 
                  
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }

               if (profile[2] != 0) {
                  
               } else {
                  profile[2] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[3] != 0) {
                  
               } else {
                  profile[3] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[4] != 0) {
                  
               } else {
                  profile[4] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[5] != 0) {
                  
               } else {
                  profile[5] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[6] != 0) {
                  
               } else {
                  profile[6] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[7] != 0) {
                  
               } else {
                  profile[7] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[8] != 0) {
                  
               } else {
                  profile[8] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[9] != 0) {
                  
               } else {
                  profile[9] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[10] != 0) {
                  
               } else {
                  profile[10] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[11] != 0) {
                  
               } else {
                  profile[11] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[12] != 0) {
                  
               } else {
                  profile[12] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[13] != 0) {
                  
               } else {
                  profile[13] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }
               if (profile[14] != 0) {
                  
               } else {
                  profile[14] = message.author.id
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break; 
               }
               if (profile[15] != 0) {
                  
               } else {
                  profile[15] = message.author.id 
                  message.reply('Health Point Profile Created, Use !MHP to set your max HP')
                  break;
               }         
               
               
                  
           

            break;
            
            case 'MHP':
            if (args[1]) {
               CS = 1
               console.log(CS)
            for (let  Lettuce = 1; Lettuce < 15; Lettuce++) {
               console.log("Loop" + CS)
            if (message.author.id != profile[CS]) {
               
               CS = CS + 1
               

            } else {
               console.log("Else " + CS)
               MHP[CS] = args[1]
               HP[CS] = args[1]
               
               message.reply("Your max HP is now " + MHP[CS])
               console.log("MHP")
               CS = 1
               break;
            }
            }
            }
            console.log("MHP")
            break;
            case 'DMG':
               CS = 1
               if (args[1]) {
               for (let  Lettuce = 1; Lettuce < 15; Lettuce++) {
                  if (profile[CS] != message.author.id) {
                  
                     CS = CS + 1
                  } else { 
                     console.log(message.author.tag + " " +  message.author.id)
                  console.log(CS)
                  HP[CS] =  HP[CS] - args[1]
                  if ( HP[CS] < 0) {HP[CS] = 0} 
                  if (HP[CS] > MHP[CS]) {HP[CS] = MHP[CS]} 
                  message.reply("Your current HP is now " + HP[CS] + " out of " + MHP[CS])
                  console.log("DMG")
                  
                  break;
               }
               }
            } else {message.reply("Please enter how much Damage to deal")}
            console.log("DMG")
            break;
            
            case 'AHP':
               CS = 1
               if (args[1]) {
               for (let  Lettuce = 1; Lettuce < 15; Lettuce++) {
                  if (profile[CS] != message.author.id) {
                     CS = CS + 1
               } else {console.log(args[1])
                  var HPC = args[1]
               
               HP[CS] = HP[CS] - ("-" + HPC)
               if (HP[CS] > MHP[CS]) {HP[CS] = MHP[CS]} 
               if ( HP[CS] < 0) {HP[CS] = 0} 
               message.reply("Your current HP is now " + HP[CS] + " out of " + MHP[CS])
               console.log("AHP")
               break;}
            }
         } else {message.reply("Please input how much HP you'd like to heal")}
         

            case 'HP':
                  CS = 1
                  
               for (let  Lettuce = 1; Lettuce < 15; Lettuce++) {
                  if (profile[CS] != message.author.id) {
                     CS = CS + 1
      
                  } else {
                     
                     {
                     message.reply("You have " + HP[CS] + " Health Points out of a maximum of " + MHP[CS])
                     break;
                  }
                  }
                  }
               
                  break;

                  
            case 'VHPP':
               console.log("Obn")
               console.log(profile[1])
               console.log(profile[2])
               console.log(profile[3])
               console.log(profile[4])
               console.log(profile[5])
               console.log(profile[6])
               console.log(profile[7])
               console.log(profile[8])
               console.log(profile[9])
               console.log(profile[10])
               console.log(profile[11])
               console.log(profile[12])
               console.log(profile[13])
               console.log(profile[14])
               console.log(profile[15])
               break;
            case 'VAHPI':
            console.log(profile[1])
            console.log(profile[2])
            console.log(profile[3])
            console.log(profile[4])
            console.log(profile[5])
            console.log(profile[6])
            console.log(profile[7])
            console.log(profile[8])
            console.log(profile[9])
            console.log(profile[10])
            console.log(profile[11])
            console.log(profile[12])
            console.log(profile[13])
            console.log(profile[14])
            console.log(profile[15])
            console.log(MHP[1])
            console.log(MHP[2])
            console.log(MHP[3])
            console.log(MHP[4])
            console.log(MHP[5])
            console.log(MHP[6])
            console.log(MHP[7])
            console.log(MHP[8])
            console.log(MHP[9])
            console.log(MHP[10])
            console.log(MHP[11])
            console.log(MHP[12])
            console.log(MHP[13])
            console.log(MHP[14])
            console.log(MHP[15])

            break;
         
       }
})
client.login('Insert Token Here');
