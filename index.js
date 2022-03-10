/*
~ Script Ori : @ZeeoneOfc
~ Recode : @Riych-Uhuy
~ Bantuan : @Yoga & @Faiz
*/

//---------------------------[ WHATSAPP API ]----------------------------//
require('./settings.js')
const{
WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
mentionedJid,
processTime,
} = require("@adiwajshing/baileys")
//---------------------------[ MODULE EXPORTS ]----------------------------//
const axios = require("axios")
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")  
const crypto = require('crypto')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch');
const ffmpeg = require('fluent-ffmpeg') 
const figlet = require('figlet')
const fs = require('fs')
const gis = require('g-i-s')
const hx = require('hxz-api')
const ms = require('parse-ms')
const moment = require('moment-timezone')
const request = require('request')
const speed = require('performance-now')
const util = require('util')
const yts = require( 'yt-search')
const ytdl = require("ytdl-core")
const zee = require('xfarr-api')
//---------------------------[ LIBARY ]----------------------------//
const { simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/functions')
const { fetchJson, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { yta, ytv} = require('./lib/y2mate')
const simple = require('./lib/simple')
const { uploadImages } = require('./lib/uploadimage')
//---------------------------[ JSON ]----------------------------//
const antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))
const { getRegisterNo, getRegisterName, getRegisterSerial, getRegisterAge, getRegisterTime, getRegisteredRandomId, addRegisteredUser, createSerial, checkRegisteredUser } = require('./database/user/register.js')
const tebakgambar = JSON.parse(fs.readFileSync('./database/game/tebakgambar.json'))
//---------------------------[ FUCTION RPG ]----------------------------//
let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require('./baileys/limit')
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require('./baileys/rpgfunction')
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require('./baileys/lvlfunction')
let balance = JSON.parse(fs.readFileSync('./baileys/data/balance.json'));
let event = JSON.parse(fs.readFileSync('./baileys/data/event.json'));
let prem = JSON.parse(fs.readFileSync('./baileys/data/premium.json'));
let limit = JSON.parse(fs.readFileSync('./baileys/data/limit.json'));
//---------------------------[ DATABASE RPG ]----------------------------//
let _RPG = JSON.parse(fs.readFileSync('./baileys/rpg/inventori.json'))
let _level = JSON.parse(fs.readFileSync('./baileys/rpg/leveluser.json'))
let _petualang = JSON.parse(fs.readFileSync('./baileys/rpg/inventori.json'))
let _healt = JSON.parse(fs.readFileSync('./baileys/rpg/healt.json'))
//---------------------------[ MAINAN HENGKER TZY ]----------------------------//
const { virtex90 } = require('./virtex/virtex90')
const { virtex2 } = require('./virtex/virtex2')
const { virtex3 } = require('./virtex/virtex3')
const { virtex4 } = require('./virtex/virtex4')
const { virtex5 } = require('./virtex/virtex5')
const { virtex6 } = require('./virtex/virtex6')
const { virtex7 } = require('./virtex/virtex7')
const { virtex8 } = require('./virtex/virtex8')
const { virtex9 } = require('./virtex/virtex9')
const { ngazap } = require('./virtex/ngazap')
const { virtag } = require('./virtex/virtag')
const { emoji2 } = require('./virtex/emoji2')
//---------------------------[ BASAH MAS ]----------------------------//
const dtod = "6281575886399@s.whatsapp.net"
const otod = "6281575886399@s.whatsapp.net"
//---------------------------[ SETTING PREMIUM ]----------------------------//
ky_ttt = []
cmhit = []
limitCount = 45
healthCounts = 100
potionawal = 1
//---------------------------[ BUAT MENU NYA ]----------------------------//
const  { ind } = require(`./help`)
lang = ind 
//---------------------------[ TIMES ]----------------------------//
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
//---------------------------[ BASAH MAS ]----------------------------//
module.exports = haruka = async (haruka, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const type = Object.keys(mek.message)[0]        
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == "buttonsResponseMessage") && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const manti = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const q = args.join(' ')
const txt = mek.message.conversation	
const botNumber = haruka.user.jid
const botNumberss = haruka.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? haruka.user.jid : isGroup ? mek.participant : mek.key.remoteJid
const ownerNumber = [`${ownernumber}@s.whatsapp.net`] 
const isOwner = mek.key.fromMe ? haruka.user.jid : ownerNumber.includes(sender)
const totalchat = await haruka.chats.all()
const groupMetadata = isGroup ? await haruka.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const conts = mek.key.fromMe ? haruka.user.jid : haruka.contacts[sender] || { notify: jid.replace(/@.+/, '') }
const pushname = mek.key.fromMe ? haruka.user.name : conts.notify || conts.vname || conts.name || '-'
//---------------------------[ ANTI & RPG & PREMIUM ]----------------------------//
const isAntiLink = isGroup ? antilink.includes(from) : false
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
const isEventon = isGroup ? event.includes(from) : false
const isPetualang = checkPetualangUser(sender)
const isPremium = prem.includes(sender) || isOwner
//---------------------------[ FAKE REPLY ]----------------------------//
let ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289523258649-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 2021,status: 200, thumbnail: thumbnail, surface: 200, message: `${botname} 🏟️\nBy ${ownername}`, orderTitle: 'Riychuhuy', sellerJid: '0@s.whatsapp.net'}},sendEphemeral: true}
let fdoc = {key : {participant : '0@s.whatsapp.net'},message: {documentMessage: {title: `© ${ownername}`,jpegThumbnail: thumbnail}}}
let fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
let fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': `${botname} 🏟️\nBy ${ownername}`, 'jpegThumbnail': thumbnail}}}
let fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${botname}`, 'jpegThumbnail': thumbnail}}}
let fgclink2 = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": `© ${botname}`, 'jpegThumbnail': thumbnail}}}
let fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":`© ${ownername}`, "h": `Hmm`,'seconds': '99999', 'caption': `© ${ownername}`, 'jpegThumbnail': thumbnail}}}
let floc = {contextInfo: {"forwardingScore":999,"isForwarded":true,'stanzaId': 'B826873620DD5947E683E3ABE663F263', 'participant':`0@s.whatsapp.net`, 'remoteJid': '6283136505591-1614953337@g.us', 'quotedMessage': {"locationMessage": {"degreesLatitude": 41.893714904785156, "degreesLongitude": -87.63370513916016, "name": botname , 'jpegThumbnail':thumbnail}}}}
let fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `© ${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumbnail, thumbnail: thumbnail,sendEphemeral: true}}}
//---------------------------[ BASA MAS ]----------------------------//
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => { // Reply
haruka.sendMessage(from, teks, text, {quoted:mek})
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? haruka.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : haruka.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const sleep = async (ms) => {
return new Promise(resolve => setTimeout(resolve, ms));
}
function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`);
});
};
//---------------------------[ SEND STICKER ]----------------------------//
const sendStickerFromUrl = async(to, url) => {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './stik' + names + '.png', async function () {
console.log('selesai');
let filess = './stik' + names + '.png'
let asw = './stik' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
haruka.sendMessage(to, media, MessageType.sticker,{quoted:mek})
fs.unlinkSync(filess)
fs.unlinkSync(asw)
});
});
}
//---------------------------[ SEND MEDIA ]----------------------------//
const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
haruka.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
fs.unlinkSync(filename)
});
}
//---------------------------[ SEND FILE ]----------------------------//
const sendFileFromUrl = async (from, url, caption, mek, men) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return haruka.sendMessage(from, await getBuffer(url), video ,{caption: caption, gifPlayback: true, mentions: men ? men : [], mimetype: 'video/mp4' ,quoted: mek})
}
let type = mime.split("/")[0]+"Message"
if(mime === "application/pdf"){
return haruka.sendMessage(from, await getBuffer(url), document, {mimetype: 'application/pdf', caption: caption, mentions: men ? men : [], quoted: mek })
}
if(mime.split("/")[0] === "image"){
return haruka.sendMessage(from, await getBuffer(url), image ,{ caption: caption, mentions: men ? men : [], quoted: mek})
}
if(mime.split("/")[0] === "video"){
return haruka.sendMessage(from, await getBuffer(url), video, {caption: caption, mentions: men ? men : [], mimetype: 'video/mp4', quoted: mek})
}
if(mime.split("/")[0] === "audio"){
return haruka.sendMessage(from, await getBuffer(url), audio, {caption: caption, mentions: men ? men : [], mimetype: 'audio/mpeg', quoted: mek })
}
}
//---------------------------[ SEND MESSAGE & BUTTON ]----------------------------//
// Button Message
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
haruka.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options);
};
// Button Location
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
them = gam1
mediaxxaa = await haruka.prepareMessage(id, them, MessageType.location, {thumbnail: them})
locmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
const buttonMessages = {
locationMessage: locmhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// Button Document
const sendButDocument = async(id, text1, desc1, media, doc1, but = [], options = {}) => {
kma = doc1
mhan = await haruka.prepareMessage(from, media, document, kma)
const buttonMessages = {
documentMessage: mhan.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
riych.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// Button Video
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
them = vid1
mediaxxaa = await haruka.prepareMessage(id, them, MessageType.video)
vimhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
const buttonMessages = {
videoMessage: vimhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
// Button Image
const sendButImage = async(id, text1, desc1, vid1, but = [], options = {}) => {
them = vid1
mediaxxaa = await haruka.prepareMessage(id, them, MessageType.image, {thumbnail: Buffer.alloc(0)})
imgmhan = mediaxxaa.message["ephemeralMessage"] ? mediaxxaa.message.ephemeralMessage : mediaxxaa
const buttonMessages = {
imageMessage: imgmhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
haruka.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
//---------------------------[ ANTI LINK, VIRTEX, DELETE, CALL ]----------------------------//
// Anti Link
if (manti.includes("://chat.whatsapp.com/")){
if (!(isGroup || isAntiLink || isGroupAdmins)) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
await haruka.sendMessage(from, `Hmm maap nih gua kick, dilarang share link di group ini`, text , {quoted: mek})
haruka.groupRemove(from, [kic]).catch((e)=>{reply(`Bot Harus Jadi Admin`)})
}
// Anti Virtex
if (txt.length > 500){
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('*admin mah bebas*')
haruka.updatePresence(from, Presence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
var kic = `@${sender.split("@")[0]}@s.whatsapp.net`
teks = `*VIRTEX TERDETEKSI*\n*Maaf* _${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
haruka.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
haruka.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 1000)
setTimeout( () => {
haruka.updatePresence(from, Presence.composing)
reply("SELAMAT JALAN")
}, 0)
}
//---------------------------[ RANDOM NOMOR ]----------------------------//
function randomNomor(min, max = null) {
if (max !== null) {
min = Math.ceil(min);
max = Math.floor(max);
return Math.floor(Math.random() * (max - min + 1)) + min;
} else {
return Math.floor(Math.random() * min) + 1
}
}
//---------------------------[ PRODUC ]----------------------------//
const getHeal = (sender) => {
let position = false
Object.keys(_healt).forEach ((i) => {
if (_healt[position].id === sender) {
position = i
}
})
if (position !== false) {
return _healt[position].healt
}
}
const healtAdd = (sender) => {
let position = false
Object.keys(_healt).forEach((i) => {
if (_healt[i].id == sender) {
position = i
}
})
if (position !== false) {
_healt[position].healt += 10
fs.writeFileSync('./baileys/rpg/healt.json', JSON.stringify(_healt))
}
}    
//---------------------------[ FUCTION CEK HEALT ]----------------------------//
const checkHealt = (sender) => {
let found = false
for (let lmt of _healt) {
if (lmt.id === sender) {
const healthCounts = lmt.healt
if (healthCounts <= 0) return haruka.sendMessage(from,`Limit request anda sudah habis\n\n_Note : Limit akan direset setiap jam 21:00!_`, text,{ quoted: mek})
//  haruka.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
if (!isPetualang) return reply('Udah join rpg belom? Kalau belom ketik .joinrpg')
reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
pp = (`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿
 • Nama : ${pushname}
 • Rank : ${role}
 • Status : ${elit}
 • Uang : $${(getBalance(sender, balance))}
 • Xp : ${getLevelingXp(sender)}/${reqXp}
 • Level : ${getLevelingLevel(sender)}
 
🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :
 • Uang : $${(getBalance(sender, balance))}💰
 • Emas : ${getEmas(sender)}🪙
 • Besi : ${getBesi(sender)}⛓️
 • Berlian : ${getDm(sender)}💎
 • Ikan : ${getFish(sender)}🎣

🏔️ 𝗠𝗲𝗻𝘂 𝗥𝗣𝗚
 • ${prefix}joinrpg
 • ${prefix}quest ( otw )
 • ${prefix}mining
 • ${prefix}mancing
 • ${prefix}adventure
 • ${prefix}myinventori
 • ${prefix}topleaderboard
 
🛒 𝗦𝗲𝗹𝗹 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝘆
 • ${prefix}sellikan
 • ${prefix}sellbesi
 • ${prefix}sellemas
 • ${prefix}selldiamond`)
but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
sendButMessage(from, pp, 'rpg game', but)
found = true
}
}
if (found === false) {
let obj = { id: sender, healt: 1 }
_healt.push(obj)
fs.writeFileSync('./baileys/rpg/healt.json', JSON.stringify(_healt))
haruka.sendMessage(from, `${healthCounts}`, text, { quoted : mek})
}
}
//---------------------------[ FUCTION LIMITED ]----------------------------//
const isHealt = (sender) =>{ 
let position = false
for (let i of _healt) {
if (i.id === sender) {
let healts = i.healt
if (healts >= healthCounts ) {
position = true
haruka.sendMessage(from, ind.limitend(pushname), text, {quoted: mek})
return true
} else {
_healt
position = true
return false
}
}
}
if (position === false) {
const obj = { id: sender, healt: 1 }
_healt.push(obj)
fs.writeFileSync('./baileys/rpg/healt.json',JSON.stringify(_healt))
return false
}
}
     	const bayarHealt = (sender, amount) => {
        	let position = false
            Object.keys(_healt).forEach((i) => {
                if (_healt[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _healt[position].healt -= amount
                if (_healt[position].healt >= 0) return reply('healt kmu dh penuh')
                fs.writeFileSync('./baileys/rpg/healt.json', JSON.stringify(_healt))
            }
        }
        
                //function leveling
            if (isGroup && isPetualang) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)   
                var lvlup = (`╭───「 Level Up 」
│
├ • Nama : ${pushname}
├ • Rank : ${role}
├ • Status : ${elit}
├ • Xp : ${getLevelingXp(sender)}
├ • Level : ${getLevelingLevel(sender)}
│
╰───「 Elaina-Bot 」`)
		  but = [{ buttonId: `!menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
          sendButMessage(from, lvlup, 'Level Up', but)

                }
            } catch (err) {
                console.error(err)
            }
        }        

var ikan = ['🐳','🦈','🐬','🐋','🐟','🐠','🦐','🦑','🦀','🐡','🐙']
        var hewan = ['🐔','🦃','🦆','🐐','🐏','🐖','🐑','🐎','🐺']
        var burung = ['🦋','🕷','🐝','🐉','🦆','🦅','🕊','🐧','🐦','🦇']
 //function rank 
			const levelRole = getLevelingLevel(sender)
   	     var role = 'bronz'
   	     if (levelRole <= 3) {
   	         role = 'Copper'
   	     } else if (levelRole <= 5) {
   	         role = 'Iron'
   	     } else if (levelRole <= 7) {
   	         role = 'Silver'
   	     } else if (levelRole <= 10) {
   	         role = 'Gold'
   	     } else if (levelRole <= 12) {
   	         role = 'Platinum'
   	     } else if (levelRole <= 15) {
   	         role = 'Mithril'
   	     } else if (levelRole <= 18) {
   	         role = 'Orichalcum'
   	     } else if (levelRole <= 25) {
   	         role = 'Adamantite'
   	     }
   	     var premi = 'No Premium User'
			if (isPremium) {
				premi = 'Premiun User'
			} 
			if (isOwner) {
				premi = 'This Is Owner'
			}
	    var elit = 'Petualang Biasa'
			if (isPremium) {
				elit = 'Petualang Pro'
			}

			//game 
			if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    sendButMessage(from, "Selamat 😘 Jawaban kamu benar!", `• ${ownername}`, [{"buttonId": `.tebakgambar`,"buttonText": {"displayText": "Tebak Gambar"},"type": "RESPONSE"}], {quoted : mek})
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                } else {
                    reply("Jawaban Salah!")
                }
            }
            
			colors = ['red', 'pink', 'white', 'black', 'blue', 'yellow', 'green']
			const isRiych = checkRegisteredUser(sender)
			const isMedia = (type === 'imageMessage' || type === 'videoMessage')			 			  
			const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
			const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
			const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
			const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
			const isQuotedText = type === 'extendedTextMessage' && content.includes('extendedTextMessage')
			
		//console termux
		if(!(isCmd)){
			console.log(('|\x1b[1;33m MSG \x1b[1;33m|'), time, chalk.yellow(budy), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		if(!(isCmd || mek.key.fromMe)){
			console.log(('|\x1b[1;32m CMD \x1b[1;37m|'), time, chalk.green(command), 'from', chalk.green(pushname), 'args :', chalk.green(args.length), 'in', chalk.green(groupName? groupName : 'Private chat'))
		}
		
		if (!mek.key.fromMe && global.self === true) return
//colong aja bang, ingat jgn asal colong ntr sc lu error
switch (command) {
	case 'menu2': 
haruka.sendMessage(from, { contentText: lang.menu(prefix, salam, pushname), footerText: `© Riych-Uhuy`,buttons: [{ buttonId: `${prefix}owner`, buttonText: { displayText: 'Owner' }, type: 1 },{ buttonId: `${prefix}infobot`, buttonText: { displayText: 'Info Bot' }, type: 1 }], 
"headerType": "DOCUMENT", "documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aiy8bBgMR9Y88xiZDhul__jPfmONZEvq8nQ_hpT6i-qa.enc",
"mimetype": "application/pdf",
"title": "Riych.pdf",
"fileSha256": "sT6wGORrcAUl1epAQkB7ITzIhkyvOJ7NesShbq2vph8=",
"fileLength": "9999999999",
"pageCount": 9999999999,
"mediaKey": "1oL2npYSO31OTvzq4iSlQTlviEeD4xKz2MQs9UF/rgg=",
"fileName": "Riych.pdf",
"fileEncSha256": "7pykLsrchd7r75QiTTA7wh/zDpzQG5cxtg1dYK/vsKw=",
"directPath": "/v/t62.7119-24/30608579_653170642514518_4863626447121447102_n.enc?ccb=11-4&oh=7825978caef6f348e09e58c4b0859d82&oe=61CDE5B4",
"mediaKeyTimestamp": "1638268181",
"jpegThumbnail": "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"
}}, MessageType.buttonsMessage,{ quoted: fgif, sendEphemeral: true, contextInfo:{"forwardingScore":999,"isForwarded":true, "externalAdReply":{"title": `Riy Keren`, "body": `Go follow instagram @riychh`, mediaType: 2, "thumbnailUrl": "https://telegra.ph/file/88aafca2e9f9c78d921af.jpg","previewType": "VIDEO","mediaUrl": `https://youtu.be/dmhndm6a2oQ`}}})
break
case 'menu':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				sendButLocation(from, lang.menu(prefix, salam, pushname), '© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
				break
case 'sewa': case 'sewabot':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				sendButLocation(from, lang.sewabot(prefix, salam, pushname), '© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
				break
case 'infobot':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			reply('Update bot selanjutnya silahkan cek https://github.com/riychuhuy')
break
case 'block':
				 haruka.updatePresence(from, Presence.composing) 
				 haruka.chatRead (from)
					if (!isGroup) return reply(lang.group())
					if (!isOwner) return reply(lang.owner(botname))
					haruka.blockUser (`${body.slice(7)}@c.us`, "add")
					haruka.sendMessage(from, `perintah Diterima, memblokir ${body.slice(7)}@c.us`, text)
					break
                    case 'unblock':
					if (!isGroup) return reply(lang.group())
					if (!isOwner) return reply(lang.owner(botname))
				    haruka.blockUser (`${body.slice(9)}@c.us`, "remove")
					haruka.sendMessage(from, `Perintah Diterima, membuka ${body.slice(9)}@c.us`, text)
					break  
case 'owner':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
		const ownerContact = [ownernumber, "", "", "", "", "", "", "", "", "", "" , "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
		let ini_list = []
		for (let i of ownerContact.map(v => v + '@s.whatsapp.net')) {
			const vname = haruka.contacts[i] != undefined ? haruka.contacts[i].vname || haruka.contacts[i].notify : undefined
			ini_list.push({
				"displayName": `${ownername}`,
				"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:${vname}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
				})
				}
				hehe = await haruka.sendMessage(from, {
					"displayName": `${ini_list.length} kontak`,
					"contacts": ini_list 
					}, 'contactsArrayMessage', { quoted: mek })
					haruka.sendMessage(from, `Nih Kak Contact Owner Ku, Cuma Sv Nomor Cewe Ya 🤝`, text, {quoted: hehe})
				}
			break
case 'ttp':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh .${command} Riy Ganteng`)
                reply(lang.wait())
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://api.xteam.xyz/ttp?file&text=${ini_text}`)
                haruka.sendMessage(from, ini_buffer, sticker, {quoted: fgif})
                break
                case 'attp':
                if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh .${command} Riy Ganteng`)
                reply(lang.wait())
                ini_text = args.join(" ")
                ini_buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${ini_text}`)
                haruka.sendMessage(from, ini_buffer, sticker, {quoted: fgif})
                break 
case 'toptt':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await haruka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal mengkonversi audio ke ptt')
topt = fs.readFileSync(ran)
haruka.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: fgif, ptt:true})
})
break
case 'tomp3':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
haruka.updatePresence(from, Presence.composing) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await haruka.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3 ')
bufferlkj = fs.readFileSync(ran)
haruka.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: fgif})
fs.unlinkSync(ran)
})
break
case 'tovideo':
case 'tomp4':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
ger = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
owgi =await haruka.downloadAndSaveMediaMessage(ger)
webp2mp4File(owgi).then(res=>{
sendMediaURL(from,res.result,'Done')
})
}else {
reply('reply stiker')
}
fs.unlinkSync(owgi)
break 
case 'sticker':case 'stiker':case 'stickergif':case 'stikergif':case 'sgif':case 's':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
			const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			const media = await haruka.downloadAndSaveMediaMessage(encmedia)
			ran = getRandom('.webp')
			await ffmpeg(`./${media}`)
			.input(media)
			.on('start', function (cmd) {
				console.log(`Started : ${cmd}`)
				})
				.on('error', function (err) {
					console.log(`Error : ${err}`)
					fs.unlinkSync(media)
					reply('Eror')
					})
			.on('end', function () {
				console.log('Finish')
				haruka.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
				fs.unlinkSync(media)
				fs.unlinkSync(ran)
				})
				.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
				.toFormat('webp')
				.save(ran)
				} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
				const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
				const media = await haruka.downloadAndSaveMediaMessage(encmedia)
				ran = getRandom('.webp')
				await ffmpeg(`./${media}`)
				.inputFormat(media.split('.')[1])
				.on('start', function (cmd) {
					console.log(`Started : ${cmd}`)
					})
					.on('error', function (err) {
						console.log(`Error : ${err}`)
						fs.unlinkSync(media)
						tipe = media.endsWith('.mp4') ? 'video' : 'gif'
						reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker`)
						})
						.on('end', function () {
							console.log('Finish')
							haruka.sendMessage(from, fs.readFileSync(ran), sticker, { quoted: mek })
							fs.unlinkSync(media)
							fs.unlinkSync(ran)
							})
							.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
							.toFormat('webp')
							.save(ran)
							} else  {
								reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim\nDurasi sticker video 1-9 detik...`)
							}
					
             break
					
