const fs = require('fs')
const chalk = require('chalk')

// self or public
global.self = false //jadiin true klo gk mau fitur bot lu di pke sama org lain

// setting
global.ownername ="Risky"
global.ownernumber = "6289531724196"
global.botname = "Risky-Bot"
global.thumbnail = fs.readFileSync("./image/Riych.jpg") //sesuaikan dengan nama foto
global.background = "https://telegra.ph/file/d4c05638fa7886a1d8060.jpg"
global.lolkey = 'RIFQIBOTZ' //apikey
global.zenzkey = '8423e19c13' // Apikey
global.limit = {
		useri:150,
		premi:1000
	}
global.session_name = "session.json"


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