// download fix by zeeone
case 'ig': case 'igdl': 
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	if (!q) return reply('Linknya?')
	if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.errorLink)
	let urlnya = q
	zee.Igdl(urlnya)
	.then(async(result) => {
		for(let i of result.medias){
			if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                    haruka.sendMessage(from,link,video,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram •  ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    haruka.sendMessage(from,link,image,{thumbnail: Buffer.alloc(0), quoted: mek,caption: `Instagram • ${i.type}`})                  
                }
            }
            }).catch((err) => reply(`🤲 Server eror`))
            
             break
case 'tiktok':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
sendButLocation(from, 'Silahkan pilih media yang ingin kamu download', '© ' + ownername, thumbnail, [{buttonId: `.tiktokwm ${q}`, buttonText: {displayText: 'WM'}, type: 1},{buttonId: `.tiktoknowm ${q}`, buttonText:{displayText: 'NOWM'}, type: 1},{buttonId: `.tiktokmusic ${q}`, buttonText:{displayText: 'AUDIO'}, type: 1}], {quoted: mek})
						
             break
case 'tiktoknowm':   
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(lang.wait())
			let nowem = q
			zee.Ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
					haruka.sendMessage(from,noweem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			
             break 
case 'tiktokwm':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(lang.wait())
			let wem = args.join(' ')
			zee.Ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					haruka.sendMessage(from,weem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			
             break 
case 'tiktokmusic': case 'tiktokaudio':  
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!q) return reply('Linknya?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
			reply(lang.wait())
			let audi = q
			zee.Ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					haruka.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => reply(`Link tidak valid`))
			
             break
case 'pinterest': 
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if(!q) return reply('Masukkan query')
            async function pinterestSearch(query) {
                    return new Promise((resolve, reject) => {
                        fetch(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${query}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${query}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`, {
                            "headers": {
                                "accept": "application/json, text/javascript, */*, q=0.01",
                                "accept-language": "en-US,en;q=0.9",
                                "cache-control": "no-cache",
                                "pragma": "no-cache",
                                "sec-fetch-dest": "empty",
                                "sec-fetch-mode": "cors",
                                "sec-fetch-site": "same-origin",
                                "sec-gpc": "1",
                                "x-app-version": "9a236a4",
                                "x-pinterest-appstate": "active",
                                "x-requested-with": "XMLHttpRequest"
                            },
                            "referrer": "https://www.pinterest.com/",
                            "referrerPolicy": "origin",
                            "body": null,
                            "method": "GET",
                            "mode": "cors"
                        }).then((res) => res.json())
                            .then((json) => {
                                const generatepin = json.resource_response.data.results[Math.floor(Math.random() * (json.resource_response.data.results.length))]
                                var result = [];
                                result.push({
                                    link: generatepin.images.orig.url
                                })
                                resolve(result)
                            }).catch(reject)
                    })
                }

                const pinterest = (query) => new Promise((resolve, reject) => {
                    pinterestSearch(query).then((data) => {
                        resolve({
                            status: 200,
                            image: data[0].link
                        })
                    }).catch(reject)
                })

                pinterest(q).then(async(res) => {
                	let we = await getBuffer(res.image)
              	  sendButImage(from,  lang.ok() , `© ${ownername}`,we, [{"buttonId": `.pinterest ${q}`,"buttonText": {"displayText": "Next"},"type": "RESPONSE"}], {thumbnail: Buffer.alloc(0), quoted: mek})
                   }).catch(async(err) => {
                    reply('Terjadi kesalahan')
                })
                
             break
case 'play': case 'song':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu_`)
			var srch = args.join(' ')
			aramas = await yts(srch);
			aramat = aramas.all 
			var mulaikah = aramat[0].url
			try {
				zee.Youtube(mulaikah).then(async (data) => {
					if (Number(data.medias[7].formattedSize) >= 100000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${aramas.videos[0].title}\n*Ext* : MP3\n*Filesize* : ${data.medias[7].formattedSize}\n*Link* : ${aramas.videos[0].url}\n\n_Untuk durasi lebih dari batas disajikan dalam bentuk link_`)
						const captions = `*---- 「 PLAY MUSIC 」----*
						
• Title : ${aramas.videos[0].title}
• ID : ${aramas.videos[0].videoId}
• Upload : ${aramas.videos[0].ago}
• Size : ${data.medias[7].formattedSize}
• Views: ${aramas.videos[0].views} 
• Duration : ${aramas.videos[0].timestamp}
• Url : ${aramas.videos[0].url}`
var thumbyt = await getBuffer(aramas.videos[0].thumbnail)
sendButLocation(from, captions, '© ' + ownername, thumbyt, [{buttonId: `.ytmp4 ${mulaikah}`, buttonText: {displayText: 'Video'}, type: 1},{buttonId: `.ytmp3 ${mulaikah}`, buttonText:{displayText: 'Audio'}, type: 1}], {quoted: mek})
						})
				} catch (err) {
					reply('Terjadi kesalahan')
					}
			
             break
case 'spotify':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
    url = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
    get_result = get_result.result
    ini_txt = `Title : ${get_result.title}\n`
    ini_txt += `Artists : ${get_result.artists}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Popularity : ${get_result.popularity}\n`
    ini_txt += `Preview : ${get_result.preview_url}\n`
    thumbnail = await getBuffer(get_result.thumbnail)
    await haruka.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
    get_audio = await getBuffer(get_result.link)
    await haruka.sendMessage(from, get_audio, audio, { mimetype: 'audio/mpeg', filename: `${get_result.title}.mp3`, quoted: mek})
    }
    break
case 'spotifysearch':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotifysearch?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = ""
    for (var x of get_result) {
        ini_txt += `Title : ${x.title}\n`
        ini_txt += `Artists : ${x.artists}\n`
        ini_txt += `Duration : ${x.duration}\n`
        ini_txt += `Link : ${x.link}\n`
        ini_txt += `Preview : ${x.preview_url}\n\n\n`
    }
    reply(ini_txt)}
    break
case 'nhentai':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
    henid = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
    ini_txt += `Title Native : ${get_result.title_native}\n`
    ini_txt += `Read Online : ${get_result.read}\n`
    get_info = get_result.info
    ini_txt += `Parodies : ${get_info.parodies}\n`
    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
    ini_txt += `Artist : ${get_info.artists}\n`
    ini_txt += `Group : ${get_info.groups}\n`
    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
    ini_txt += `Categories : ${get_info.categories}\n`
    ini_txt += `Pages : ${get_info.pages}\n`
    ini_txt += `Uploaded : ${get_info.uploaded}\n`
    reply(ini_txt)}
    break
 case 'nhentaipdf':{
 	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
    henid = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_buffer = await getBuffer(get_result)
    await haruka.sendMessage(from, ini_buffer, document, { quoted: mek, mimetype: Mimetype.pdf, filename: `${henid}.pdf` })
    }
    break
case 'nhentaisearch':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
    get_result = get_result.result
    ini_txt = "Result : \n"
    for (var x of get_result) {
        ini_txt += `Id : ${x.id}\n`
        ini_txt += `Title English : ${x.title_english}\n`
        ini_txt += `Title Japanese : ${x.title_japanese}\n`
        ini_txt += `Native : ${x.title_native}\n`
        ini_txt += `Upload : ${x.date_upload}\n`
        ini_txt += `Page : ${x.page}\n`
        ini_txt += `Favourite : ${x.favourite}\n\n`
    }
    reply(ini_txt)
    }
    break
//maker ephoto
case 'wetglass':case 'multicolor3d':case 'watercolor':case 'luxurygold':case 'galaxywallpaper':case 'lighttext':case 'beautifulflower':case 'puppycute':case 'royaltext':case 'heartshaped':case 'birthdaycake':case 'galaxystyle':case 'hologram3d':case 'greenneon':case 'glossychrome':case 'greenbush':case 'metallogo':case 'noeltext':case 'glittergold':case 'textcake':case 'starsnight':case 'wooden3d':case 'textbyname':case 'writegalacy':case 'galaxybat':case 'snow3d':case 'birthdayday':case 'goldplaybutton':case 'silverplaybutton':case 'freefire':{
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} Riy Ganteng`)
    ini_txt = args.join(" ")
    var gambar = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`)
    haruka.sendMessage(from, gambar, image, { quoted: mek, caption: "Selesai" })
    }
    break
//maker textpro
case 'blackpink':case 'neon':case 'greenneon':case 'advanceglow':case 'futureneon':case 'sandwriting':case 'sandsummer':case 'sandengraved':case 'metaldark':case 'neonlight':case 'holographic':case 'text1917':case 'minion':case 'deluxesilver':case 'newyearcard':case 'bloodfrosted':case 'halloween':case 'jokerlogo':case 'fireworksparkle':case 'natureleaves':case 'bokeh':case 'toxic':case 'strawberry':case 'box3d':case 'roadwarning':case 'breakwall':case 'icecold':case 'luxury':case 'cloud':case 'summersand':case 'horrorblood':case 'thunder':{
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} Riy Ganteng`)
    ini_txt = args.join(" ")
    let gambar = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`)
    haruka.sendMessage(from, gambar, image, { quoted: mek, caption: "Sukses" })
    }
    break
//islami
case 'listsurah':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    get = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
    get_result = get.result
    ini_txt = 'List Surah:\n'
    for (var x in get_result) {
        ini_txt += `${x}. ${get_result[x]}\n`
    }
    reply(ini_txt)
    }
    break
case 'alquran':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
    urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
    quran = await fetchJson(urls)
    result = quran.result
    ayat = result.ayat
    ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
    for (var x of ayat) {
        arab = x.arab
        nomor = x.ayat
        latin = x.latin
        indo = x.indonesia
        ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
    }
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
    ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
    reply(ini_txt)}
    break
case 'asmaulhusna':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `No : ${get_result.index}\n`
    ini_txt += `Latin: ${get_result.latin}\n`
    ini_txt += `Arab : ${get_result.ar}\n`
    ini_txt += `Indonesia : ${get_result.id}\n`
    ini_txt += `English : ${get_result.en}`
    reply(ini_txt)}
    break
case 'kisahnabi':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
    query = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Name : ${get_result.name}\n`
    ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
    ini_txt += `Umur : ${get_result.age}\n`
    ini_txt += `Tempat : ${get_result.place}\n`
    ini_txt += `Story : \n${get_result.story}`
    reply(ini_txt)}
    break
case 'alquranaudio':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)
    surah = args[0]
    ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
    await haruka.sendMessage(from, ini_buffer, audio, { quoted: mek, mimetype: 'audio/mpeg' })
    }
    break
case 'jadwalsholat':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
    if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
    daerah = args.join(" ")
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Wilayah : ${get_result.wilayah}\n`
    ini_txt += `Tanggal : ${get_result.tanggal}\n`
    ini_txt += `Sahur : ${get_result.sahur}\n`
    ini_txt += `Imsak : ${get_result.imsak}\n`
    ini_txt += `Subuh : ${get_result.subuh}\n`
    ini_txt += `Terbit : ${get_result.terbit}\n`
    ini_txt += `Dhuha : ${get_result.dhuha}\n`
    ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
    ini_txt += `Ashar : ${get_result.ashar}\n`
    ini_txt += `Maghrib : ${get_result.imsak}\n`
    ini_txt += `Isya : ${get_result.isya}`
    reply(ini_txt)}
    break

//group
case 'daftar': case 'verify': case 'verif':
			if (isRiych) return  reply(lang.regis())
			try {
					ppregis = await haruka.getProfilePicture(sender)
				} catch {
					ppregis = 'https://i.ibb.co/rvsVF3r/5012fbb87660.png'
				}
			const serialUser = createSerial(20)
			await addRegisteredUser(sender.split('@')[0] + '@s.whatsapp.net', pushname, time, serialUser)
			await sendButImage(from, lang.daftar(sender, pushname, time, serialUser, _registered), `© ${botname}`,await getBuffer(ppregis), [{buttonId: '.menu',buttonText: {displayText: `MENU`,},type: 1,}], {thumbnail: Buffer.alloc(0), quoted : mek})
break
case 'antilink':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					if (Number(args[0]) === 1) {
						if (isAntiLink) return reply('Telah di aktifkan sebelumnya')
						antilink.push(from)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(`✅ Berhasil mengaktifkan ${command}`)
					} else if (Number(args[0]) === 0) {
						if (!isAntiLink) return reply('Udh mati')
						var ini = anti.botLangsexOf(from)
						antilink.splice(ini, 1)
						fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))
						reply(`✅ Berhasil mematikan ${command}`)
					} else {
						reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')
					}
					break		
case 'antivirtex': 
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isGroup) return reply(lang.group())
if (!isGroupAdmins) return reply(lang.admin(groupName))
if (!isBotGroupAdmins) return reply(lang.adminB())
if (args[0] === 'on') {
if (isAntiVirtex) return reply(`SUDAH MENYALA`)
antivirtex.push(from)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
reply(`\`\`\`SUCCES MENGAKTIFKAN ANTIVIRTEX DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isAntiVirtex) return reply(`SUDAH MATI`)
antivirtex.splice(from, 4)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
reply(`\`\`\`SUCCES MENONAKTIFKAN ANTIVIRTEX DI GROUP INI\`\`\``)
} else {
sendButMessage(from, `MODE ANTIVIRTEX`, `Silahkan pilih salah satu`, [
            {
              buttonId: `${prefix}antivirtex on`,
              buttonText: {
                displayText: `ON`,
              },
              type: 1,
            },
            {
              buttonId: `${prefix}antivirtex off`,
              buttonText: {
                displayText: `OFF`,
              },
              type: 1,
            },
          ]);
        }
        break;
case 'antidelete':{
if (!isOwner) return reply(lang.owner(botname))
if (args[0] === "on") {
if (global.anti_delete === true) return reply('Kyk nya udh on')
global.anti_delete = true
reply('✅ Anti delete berhasil di aktifkan')
} else if (args[0] === "off") {
if (global.anti_delete === false) return
global.anti_delete = false
reply('✅ Anti delete berhasil di non aktifkan')
} else if (!q) {
sendButMessage(from, `MODE ANTI DELETE`, `Choose one`, [{buttonId: '.antidelete on',buttonText: {displayText: `On`,},type: 1,},{buttonId: '.antidelete off',buttonText: {displayText: `Off`,},type: 1,},]);}}
break;
case 'd':case 'del':case 'delete':{
haruka.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
}
break
case 'anticall':{
if (!isOwner) return reply(lang.owner(botname))
if (args[0] === "on") {
if (global.anticall === true) return reply('Kyk nya udh on')
global.anticall = true
reply('✅ Anti call berhasil di aktifkan')
} else if (args[0] === "off") {
if (global.anticall === false) return
global.anticall = false
reply('✅ Anti call berhasil di non aktifkan')
} else if (!q) {
sendButMessage(from, `MODE ANTI CALL`, `Choose one`, [{buttonId: '.anticall on',buttonText: {displayText: `On`,},type: 1,},{buttonId: '.anticall off',buttonText: {displayText: `Off`,},type: 1,},]);}}
break;
case 'memegenerator': case 'memegen':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									if (!q.includes('|')) return reply(`Kirim perintah *${prefix + command}* teks atas|teks bawah`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await haruka.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										haruka.sendMessage(from, resu, image, {caption:'.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek})
										fs.unlinkSync(mediiia)
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break
					 	case 'stickermeme': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									if (q.includes('|')) return reply(`Kirim perintah *${prefix + command}* Alphabot`)
									try {
										if (!isQuotedImage) return reply(`Reply Gambar!`)
										reply(lang.wait())
										var teks2 = args.join(' ')
										var enmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await haruka.downloadMediaMessage(enmedia)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(lang.err())
											console.log(e)
										}
										}
									break	
case 'leave':
			if (!isGroup) return reply(lang.group())
			if (!isOwner) return reply(lang.owner(botname))
			setTimeout( () => {
			haruka.groupLeave(from) 
			}, 2000)
			setTimeout( () => {
			haruka.sendMessage(from, 'Sayonara👋', text)
			}, 0)
			break
case 'hidetag':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			var value = q
			var group = await haruka.groupMetadata(from)
			var member = group['participants']
			var mem = []
			member.map( async adm => {
			mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
			})
			var options = {
			text: value,
			contextInfo: { mentionedJid: mem },
			quoted: mek
			}
			haruka.sendMessage(from, options, text)
			break
case 'linkgrup':case 'linkgroup': case 'linkgc':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			linkgc = await haruka.groupInviteCode(from)
			yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
			haruka.sendMessage(from, yeh, text, { quoted: mek })
			break  
case 'tagall':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			members_id = []
			taga = (args.length > 1) ? body.slice(8).trim() : ''
			taga += '\n\n'
			for (let mem of groupMembers) {
				taga += `• @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
			}
			mentions(taga, members_id, true)
			break 
case 'setname':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await haruka.groupUpdateSubject(from, `${q}`)
					haruka.sendMessage(from, `Sukses Mengubah Nama Grup Menjadi ${q}`, text, { quoted: mek })
			break          
case 'setdesc': case 'setdesk':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
					await haruka.groupUpdateDescription(from, `${q}`)
					haruka.sendMessage(from, `Sukses Mengubah Desk Grup Menjadi ${q}`, text, { quoted: mek })
			break   
case 'kick':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
			if (!isBotGroupAdmins) return reply(lang.adminB())
			if(!q)return reply(`*Format salah!*\n\n*Example : ${prefix + command} @tag*`)
			var kickya = q.split('@')[1] + '@s.whatsapp.net'
			await haruka.groupRemove(from, [kickya])
			reply(`Succses kick target!`)
break
case 'sider':{
 try{
                shape = '✓ '
infom = await haruka.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch {
	m.reply('')
	}}
					break   
case 'd':case 'del':case 'delete':{
	if (!isOwner) return reply(lang.owner(botname))
haruka.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
}
break
case "listonline": {
        let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat;
        try {
          let online = [
            ...Object.keys(haruka.chats.get(id).presences),
            haruka.user.jid,
          ];
          haruka.reply(
            m.chat,
            "*「 L I S T   O N L I N E  」*\n" +
              online.map((v) => "├ @" + v.replace(/@.+/, "")).join`\n` +
              "\n",
            m,
            {
              contextInfo: { mentionedJid: online },
            }
          );
        } catch (e) {
          m.reply("");
        }}
        break;
case 'sider':{
 try{
                shape = '✓ '
infom = await haruka.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += shape+' ' + '@' + i.jid.split('@')[0] + '\n'
teks += `> Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
} catch {
	m.reply('')
	}}
					break   
case 'd':case 'del':case 'delete':{
	if (!isOwner) return reply(lang.owner(botname))
haruka.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
}
break

case 'creategroup':
case 'creategrup':
if (!isGroup) return reply(lang.group())
if (!isOwner) return reply(lang.owner(botname)) 
if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
argza = arg.split('|')
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
for (let i = 0; i < mentioned.length; i++){
anu = []
anu.push(mentioned[i])
}
haruka.groupCreate(argza[0], anu)
reply(`Sukes membuat grup:\n${argza}`)
}
break
case 'group':
					apri = 'PILIH BEMRO'
        sendButMessage(from, apri, `Silahkan pilih salah satu`, [
          {
            buttonId: `${prefix}opengc`,
            buttonText: {
              displayText: `OPEN`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}closegc`,
            buttonText: {
              displayText: `CLOSE`,
            },
            type: 1,
          },
        ]);
        break
case "closegc": 
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI TUTUP ADMIN ${pushname}*`);
        haruka.groupSettingChange(from, GroupSettingChange.messageSend, true);
        break; 
      case "opengc":
        if (!mek.key.fromMe && !isGroupAdmins) return reply("Only admin");
        if (!isBotGroupAdmins) return reply("Bot not admin");
        if (!isGroup) return;
        reply(`*GROUP BERHASIL DI BUKA ADMIN ${pushname}*`);
        haruka.groupSettingChange(from, GroupSettingChange.messageSend, false);
        break; 
case 'bc': case 'broadcast':
			if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
			if (args.length === 0) return reply(`Kirim perintah *${prefix + command}* text`)
			var bcnya = await haruka.chats.all()
			if (isMedia && !mek.message.videoMessage || isQuotedImage) {
			var  bcnya2 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
			var bcnya3 = await haruka.downloadMediaMessage(bcnya2)
					for (let _ of bcnya) {
						haruka.sendMessage(_.jid, bcnya3, image, { caption: `*「  BROADCAST 」*\n\n${q}` })
						}
						reply('Sukses broadcast')
					} else {
						for (let _ of bcnya) {
							sendButLocation(_.jid, '「 PESAN SIARAN 」\n\n' + q, '© ' + ownername, thumbnail, [{buttonId: '.owner', buttonText: {displayText: 'Owner'}, type: 1},{buttonId: '.infobot', buttonText:{displayText: 'Infobot'}, type: 1}], {quoted: mek})
							}
						reply('Sukses broadcast')
					}
					break      
case 'nightcore':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	 if (!isQuotedAudio) return reply('Reply audio nya om')
					encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await haruka.downloadAndSaveMediaMessage(encmedia)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(media)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration:99999999999999999999999})
						fs.unlinkSync(ran)
					   })}
				  break      
case 'bass': {
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await haruka.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek, duration:99999999999999999999999})
										fs.unlinkSync(ran)
										})}
										break    
case 'slowmo': case 'slow':{
								try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await haruka.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											haruka.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
											}
												
									break
case 'robot':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await haruka.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'vibra': case 'vibrato':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
									encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await haruka.downloadAndSaveMediaMessage(encmedia)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
case 'tupai':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await haruka.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek,duration: 999099})
											fs.unlinkSync(ran)
											})
											 } catch (e) {	
												reply(mess.error)
												}  	
												}
												break
case 'fast':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
									try {
										encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await haruka.downloadAndSaveMediaMessage(encmedia)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											haruka.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
										}
									break
									case 'nulis':
									if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
									reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
									break
case 'toimg':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
		if (!isQuotedSticker) return reply('Reply stc nya!')
					reply(lang.wait())
					encmediaa = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaa = await haruka.downloadAndSaveMediaMessage(encmediaa)
					ran = getRandom('.png')
					exec(`ffmpeg -i ${mediaa} ${ran}`, (err) => {
					fs.unlinkSync(mediaa)
					if (err) return reply('Eror')
					buffer = fs.readFileSync(ran)
					haruka.sendMessage(from, buffer, image, {quoted: mek, thumbnail:Buffer.alloc(0), caption: 'Done'})
					fs.unlinkSync(ran)
					})
					}
					break   
case 'nuliskiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'22',
									'-interline-spacing',
									'2',
									'-annotate',
									'+140+153',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'nuliskanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/buku/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'2',
									'-annotate',
									'+128+129',
									fixHeight,
									'./database/media/nulis/images/buku/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/buku/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokiri':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokiri* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./media/nulis/images/folio/sebelumkiri.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'1720x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'4',
									'-annotate',
									'+48+185',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkiri.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkiri.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
										})
									}
									break
						case 'foliokanan':{
									if (args.length < 1) return reply(`Kirim perintah *${prefix}foliokanan* teks`)
									reply(lang.wait())
									const tulisan = q
									const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
									const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
									spawn('convert', [
									'./database/media/nulis/images/folio/sebelumkanan.jpg',
									'-font',
									'./database/media/nulis/font/Indie-Flower.ttf',
									'-size',
									'960x1280',
									'-pointsize',
									'23',
									'-interline-spacing',
									'3',
									'-annotate',
									'+89+190',
									fixHeight,
									'./database/media/nulis/images/folio/setelahkanan.jpg'
									])
									.on('error', () => reply(mess.error))
									.on('exit', () => {
										haruka.sendMessage(from, fs.readFileSync('./database/media/nulis/images/folio/setelahkanan.jpg'), image, {thumbnail:Buffer.alloc(0),quoted: mek, caption: `Hati-hati ketahuan!`})
										
									})
									}
									break
									case 'facebook': case 'fb': case 'fbdl': case 'facebookdl':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                if(!q)return reply(`Example : ${prefix + command} link Facebook`)
                if (!q.includes('facebook.com') && !q.includes('fb.watch')) return reply('Itu bukan link Facebook')
                await reply(lang.wait())
try{
                zee.Facebook(`${q}`).then(async data => {
                    let txt = `*----「 FACEBOOK DOWNLOADER 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Type :* ${data.medias[0].extension}\n`
                    txt += `*• Quality :* ${data.medias[0].quality}\n`
                    txt += `*• Size HD:* ${data.medias[1].formattedSize}\n`
					txt += `*• Url :* ${data.url}`
                    let ppfb = await getBuffer(data.medias[1].url)
                    haruka.sendMessage(from, ppfb, video, {mimetype:'video/mp4', quoted: mek, caption: txt})
             })} catch {
             	reply('Fitur sedang error')
} 
   }          
             break
   case 'soundcloud':
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                if(!q)return reply(`Example : ${prefix + command} link SoundCloud`)
                if (!q.includes('m.soundcloud.com')) return reply('Itu bukan link SoundCloud')
                await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Mohon tunggu sebentar, sedang proses pengiriman...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    haruka.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: mek, mimetype: 'audio/mp4' })
				})
			break
	case 'telesticker': case 'tstiker': {
		if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!q) return reply(`Contoh: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
			if (!q.includes('t.me')) return reply('Bukan link telegram stiker')
			var telestc = await zee.Telesticker(`${q}`)
			await reply(lang.wait())
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			haruka.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: mek})
			}
		}
		break
case 'tebakgambar':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada permainan yang sedang berlangsung")
hx.tebakgambar().then(async data =>{
	tebakya = await getBuffer(data[0].image)
jawaban = `${data[0].jawaban.replace('Jawaban ', '')}`
tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
console.log(jawaban)
haruka.sendMessage(from, tebakya, image, {quoted: mek, caption: "\n\nTimeout : 120.00 seconds" })
await sleep(120000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
haruka.sendMessage(from, "Waktu permainan habis" + '\n\n' +"*Jawaban :*"  + '\n' + '_'+ jawaban +'_', text, {quoted: mek}) // ur cods
delete tebakgambar[sender.split('@')[0]]
fs.writeFileSync("./database/game/tebakgambar.json", JSON.stringify(tebakgambar))
                    }
                    })
					break   
case 'suit':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (args.length < 1) return reply('Pilih Batu,Gunting atauKertas')
query = args.join(" ")
const botol = ['Batu','Gunting','Kertas']
const suitcuy = botol[Math.floor(Math.random() * botol.length)]
brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${query}
`
reply(brow)
break
case 'caklontong':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
data = fs.readFileSync('./database/game/caklontong.js');
cak = JSON.parse(data);
lontong = Math.floor(Math.random() * cak.length);
randKey = cak[lontong];
Pertanyaan = randKey.result.soal
Jawaban = '\n*'+randKey.result.desc +'*'
setTimeout( () => {
haruka.sendMessage(from, Jawaban, text, {quoted: mek})
}, 30000)
setTimeout( () => {
haruka.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s
haruka.sendMessage(from, Pertanyaan, text, {quoted: mek})
break
case 'family100':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
data = fs.readFileSync('./database/game/family100.js');
fami = JSON.parse(data);
ly100 = Math.floor(Math.random() * fami.length);
randKey = fami[ly100];
Pertanyaan = randKey.result.soal
setTimeout( () => {
haruka.sendMessage(from, '* Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: fgif}) // ur cods
}, 30000) // 1000 = 1s,
setTimeout( () => {
reply('_Waktu Anda Habis_')
}, 29000)
setTimeout( () => {
haruka.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s,
setTimeout( () => {
haruka.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
}, 0) // 1000 = 1s,
break 
case 'truth':
                if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					const trut =['Pernah suka sama siapa aja? beharuka lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']
					const ttrth = trut[Math.floor(Math.random() * trut.length)]
					truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					haruka.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: mek })
					break
case 'dare':
                if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
					const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot  setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u APRI?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
					const der = dare[Math.floor(Math.random() * dare.length)]
					tod = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
					haruka.sendMessage(from, tod, image, { quoted: mek, caption: '*Dare*\n\n'+ der })
					break
case 'semoji': case'emoji':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
if (!q) return reply('emojinya?')
					qes = args.join(' ')
reply(lang.wait())
	emoji.get(`${qes}`).then(async emojii => {
					teks = `${emojii.images[4].url}`
					console.log(teks)
					//haruka.sendMessage(from, await getBuffer(teks), sticker, {mimetype:'image/webp',quoted: mek})
		  sendStickerFromUrl(from,`${teks}`)	
		
		})
		
		break
case 'ytmp3': {
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			await reply(lang.wait())
                zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE AUDIO 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[7].quality}\n`
                    txt += `*• Type :* ${data.medias[7].extension}\n`
                    txt += `*• Size :* ${data.medias[7].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Mohon tunggu sebentar , uploading media..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[7].url, '', mek)
                })
                }
             break
case 'ytmp4': {
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (args.length === 0) return reply(`Kirim perintah *${prefix}ytmp3* _Url YouTube_`)
			if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link tidak valid!')
			var mulaikah = args.join(' ')
			zee.Youtube(mulaikah).then(async (data) => {
                    let txt = `*----「 YOUTUBE VIDEO 」----*\n\n`
                    txt += `*• Quality :* ${data.medias[1].quality}\n`
                    txt += `*• Type :* ${data.medias[1].extension}\n`
                    txt += `*• Size :* ${data.medias[1].formattedSize}\n`
                    txt += `*• Url Source :* ${data.url}\n\n`
                    txt += `_Mohon tunggu sebentar , uploading media..._`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    sendFileFromUrl(from, data.medias[1].url, '', mek)                    
                })
                }
             break                         
//No Categori
case 'getpp':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
if (!q) return reply('Tag yang mau di ambil pp nya !')
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await haruka.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await haruka.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				haruka.sendMessage(from, buffer, image, {quoted: fgif})
		} else {
		}
			  break
case 'getdeskgc':
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
					anu = from
			   metadete = await haruka.groupMetadata(anu)
				haruka.sendMessage(from, metadete.desc, text, {quoted:fgif})
				  break
//Fun By Riy
      case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantex':
      case 'pantek':
      if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
      if (!isGroup) return fakestatus('```KHUSUS GRUP BRO```')
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Dasar ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break
          case 'wangy':
          if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              fakestatus(awikwok)
              break
              
 case 'cekmati':
 if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              if (!q) return fakestatus(mess.wrongFormat)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              fakestatus(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)
              break
       case 'togel':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              fakestatus(mess.wait)
              try {
              dataplai = await axios.get(`https://api.vhtear.com/togel&apikey=${setting.vhtearkey}`)
              dataplay = dataplai.data.result
              let tomgel = `*Huzzzzz*\n`
              for (let i = 0; i < dataplay.hasil.length; i++) {
              tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`
}
              sendText(from, tomgel)
              } catch (err) {
              console.log(err)
}
              break
       case 'toxic':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              Toxic().then(toxic => {
              fakestatus (toxic)
})
              break
       
       case 'apakah':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              apakah = body.slice(1)
              const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
              const kah = apa[Math.floor(Math.random() * apa.length)]
              haruka.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: mek })
              break
       case 'rate':
       case 'nilai':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              rate = body.slice(1)
              const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
              const te = ra[Math.floor(Math.random() * ra.length)]
              haruka.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: mek })
              break
       case 'gantengcek':
       case 'cekganteng':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              ganteng = body.slice(1)
              const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const teng = gan[Math.floor(Math.random() * gan.length)]
              haruka.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: mek })
              break
       case 'cantikcek':
       case 'cekcantik':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              cantik = body.slice(1)
              const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
              const tik = can[Math.floor(Math.random() * can.length)]
              haruka.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: mek })
              break
       case 'cekwatak':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              var namao = pushname
              var prfx = await haruka.getProfilePicture(sender)
              const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']
              const wtk = watak[Math.floor(Math.random() * (watak.length))]
              const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']
              const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]
              const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']
              const sft = sifat[Math.floor(Math.random() * (sifat.length))]
              const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colmek','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
              const hby = hobby[Math.floor(Math.random() * (hobby.length))]
              const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']
              const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]
              const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']
              const typo = tipe[Math.floor(Math.random() * (tipe.length))]
              await fakestatus(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)
              break
       case 'hobby':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              hobby = body.slice(1)
              const by = hobby[Math.floor(Math.random() * hobby.length)]
              haruka.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: mek })
              break
       case 'bisakah':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              bisakah = body.slice(1)
              const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
              const keh = bisa[Math.floor(Math.random() * bisa.length)]
              haruka.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: mek })
              break
       case 'kapankah':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              kapankah = body.slice(1)
              const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
              const koh = kapan[Math.floor(Math.random() * kapan.length)]
              haruka.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: mek })
              break
              case 'jadian':
              if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              jds = []
              jdii = groupMembers
              koss = groupMembers
              akuu = jdii[Math.floor(Math.random() * jdii.length)]
              diaa = koss[Math.floor(Math.random() * koss.length)]
              teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
              jds.push(akuu.jid)
              jds.push(diaa.jid)
              mentions(teks, jds, true)
              break
       case 'cantik':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              membr = []
              const mes = groupMembers
              const msk = groupMembers
              const siaps = mes[Math.floor(Math.random() * mes.length)]
              const sips = pushname[Math.floor(Math.random() * msk.length)]
              teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`
              membr.push(siaps.jid)
              mentions(teks, membr, true)
              break
       case 'ganteng':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              membr = []
              const nus = groupMembers
              const msl = groupMembers
              const siapss = nus[Math.floor(Math.random() * nus.length)]
              const sipss = pushname[Math.floor(Math.random() * msl.length)]
              teks = `*Yang Paling Ganteng Adalah :* @${siapss.jid.split('@')[0]}`
              membr.push(siapss.jid)
              mentions(teks, membr, true)
              break
       case 'babi':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              membr = []
              const meg = groupMembers
              const mge = groupMembers
              const ba = meg[Math.floor(Math.random() * meg.length)]
              const bi = pushname[Math.floor(Math.random() * mge.length)]
              teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
              membr.push(ba.jid)
              mentions(teks, membr, true)
              break
       case 'beban':
       if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
              membr = []
              const nge = groupMembers
              const tod = groupMembers
              const beb = nge[Math.floor(Math.random() * nge.length)]
              const an = pushname[Math.floor(Math.random() * tod.length)]
              teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
              membr.push(beb.jid)
              mentions(teks, membr, true)
              break
//Absen
case 'mulaiabsen':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
					if (fs.existsSync(`./database/${from}.json`)) {
						reply(`Sesi absen sudah dimulai sebelumnya\n*${prefix}cekabsen* - untuk melihat list absen`)
					} else {
						var seeData = fs.readdirSync('./database/');
						var listed = []
						var expAbsen = moment().add(Number('30'), "minutes").unix();
						for (let i in seeData) {
							listed.push(seeData[i].replace(".json", ""));
						}
						if (!listed.includes(from)) {
							const objekAbsen = {
								status: true,
								expired_on: expAbsen,
								pushabsen: [],
							}
							fs.writeFile(`./database/${from}.json`, JSON.stringify(objekAbsen, null, 2),
							(e) => {
								if (e) return console.log(e);
								reply(`Absensi tanggal: *${time}*\n\nKetik *hadir/izin/sakit*\n*${prefix}cekabsen* - untuk melihat list absensi\n*${prefix}hapusabsen* - untuk menghapus sesi absen\n\n(n) Waktu absensi 30 menit!`)
							})
						}
					}
					break        
case 'cekabsen':
				case 'listabsen':
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
			if (!isGroupAdmins) return reply(lang.admin(groupName))
					if (fs.existsSync(`./database/${from}.json`)) {
						var db_absen = JSON.parse(fs.readFileSync(`./database/${from}.json`));
						numberAbs = 1
						teks = `Absen Group Jam *${time}*\nTotal Yang Absen: ${db_absen.pushabsen.length}\n\n`
						for (let i = 0; i < db_absen.pushabsen.length; i++) {
							teks += `*${numberAbs++}.* ${db_absen.pushabsen[i].name} ( *${db_absen.pushabsen[i].kehadiran}* )\n`
						}
						reply(`${teks}\n_Silahkan ketik *hadir/izin/sakit*_\nWaktu Absensi Sampai : ${moment(db_absen.expired_on * 1000).format('HH:mm:ss')} WIB`)
					} else {
						reply('Tidak ada sesi absen yang berlangsung!')
					}
					break
//Anime
case  'awoo':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
anu = await fetchJson(`https://waifu.pics/api/sfw/awoo`)
buffer = await getBuffer(anu.url)
haruka.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./image/Riych.jpg'), caption: "Nih kak!\nJan lupa follow instagram : @riychh"})
break
case  'blowjob':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
anu = await fetchJson(`https://nekos.life/api/v2/img/blowjob`)
buffer = await getBuffer(anu.url)
haruka.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./image/Riych.jpg'), caption: "Nih kak!\nJan lupa follow instagram : @riychh"})
break
case  'hentai': 
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
haruka.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./image/Riych.jpg'), caption: "Nih kak!\nJan lupa follow instagram : @riychh"})
break
case  'megumin':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
anu = await fetchJson(`https://waifu.pics/api/sfw/megumin`)
buffer = await getBuffer(anu.url)
haruka.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./image/Riych.jpg'), caption: "Nih kak!\nJan lupa follow instagram : @riychh"})
break
case  'neko':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
anu = await fetchJson(`https://waifu.pics/api/nsfw/neko`)
buffer = await getBuffer(anu.url)
haruka.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./image/Riych.jpg'), caption: "Nih kak!\nJan lupa follow instagram : @riychh"})
break 
case  'trapnime':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			if (!isGroup) return reply(lang.group())
anu = await fetchJson(`https://waifu.pics/api/nsfw/trap`)
buffer = await getBuffer(anu.url)
haruka.sendMessage(from, buffer, image, { quoted: mek, thumbnail: fs.readFileSync('./image/Riych.jpg'), caption: "Nih kak!\nJan lupa follow instagram : @riychh"})
break
case 'ahegao':
case 'ass':
case 'bdsm':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'jahy':
case 'masturbation':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
let wowu = (await axios.get(`https://raw.githubusercontent.com/jepribarus/JB-Api/main/nsfw/${command}.json`)).data
          let wawa = wowu[Math.floor(Math.random() * (wowu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wawa))
    	  const botak = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buttosss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButtonsMessages = {

            contentText: `© Riych-Uhuy`,

            buttons: buttosss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: botak.message.imageMessage

            }

            await haruka.sendMessage(from, ButtonsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'waifu':
    case 'loli':
    case 'husbu':
    case 'milf':
    case 'cosplay':
    case 'wallml':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
          let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
    	  const bb = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buttonnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButtonssMessages = {

            contentText: `_© Riych-Uhuy_`,

            buttons: buttonnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: bb.message.imageMessage

            }

            await haruka.sendMessage(from, ButtonssMessages, MessageType.buttonsMessage, {quoted: fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'naruto': case 'kaneki': case 'shinomiya': case 'kurama': case 'rimuru': case 'akira': case 'dazai': case 'miku': case 'mikasa': case 'eren': case 'titan': case 'levi': case 'sakura': case 'hinata': case 'neji': 
                   case 'shinobu': case 'kurumi': case 'inosuke': case 'minato': case 'jiraya': case 'tsunade': case 'kiba': case 'boruto': case 'sarada': case 'sasuke': 
                    case 'madara': case 'obito': case 'obito': case 'tanjiro': case 'nezuko': case 'luffy': case 'zoro': case 'sanji':                     
                    case 'gon': case 'killua': case 'sagiri': case 'zenitsu': case 'natsu': case 'genos': case 'saitama': case 'rem':  
                     if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    let au = await hx.chara(`${command}`)
            let aca = au[Math.floor(Math.random() * au.length)]
            let ao = await getBuffer(aca)
            await haruka.sendMessage(from,ao,image,{quoted: fgif, caption: `Tuh foto ${command}`})
            break
case 'otaku':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(q)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            haruka.sendMessage(from,ram,image,{quoted:fgif,caption:rem})
            break
    case 'komiku':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(q)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break
    case 'chara':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await haruka.sendMessage(from,li,image,{quoted: fgif})
            break
//Asupan
case 'asupan':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
reply(lang.wait())
buffer = await getBuffer (`https://api.zacros.my.id/asupan/random`)
sendButVideo(from,`NIH ASUPANNYA`,'_*KLIK BUTTON DIBAWAH UNTUK MENCARI YANG LAIN*_', buffer, [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}], {quoted:mek});
break
case 'bocil':
case 'santuy':
case 'rikagusriani':
case 'ghea':
case 'ukty':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
reply (lang.wait())
anu = await fetchJson (`https://api-aprilia.herokuapp.com/api/asupan/${command}?apikey=Alphabot`)
buffer = await getBuffer (anu.result.url)
sendButVideo(from,`NIH ASUPANNYA`,'_*KLIK BUTTON DIBAWAH UNTUK MENCARI YANG LAIN*_', buffer, [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}], {quoted:mek});
break
//Cecan
case 'cecan':
            case 'hijaber':
            case 'indonesia':
            case 'malaysia':
            case 'thailand':
            case 'vietnam':
            case 'china':
            case 'korea':
            case 'jepang':
            if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                 buff = await getBuffer(`https://api.zacros.my.id/asupan/${command}`)
                          buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `Back To Menu`},type:1}]
              imageMsg = (await haruka.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'© Riych-Uhuy', imageMessage: imageMsg,
              contentText:`Nih kak!\nJan lupa follow instagram : @riychh`,buttons,headerType:4}
              prep = await haruka.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              haruka.relayWAMessage(prep)
              break
//Haram
case 'dosa1':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
				   break
				   case 'dosa2':
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
				   break
				   case 'dosa3':
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
				   break
				   case 'dosa4':
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
				   break
				   case 'dosa5':
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
				   break
				   case 'dosa6':
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
				   break
                   case 'dosa7':
                   if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
				   break
		           case 'dosa8':
		if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
				   break
				   case 'dosa10':
	
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
				   break
				   case 'dosa11':
	
			if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
				   break
				   case 'dosa12':
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
			    
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
				   break
				   case 'dosa13':
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
				   break
				   case 'dosa14':
	
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
				   break
	               case 'dosa15':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	          
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
				   break
    	           case 'dosa16':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
               
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
				   break
				   case 'dosa17':
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
				   break
				   case 'dosa18':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
				   break
				   case 'dosa19':
				 
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
				   break
				   case 'dosa20':
			
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
				   break
				   case 'dosa21':
				 if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
				   break
				   case 'dosa22':
		if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
				   break
				   case 'dosa23':
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
				   break
				   case 'dosa24':
				 
				if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				qute = fs.readFileSync('image/Riych.jpg') 
				   haruka.sendMessage(from, qute, image, { quoted: fgif, caption: '*MINING DOSA KAK?*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
				   break 
case 'restart':
             if (!isOwner) return 
             reply(lang.wait())
             exec(`node riych`)
             reply('_BOT BERHASIL DI RESTART_')
             break
case 'shutdown':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isOwner) return reply (lang.owner(botname))
reply(`Dahh ${botname} tidur dulu`)
await sleep(3000)
haruka.close()
break
case 'buggc':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!isOwner) return reply(lang.owner(botname))
await haruka.toggleDisappearingMessages(from)
reply("yahaha")
break
//Others
case 'ssweb':  
                   if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                   if (args.length < 1) return reply(`[] Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(lang.wait())
                   anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${args.join(' ')}&apikey=hardianto`)
                   haruka.sendMessage(from, anu, image, {caption: `BERHASIL KAK`, quoted: fgif})
                   break
case 'infogempa':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
anu = await fetchJson (`https://app-botpri.herokuapp.com/api/info/gempa?apikey=Fxc7`)
aku = `INFO GEMPA\n\n*Waktu: ${anu.result.Waktu}*\n*Lintang: ${anu.result.Lintang}*\n*Bujur: ${anu.result.Bujur}*\n*Kekuatan: ${anu.result.Magnitudo}*\n*Kedalaman: ${anu.result.Kedalaman}*\n*Wilayah: ${anu.result.Wilayah}*`
buffer = await getBuffer (anu.result.Map)
haruka.sendMessage(from, buffer, image, {quoted: fgif, caption: aku})
break
case 'cekapikey':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if(!q) return reply('apikey??')
anu = await fetchJson(`https://lolhuman.herokuapp.com/api/checkapikey?apikey=${args.join(' ')}`)
teks = `*APIKEY CEK*\n\n*USERNAME :* ${anu.result.username}\n *REQUEST :* ${anu.result.requests}\n *TODAY :* ${anu.result.today}\n *AKUN TYPE :* ${anu.result.account_type}\n *EXPIRED :* ${anu.result.expired}`
haruka.sendMessage(from, teks, text, {quoted: fgif})
break
case 'delete':
case 'del':
case 'd':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
haruka.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break   
case 'meme':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
let tes = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/meme.json`)).data
let tot = tes[Math.floor(Math.random() * (tes.length))]
fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(tot))
const pbou = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
const bulonss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]
            const Bsessages = {
            contentText: `_© Riych-Uhuy_`,
            buttons: bulonss,
            footerText: `Klik Next Untuk Melanjutkan`,
            headerType: 4,
            imageMessage: pbou.message.imageMessage
            }
            await haruka.sendMessage(from, Bsessages, MessageType.buttonsMessage, {quoted : fgif})
            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'quotesanime':
  if (!isGroup) return reply(lang.group())
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
kontol = body.slice(1)
let kon = ["karater : Hachiman Hikigaya\nquotes : _Lebih baik dibenci karena menjadi dirimu sendiri, daripada dicintai karena menjadi orang lain._","karakter : Roronoa Zoro\nquotes : _Seperti itulah seorang kapten. Jika pemimpin terlalu lembek, kepada siapa lagi kita harus percaya?_","karakter : Monkey D. Luffy\nquotes : _Jika kau tidak mau mengambil risiko, kau tidak dapat menciptakan masa depan._","karakter : Hatake Kakashi\nquotes : _Pengalaman bukan jaminan untuk menang, karena tiap generasi akan selalu tumbuh lebih baik._","karakter : Izuku Midoriya\nquotes : _Jangan khawatirkan apa yang dipikirkan orang lain. Tegakkan kepalamu dan melangkahlah ke depan._","karakter : sora\nquotes : _Hidup bukanlah permainan keberuntungan. Jika kau ingin menang, kau harus bekerja keras._","karakter : Koro Sensei\nquotes : _Ujian memberikan kesempatan yang bagus untuk mengetahui arti menang dan kalah atau kuat dan lemah. Raihlah kesuksesan dan kemunduran sebanyak yang kalian bisa, murid-muridku!_","karakter : Yukino Yukinoshita\nquotes : _Banyak orang gagal karena mereka tidak memahami usaha yang diperlukan untuk menjadi sukses._","karakter : killua\nquotes : _Kalau kau terus berfikir dan tak melakukan apa-apa, kau akan tertinggal jauh._","karakter : tanaka-kun\nquotes : _Kalau itu tidak bisa diselesaikan dengan usaha, jangan berusaha._","karakter : Kaori Miyazono\nquotes : _Kita harus menjalani hidup kita sepenuhnya. Kamu tidak pernah tahu, kita mungkin sudah mati besok._","karakter : naruto uzumaki\nquotes : _jika Kau tidak menyukai takdir Mu, jangan menerimanya. Sebaliknya, miliki keberanian untuk mengubahnya sesuai keinginan Mu._","karakter : Houtarou Oreki\nquotes : _Aku tidak peduli jika tidak ada yang menyukaiku. Aku tidak diciptakan di dunia ini untuk menghibur semua orang._","karakter : Satoshi Fukube\nquotes : _Aku tidak peduli jika tidak ada yang menyukaiku. Aku tidak diciptakan di dunia ini untuk menghibur semua orang._","karakter : Tanaka-Kun\nquotes : _Gagal itu bukan masalah, kan? Karena kalau kau gagal hari ini, masih ada besok, atau hari setelahnya, kalau perlu mungkin bisa saja butuh setahun. Hidup ini panjang, jadi meski kau tak bisa berhasil sekarang, pasti pada akhirnya kau akan berhasil._","karakter : Kayaba Akihiko\nquotes : _Kita harus mensyukuri apa yang kita punya saat ini, karena mungkin orang lain belum tentu mempunyainya._","karakter : saitama\nquotes : _Kekuatan sejati dari umat manusia adalah bahwa kita memiliki kuasa penuh untuk mengubah diri kita sendiri._","karakter : Kamado Tanjiro\nquotes : _Karena manusia bertindak atas keinginan hatinya, Hatinya pun akan terus bertambah kuat_","karakter : Doraemon\nquotes : _Lebih baik jadi orang bodoh yang tidak mengerti apa-apa, dari pada menjadi orang terpelajar yang tidak tahu jalan._","karakter : Nami\nquotes : _Hidup ini seperti pensil yang lama lama akan habis, tetapi akan meninggalkan tulisan yang indah dalam kehidupan._"]
let a = kon[Math.floor(Math.random() * kon.length)]
haruka.sendMessage(from, a, text,{quoted: fgif})
break
case 'searchgc':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (args.length < 1) return reply(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```Search Group```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
haruka.sendMessage(from, teks, text,{quoted:fgif})
})
break
case 'playstore':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (args.length < 1) return reply(`Example :\n${prefix}playstore termux`)
quer = args.join(" ")
hx.playstore(quer).then(res => {
teks = '```Play Store```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}\n`
teks += `${i.developer}`
}
reply(teks)
})
break
//Wallpaper
case 'teknologi':
                if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let asu = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/Technology.json`)).data
          let titit = asu[Math.floor(Math.random() * (asu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(titit))
    	  const agb = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const bunnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButsMessages = {

            contentText: `_© Riych-Uhuy_`,

            buttons: bunnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: agb.message.imageMessage

            }

            await haruka.sendMessage(from, ButsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
                    case 'gamer':
                if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let siap = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/GameWallp.json`)).data
          let itu = siap[Math.floor(Math.random() * (siap.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(itu))
    	  const aba = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const bonnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const BttsMessages = {

            contentText: `_© Riych-Uhuy_`,

            buttons: bonnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: aba.message.imageMessage

            }

            await haruka.sendMessage(from, BttsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
                    case 'programmer':
                if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let wia = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/Programming.json`)).data
          let hapi = wia[Math.floor(Math.random() * (wia.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(hapi))
    	  const jb = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const btnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const BtsMessages = {

            contentText: `_© Riych-Uhuy_`,

            buttons: btnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: jb.message.imageMessage

            }

            await haruka.sendMessage(from, BtsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'anime':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let wiu = (await axios.get(`https://raw.githubusercontent.com/qisyana/senku/main/storages/anime-wallpaper-pic.json`)).data
          let wii = wiu[Math.floor(Math.random() * (wiu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wii))
    	  const ab = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buonnsss = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const ButtsMessages = {

            contentText: `_© Riych-Uhuy_`,

            buttons: buonnsss,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: ab.message.imageMessage

            }

            await haruka.sendMessage(from, ButtsMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'cyber':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let war = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/CyberSpace.json`)).data
          let tipi = war[Math.floor(Math.random() * (war.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(tipi))
    	  const po = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)

            const buonssi = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]

            const BsoMessages = {

            contentText: `_© Riych-Uhuy_`,

            buttons: buonssi,

            footerText: `Klik Next Untuk Melanjutkan`,

            headerType: 4,

            imageMessage: po.message.imageMessage

            }

            await haruka.sendMessage(from, BsoMessages, MessageType.buttonsMessage, {quoted : fgif})

            fs.unlinkSync(`./${sender}.jpeg`)
            break
case 'muslim':
          if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          let sapu = (await axios.get(`https://raw.githubusercontent.com/Toni33812/RestApi/master/data/Islamic.json`)).data
          let pipi = sapu[Math.floor(Math.random() * (sapu.length))]
          fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(pipi))
    	  const pbo = await haruka.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), MessageType.image)
            const buonssoi = [{buttonId:`.${command}`,buttonText: {displayText: 'Next'}, type: 1}]
            const BsotMessages = {
            contentText: `_© Riych-Uhuy_`,
            buttons: buonssoi,
            footerText: `Klik Next Untuk Melanjutkan`,
            headerType: 4,
            imageMessage: pbo.message.imageMessage
            }
            await haruka.sendMessage(from, BsotMessages, MessageType.buttonsMessage, {quoted : fgif})
            fs.unlinkSync(`./${sender}.jpeg`)
            break
    //── 「 Fitur Rpg 」 ──//        
case 'profile': case 'rpgmenu':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
checkHealt(sender)
break
case 'mybag':
case 'cekinven': case 'myinventori':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
var reqXp  = 5000 * (Math.pow(2, getLevelingLevel(sender)) - 1)
done = (`📍 𝗣𝗿𝗼𝗳𝗶𝗹𝗲 𝗣𝗹𝗮𝘆𝗲𝗿\n • Nama : ${pushname}\n • Rank : ${role}\n • Status : ${elit}\n • Xp : ${getLevelingXp(sender)}/${reqXp}\n • Level : ${getLevelingLevel(sender)}\n🎒 𝗜𝗻𝘃𝗲𝗻𝘁𝗼𝗿𝗶 :\n • Emas : ${getEmas(sender)}🪙\n • Uang : $${(getBalance(sender, balance))}💰\n • Besi : ${getBesi(sender)}⛓️\n • Berlian : ${getDm(sender)}💎\n • Ikan : ${getFish(sender)}🎣`)
but = [{ buttonId: `!adventure`, buttonText: { displayText: 'Adventure' }, type: 1 }]
          sendButMessage(from, done, 'Inventori User', but)
break
case 'misi': case 'quest':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
 if (!isGroup) return reply(lang.group())
 if (!isPetualang) return reply('Udah join rpg belom? Kalau belom ketik .joinrpg')
 listMsg = {
 buttonText: 'LIST QUEST',
 footerText: ownername,
 description: `Hallo @${sender.split('@')[0]}, Aku Elaina-Bot adalah admin quest di group ini! \nSilahkan pilih quest yang cocok dengan levelmu!`,
 sections: [
                     {
                      "title": `Pilih Quest Sesuai Dengan Levelmu!`,
  rows: [
                          {
                              "title": "Kill Slime, Lvl vopper",
                              "rowId": "slime"
                           },
                           {
                              "title": "Kil Goblin, Lvl silver",
                              "rowId": "!goblin"
                           },
                           {
                              "title": "Kill Evil Eye, Lvl gold",
                              "rowId": "evil"
                           },
                           {
                              "title": "Kill Behemoth, Lvl platinum",
                              "rowId": "behemoth"
                           },                            
                           {
                              "title": "kill Cockatrice, Lvl Mithril",
                              "rowId": "!cockatrice"
                           },
                           {
                              "title": "Kill Four Fiends, Lvl Orichalcum",
                              "rowId": "!4fiends"
                           },
                           {
                              "title": "Kill Demond King, Lvl Adamantite",
                              "rowId": "!demondking"
                           }
                        ]
                     }],
 listType: 1
}
haruka.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:fgif})
break

case 'tess':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
bayarHealt(sender, 10)
 break
 			   case 'topleaderboard':
				case 'tlb':
		//if (!isRegistered) return reply(ind.noregis())
		//f (isBanned) return reply(ind.baned())
		if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
				if (!isGroup) return reply(lang.group())
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				//uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = ' > 𝗧𝗢𝗣 𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗 <\n\n'
               // let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 10; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n • *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        //leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n┗⊱ *Limit*: ${limitawal - _limit[i].limit}\n`
                    }
                    await reply(leaderboardlvl)
                    //await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
                break

    case 'sellikan':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          if (!isGroup) return reply(lang.group())
          if (!isPetualang) return reply('Udah join rpg belom? Kalau belom ketik .joinrpg')
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 5 * jmlh
          if (getFish(sender) < jmlh) return reply(`Ikan Kamu Tidak Cukup`)
          sellFish(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Ikan : 5\n • Status : Sukses\n • Sisa Ikan : ${getFish(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)          
          break
    case 'sellbesi':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          if (!isGroup) return reply(lang.group())
          if (!isPetualang) return reply('Udah join rpg belom? Kalau belom ketik .joinrpg')
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 10 * jmlh
          if (getBesi(sender) < jmlh) return reply(`Besi Kamu Tidak Cukup`)
          sellBesi(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Besi : 10\n • Status : Sukses\n • Sisa Besi : ${getBesi(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)                    
          break          
    case 'sellemas':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          if (!isGroup) return reply(lang.group())
          if (!isPetualang) return reply('Udah join rpg belom? Kalau belom ketik .joinrpg')
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          jmlh = body.slice(10)
          rp = 25 * jmlh
          if (getEmas(sender) < jmlh) return reply(`Emas Kamu Tidak Cukup`)
          sellEmas(sender, jmlh, balance)
          addBalance(sender, rp, balance) 
          capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Emas : 25\n • Status : Sukses\n • Sisa Emas : ${getEmas(sender)}\n • Hasil Penjualan : $${rp}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)                    
          break 
    case 'selldiamond':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          if (!isGroup) return reply(lang.group())
          if (!isPetualang) return reply('Udah join rpg belom? Kalau belom ketik .joinrpg')
          if (args.length < 1) return reply(`Kirim perintah *${prefix + command}* jumlah yang ingin dijual`)      
          ttl = body.slice(13)
          var etoo = 75 * ttl
          if (getDm(sender) < ttl) return reply(`Besi Kamu Tidak Cukup`)
          sellDm(sender, ttl)
          addBalance(sender, etoo, balance) 
          capti = (`🛒 𝗣𝗔𝗦𝗔𝗥\n • Penjual : ${pushname}\n • Pembeli : Admin\n • Harga/Dm : 75\n • Status : Sukses\n • Sisa Diamond : ${getDm(sender)}\n • Hasil Penjualan : $${etoo}`)
          but = [{ buttonId: '!myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }]
          sendButMessage(from, capti, 'sellikan', but)                    
          break                                      
    case 'mancing':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (!isPetualang) return reply('Udah join rpg belom? Kalau belom ketik .joinrpg')	
          ikannya = ikan[Math.floor(Math.random() * ikan.length)]
	      xp = Math.ceil(Math.random() * 350)          
	      coin = randomNomor(50)	    
	      ditangkap = Math.ceil(Math.random() * 50)
	      cing = await getBuffer(`https://telegra.ph/file/d9b15de4f661808dfd0b9.jpg`)
	      setTimeout( () => {
	      caption = (`「 Memancing 」\n\n • Tangkapan : ${ikannya}\n • Total Dapat : ${ditangkap} Ikan\n • MONEY : $${coin}\n • EXP : ${xp}Xp`)
          but = [
          { buttonId: '.mancing', buttonText: { displayText: 'Mancing lagi' }, type: 1 },
          { buttonId: '.myinventori', buttonText: { displayText: 'Cek Inventori' }, type: 1 }
           ]
          sendButLocation(from, caption, 'Memancing', cing, but, {quoted: mek})      
          }, 6000)
          setTimeout( () => {
		  haruka.sendMessage(from, 'Berhasil Mendapatkan Ikan. . .', text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  haruka.sendMessage(from, '🎣Meanarik kail. . .', text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  haruka.sendMessage(from, '🎣Mulai memancing. . .', text) 
		  }, 1500) // 1000 = 1s,
		  addFish(sender, ditangkap)
		  addLevelingXp(sender, xp)
		  addBalance(sender, coin, balance) 
          limitAdd(sender, limit)         
	      break
    case 'adventure':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
          if (isHealt(sender)) return reply('Healt')
          if (!isPetualang) return reply('Udah join rpg belom? Kalau belom ketik .joinrpg')		
	      ngab = ['Longsor','Letusan Gunung','Tsunami','Gempa Bumi','Meteor','Demon']
	      const sesuatu = ngab[Math.floor(Math.random() * ngab.length)]
          const dungeon =['Whetstone','Willow Field','Rodeo','Verdant Blufs','Bull Holland','Fallen Tree','Dellnort','Verona Lush','Leafy Hollow','Chilliad Dome','Garcia','Pine Valley','Santa Florals','Guvero East','Cranbarry','Junever','Aldea Malvada','Green Palms','Green Oasis','Fort Carson','Prickel Pine','Pilson Meadow','Boca Roca','Rocksore East','Camel Toe','Hanky Panky','Fern Ridge','Montgomerry','Flint Yankton','Vespucci','fortress city', 'ravines valley', 'horizon valley', 'cyber city', 'end city', 'templar city', 'pochinki', 'peak','Vertical Zone','Sentainel Country','Night City','Flush City','Royals Canyon','Blackburn','Peterborough','Tarnstead','Jarren’s','Outpost','Landow','Nearon','Kincardine','Aysgarth','Veritas','Openshaw','Bredwardine','Berkton','Wolford','Norwich','Kald','Solaris','Kilead','Pitmerden','Acomb','Eldham','Warcester','Lingmell','Kilead','Cromerth','Wingston','Garmsby','Kingcardine','Perthlochry','Frostford','Hillford','Hardersfield','Tarrin','Holmfirth','Caerleon','Elisyum','Ballaeter','Penshaw','Bradford','Wigston','Accreton','Kameeraska','Ferncombe','Kilerth','Erostey','Carran','Jongvale','Larnwick','Queenstown','Whaelrdrake','Baerney','Wingston','Arkney','Strongfair','Lowestoft','Beggar’s Hole','Shepshed','Perthlochry','Ironforge','Tywardreath','Pontheugh','Foolshope','Hull','Dalmerlington','Aucteraden','Woodpine','Millstone','Windermere','Lancaster','Kirkwall','Rotherhithe','Astrakhan','Watford','Ritherhithe','Krosstoen','Pella’s','Wish','Grimsby','Ayrith','Ampleforth','Skystead','Eanverness','Penshaw','Peatsland','Astrakane','Pontybridge','Caershire','Snowbush','Sutton','Northwich','Hogsfeet','Claethorpes','Sudbury','Cherrytown','Blue Field','Orrinshire','Aempleforth','Garrigill','Jedburgh','Eastbourne','Taedmorden','Venzor','Grasmere','Ubbin','Falls','Violl’s Garden','Glanchester','Bailymena','Arkkukari','Skargness','Cardend','Llanybydder','Faversham','Yellowseed','Carlisle','Cirencester','Aramoor','Furness','Kincardine','Rotherham','Emelle','Boroughton','Carran','Ffestiniog','Mansfield','Huthwaite','Marclesfield','Pavv','Squall’s End','Glenarm','Dragontail','Moressley','Hardersfield','Gilramore','Aria','Ecrin','Clare View Point','Blackburn','Oakheart','Doonatel','Broughton','Carlisle','Murlayfield','Nuxvar']
	      const ad = dungeon[Math.floor(Math.random() * dungeon.length)]
	      anu = fs.readFileSync('./baileys/rpg/dungeon.js');
          jsonData = JSON.parse(anu);
	      randIndex = Math.floor(Math.random() * jsonData.length);
          randKey = jsonData[randIndex];
	      hasm = await getBuffer(randKey.result)  
	      const adven = Math.ceil(Math.random() * 1000)          
	      const money = Math.ceil(Math.random() * 300)					      	      
	      setTimeout( () => {		
          caption = (`「 DEATH 」\n\n • Tempat  ${ad}\n • MONEY : $${money}\n • EXP : ${adven}Xp`)
          but = [
          { buttonId: `!myinventori`, buttonText: { displayText: 'Inventori' }, type: 1 }]
          sendButLocation(from, caption, 'Memancing', hasm, but, {quoted: mek})   
          }, 7000)
          setTimeout( () => {
		  haruka.sendMessage(from, `Awass`, text) 
		  }, 5000) // 1000 = 1s,
	      setTimeout( () => {
		  haruka.sendMessage(from, `Tiba tiba ada ${sesuatu}`, text) 
		  }, 3000) // 1000 = 1s,
		  setTimeout( () => {
		  haruka.sendMessage(from, `${pushname} sedang bertualang`, text) 
		  }, 1500) // 1000 = 1s,
		  addLevelingXp(sender, adven)
		  addBalance(sender, money, balance) 
          limitAdd(sender, limit) 
          break
   	case 'mining':
   if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit) 
   	      if (!isGroup) return reply(lang.group())                
          if (!isPetualang) return reply('Udah join rpg belom? Kalau belom ketik .joinrpg')
          pp = randomNomor(75)
          emas = randomNomor(15)
          dm = randomNomor(3)
          besi = randomNomor(50)
          done = (`Selesai Mining🚧\nlist hasil :\nEmas : ${emas}🪙\nUang : $${pp}💰\nBesi : ${besi}⛓️\nBerlian : ${dm}💎`)
          addBalance(sender, pp, balance)          
          addBesi(sender, besi)
          addEmas(sender, emas)
          addDm(sender, dm)
          mining = ('Waitt sedang menguli . . .')
		  setTimeout( () => {		//case by pebri
		  but = [{ buttonId: `!mining`, buttonText: { displayText: 'Mining again' }, type: 1 }]
          sendButMessage(from, done, 'Mining', but)
		  }, 9000) // 1000 = 1s,
		  setTimeout( () => {
		  haruka.sendMessage(from, '🚧 selesai menguli. . .🪙👷', text) 
		  }, 7000) // 1000 = 1s,
	      setTimeout( () => {
		  haruka.sendMessage(from, '🚧 menemukan emas. . .⚒️🏔️️️', text) 
		  }, 4000) // 1000 = 1s,
		  setTimeout( () => {
		  haruka.sendMessage(from, '🚧 mulai menambang. . .⚒️🏔️️', text) 
		  }, 1500) // 1000 = 1s,
		  setTimeout( () => {
		  haruka.sendMessage(from, mining, text, {quoted: mek}) 
		  }, 0) // 1000 = 1s,
	      break	          
    case 'joinrpg':
    if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
          if (!isGroup) return reply(lang.group())
		  if (isPetualang) return reply('Kamu sudah menjadi petualang')
	   	  _petualang.push(sender)
		  fs.writeFileSync('./baileys/data/inventori.json', JSON.stringify(_petualang))
		  capt = `🎉Selamat ${pushname}🎊\nKamu terdaftar sebagai petualang!\nSilahkan ketik ${prefix}rpgmenu`
		  haruka.sendMessage(from, capt, text, {quoted: mek})		
		  addInventori(sender)
	      addLevelingId(sender)
		  break        
// Sound
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound70':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
omkeh = await getBuffer(`https://hansxd.nasihosting.com/sound/${command}.mp3`)
haruka.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
break
case 'sound71':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
omkeh = await getBuffer(`https://ojankyaa.000webhostapp.com/sound/${command}.mp3`)
haruka.sendMessage(from, omkeh, MessageType.audio, { quoted: mek, mimetype: 'audio/mp4', ptt: true })
    break
// Virtex
case 'v1':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        haruka.sendMessage(from, virtex2(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
        case 'v2':
        if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        haruka.sendMessage(from, virtex3(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
        case 'v3':
        if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        haruka.sendMessage(from, virtex4(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
case 'v4':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        haruka.sendMessage(from, virtex5(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
case 'v5':
if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        haruka.sendMessage(from, virtex6(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
        case 'v6':
        if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        haruka.sendMessage(from, virtex7(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        case 'v7':
        if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
        haruka.sendMessage(from, virtex8(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
        case 'v8':
        if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        haruka.sendMessage(from, virtex9(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
        case 'v9':
        if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        haruka.sendMessage(from, ngazap(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
        case 'v10':
        if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
        haruka.sendMessage(from, emoji2(prefix), text, {quoted: fgif, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})
        break
// Random Text
case 'pantun': case 'puisi': case 'bucinquote': case 'dilanquote': case 'katasenja': case 'motivasi':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/${command}?apikey=${zenzkey}`)
	reply(txt.result.message)
	}
	break
case 'randomquote':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/random/quote?apikey=${zenzkey}`)
	reply(txt.result.message)
	}
	break
case 'quotemuslim':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/randomquote/muslim?apikey=${zenzkey}`)
	reply(txt.result.message)
	}
	break
case 'quotesgalau':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/quotes/galau?apikey=${zenzkey}`)
	reply(txt.result.message)
	}
	break
case 'creepyfact':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/creepyfact?apikey=${zenzkey}`)
	reply(txt.result.message)
	}
	break
case 'cerpen':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/cerpen?apikey=${zenzkey}`)
	reply('Judul : ' + txt.result.Judul + '\n' + 'Penulis : ' + txt.result.Penulis + '\n' + 'Sumber : ' + txt.result.sumber + '\n' + 'Cerita : ' + txt.result.cerita)
	}
	break
case 'cersex':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/cersex?apikey=${zenzkey}`)
	reply('Judul : ' + txt.result.Judul + '\n' + 'Cerita : ' + txt.result.Cerita)
	}
	break
case 'cersex2':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/cersex2?apikey=${zenzkey}`)
	haruka.sendMessage(from, await getBuffer(txt.result.Thumb), MessageType.image,{quoted: mek, caption: 'Judul : ' + txt.result.Judul + '\n' + 'Cerita : ' + txt.result.Cerita})
	}
	break
case 'huluh': case 'hilih': case 'heleh' : case 'halah': case 'reversetext':{
	if (args.length == 0) return reply(`Example: ${prefix + command} Haruka`)
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/${command}?query=${q}&apikey=${zenzkey}`)
	reply(txt.result)
	}
	break
case 'cercreepy':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fecthJson(`https://zenzapi.xyz/api/cercreepy?apikey=${zenzkey}`)
	reply('Judul : ' + txt.result.Judul + '\n' + 'Cerita : ' + txt.result.Cerita)
	}
	break
case 'faktaunik':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/faktaunik?apikey=${zenzkey}`)
	reply(txt.result)
	}
	break
case 'quotetrump':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/trumpquotes?apikey=${zenzkey}`)
	reply('En : ' + txt.result.en + '\n' + 'Id : ' + txt.result.id)
	}
	break
case 'animequote':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/animequotes?apikey=${zenzkey}`)
	reply('Anime : ' + txt.result.anime + '\n' + 'Karakter : ' + txt.result.character + '\n' + 'En : ' + txt.result.en + '\n' + 'Id : ' + txt.result.id)
	}
	break
case 'animequote2':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/animequotes2?apikey=${zenzkey}`)
	haruka.sendMessage(from, await getBuffer(txt.result.thumb), MessageType.image, {quoted: mek, caption: 'Anime : ' + txt.result.anime + '\n' + 'Karakter : ' + txt.result.character + '\n' + 'Episode : ' + txt.result.episode + '\n' + 'Quotes : ' + txt.result.quotes})
	}
	break
case 'trumpthink':{
	if (!isRiych) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
	let txt = await fetchJson(`https://zenzapi.xyz/api/trumpthink?apikey=${zenzkey}`)
	reply('En : ' + txt.result.en + '\n' + 'Id : ' + txt.result.id)
	}
	break
// Anime Search
case 'character':
if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Sakura`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\nName : ${get_result.name.full}\nNative : ${get_result.name.native}\nFavorites : ${get_result.favourites}\nMedia : \n`
                    ini_media = get_result.media.nodes
                    for (var x of ini_media) {
                        ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
                    }
                    ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
                    thumbnail = await getBuffer(get_result.image.large)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: lol, caption: ini_txt })
                    break
case 'anime':{
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\nId MAL : ${get_result.idMal}\nTitle : ${get_result.title.romaji}\nEnglish : ${get_result.title.english}\nNative : ${get_result.title.native}\nFormat : ${get_result.format}\nEpisodes : ${get_result.episodes}\nDuration : ${get_result.duration} mins.\nStatus : ${get_result.status}\nSeason : ${get_result.season}\nSeason Year : ${get_result.seasonYear}\nSource : ${get_result.source}\nStart Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\nEnd Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\nGenre : ${get_result.genres.join(", ")}\nSynonyms : ${get_result.synonyms.join(", ")}\nScore : ${get_result.averageScore}%\nCharacters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })}
                    break
case 'manga':{
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Id : ${get_result.id}\nId MAL : ${get_result.idMal}\nTitle : ${get_result.title.romaji}\nEnglish : ${get_result.title.english}\nNative : ${get_result.title.native}\nFormat : ${get_result.format}\nChapters : ${get_result.chapters}\nVolume : ${get_result.volumes}\nStatus : ${get_result.status}\nSource : ${get_result.source}\nStart Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\nEnd Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\nGenre : ${get_result.genres.join(", ")}\nSynonyms : ${get_result.synonyms.join(", ")}\nScore : ${get_result.averageScore}%\nCharacters : \n`
                    ini_character = get_result.characters.nodes
                    for (var x of ini_character) {
                        ini_txt += `- ${x.name.full} (${x.name.native})\n`
                    }
                    ini_txt += `\nDescription : ${get_result.description}`
                    thumbnail = await getBuffer(get_result.coverImage.large)
                    await haruka.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })}
                    break                     
case 'kusonime':{
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://kusonime.com/nanatsu-no-taizai-bd-batch-subtitle-indonesia/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonime?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\nJapanese : ${get_result.japanese}\nGenre : ${get_result.genre}\nSeasons : ${get_result.seasons}\nProducers : ${get_result.producers}\nType : ${get_result.type}\nStatus : ${get_result.status}\nTotal Episode : ${get_result.total_episode}\nScore : ${get_result.score}\nDuration : ${get_result.duration}\nReleased On : ${get_result.released_on}\nDesc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })}
                    break
case 'kusonimesearch':{
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\nJapanese : ${get_result.japanese}\nGenre : ${get_result.genre}\nSeasons : ${get_result.seasons}\nProducers : ${get_result.producers}\nType : ${get_result.type}\nStatus : ${get_result.status}\nTotal Episode : ${get_result.total_episode}\nScore : ${get_result.score}\nDuration : ${get_result.duration}\nReleased On : ${get_result.released_on}\nDesc : ${get_result.desc}\n`
                    link_dl = get_result.link_dl
                    for (var x in link_dl) {
                        ini_txt += `\n${x}\n`
                        for (var y in link_dl[x]) {
                            ini_txt += `${y} - ${link_dl[x][y]}\n`
                        }
                    }
                    ini_buffer = await getBuffer(get_result.thumbnail)
                    await haruka.sendMessage(from, ini_buffer, image, { quoted: mek, caption: ini_txt })
                    }
                    break
case 'otakudesu':{
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} https://otakudesu.tv/lengkap/pslcns-sub-indo/`)
                    ini_url = args[0]
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesu?apikey=${lolkey}&url=${ini_url}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\nJapanese : ${get_result.japanese}\nJudul : ${get_result.judul}\nType : ${get_result.type}\nEpisode : ${get_result.episodes}\nAired : ${get_result.aired}\nProducers : ${get_result.producers}\nGenre : ${get_result.genres}\nDuration : ${get_result.duration}\nStudios : ${get_result.status}\nRating : ${get_result.rating}\nCredit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)}
                    break
case 'otakudesusearch':{
	if (!isHaruka) return sendButMessage(from, lang.noregis(pushname), `Klik Button Untuk Verify`, [{buttonId: '.daftar',buttonText: {displayText: `Daftar`,},type: 1,}], {quoted: fgif});
                    if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)
                    query = args.join(" ")
                    get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
                    get_result = get_result.result
                    ini_txt = `Title : ${get_result.title}\nJapanese : ${get_result.japanese}\nJudul : ${get_result.judul}\nType : ${get_result.type}\nEpisode : ${get_result.episodes}\nAired : ${get_result.aired}\nProducers : ${get_result.producers}\nGenre : ${get_result.genres}\nDuration : ${get_result.duration}\nStudios : ${get_result.status}\nRating : ${get_result.rating}\nCredit : ${get_result.credit}\n`
                    get_link = get_result.link_dl
                    for (var x in get_link) {
                        ini_txt += `\n\n*${get_link[x].title}*\n`
                        for (var y in get_link[x].link_dl) {
                            ini_info = get_link[x].link_dl[y]
                            ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
                            ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
                            ini_txt += `\`\`\`Link : \`\`\`\n`
                            down_link = ini_info.link_dl
                            for (var z in down_link) {
                                ini_txt += `${z} - ${down_link[z]}\n`
                            }
                        }
                    }
                    reply(ini_txt)}
                    break

		default:
if (budy.startsWith('>')){
try {
	if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
return haruka.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('$')){
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`HarukaBot :~ ${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (budy.startsWith('=>')){
if (!(mek.key.fromMe && isOwner)) return reply(lang.owner(botname))
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined){
bang = util.format(sul)
}
return reply(bang)
}
try {
reply(util.format(eval(`;(async () => { ${konsol} })()`)))
console.log('\x1b[1;31m~\x1b[1;37m>', '[', '\x1b[1;32m EXC \x1b[1;37m', ']', time, chalk.green("=>"), 'from', chalk.green(pushname), 'args :', chalk.green(args.length))
} catch(e){
reply(String(e))
}
}                                               	
}   
} catch (e) {
e = String(e)
if (!e.includes("this.isZero") && !e.includes("jid")) {
console.log('Message : %s', chalk.green(e))
}
}
}