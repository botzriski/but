exports.limitcount = (prem, limitCounts) => {
	return`
*「 LIMIT COUNT 」*
Sisa limit : ${prem ? '1000' : `${limitCounts}`}
`
}
exports.limitend = (pushname) => {
	return`Maaf ${pushname} limit hari ini telah habis\nlimit di reset setiap jam 24:00`
}
exports.noregis = (pushname) =>{
	return` 🙅‍♀️ Halo ${pushname} lu belum daftar. Ketik .daftar dulu`
	}
exports.regis = () =>{
	return` Lu udah daftar goblok 🖕`
	}
exports.daftar = (sender, pushname, time, serialUser, totalUser) =>{
	return` *PENDAFTARAN BERHASIL*

• Nama : ${pushname}
• Nomor : ${sender.split("@")[0]}
• Waktu : ${time}
• Serial : ${serialUser}

Thanks yak udah daftar, sekarang ketik .menu untuk melihat 
fitur bot.
`
	}
exports.owner = (botname) =>{
	return` 🙅‍♀️ Command khusus owner ${botname}`
	}
exports.admin = (groupName) =>{
	return`🙅‍♀️ Command khusus admin ${groupName}`
	}
exports.adminB = () =>{
	return`⚠️ Bot bukan admin grup`
	}
exports.err = () =>{
	return`⚠️ Fitur ini sedang eror !`
	}
exports.group = () =>{
	return`🙅‍♀️ Command khusus di dalam group`
	}

exports.wait = () =>{
	return`⏳ Sedang di proses ~`
	}
exports.ok = () =>{
	return` ✅ Oke done ~`
	}
exports.welcome = () =>{
	return`
Welcome semoga gak betah terus out yah !`
      }
exports.leave = () =>{
	return`
Beban group keluar, Bye cuih`
}
exports.menu = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣ 
├ (📌) *List Menu Elaina-Bot*
│ • ${prefix}menu
│ • ${prefix}help
│
├ (‼️) *Info*
│ • ${prefix}owner
│ • ${prefix}daftar
│ • ${prefix}sewabot
│
├ (👑)*Owner*
│ • ${prefix}broadcast [text]
│ • ${prefix}antidelete [on/off]
│ • ${prefix}anticall [on/off]
│ • ${prefix}creategrup @tag
│ • ${prefix}leave
│ • ${prefix}restart
│ • ${prefix}shutdown
│ • >
│ • $
│ •  => 
│
├ (🎣) *Rpg*
│ • ${prefix}joinrpg
│ • ${prefix}quest
│ • ${prefix}mybag
│ • ${prefix}mining
│ • ${prefix}mancing
│ • ${prefix}cekinven
│ • ${prefix}adventure
│ • ${prefix}topleaderboard
│
├ (👥) *Group*
│ • ${prefix}antilink 1 / 0
│ • ${prefix}antivirtex 1 /0
│ • ${prefix}group open / close
│ • ${prefix}hidetag [text]
│ • ${prefix}tagall
│ • ${prefix}listonline
│ • ${prefix}linkgrup
│ • ${prefix}kick @tag
│ • ${prefix}setdesc [text] 
│ • ${prefix}setname [text] 
│ • ${prefix}getdeskgc
│ • ${prefix}getpp @tag
│ • ${prefix}delete [reply pesan bot]
│
│
├ (📥) *Download*
│ • ${prefix}play [query]
│ • ${prefix}song [judul lagu]
│ • ${prefix}pinterest [query]
│ • ${prefix}ytmp3 [url]
│ • ${prefix}ytmp4 [url]
│ • ${prefix}tiktok [url]
│ • ${prefix}tiktoknowm [url]
│ • ${prefix}tiktokwm [url]
│ • ${prefix}tiktokaudio [url]
│ • ${prefix}soundcloud [url]
│ • ${prefix}telesticker [url]
│ • ${prefix}spotify [url]
│ • ${prefix}spotifysearch [query]
│ • ${prefix}nhentai [code]
│ • ${prefix}nhentaipdf [code]
│ • ${prefix}nhentaisearch [query]
│
├ (⌛) *Converter*
│ • ${prefix}stiker [video/image]
│ • ${prefix}semoji 😎
│ • ${prefix}smeme [text]
│ • ${prefix}memegen [text|text2]
│ • ${prefix}attp *[proses fixed]*
│ • ${prefix}ttp *[proses fixed]*
│ • ${prefix}toptt [reply sticker]
│ • ${prefix}tomp3 [reply sticker]
│ • ${prefix}tomp4 [reply sticker]
│ • ${prefix}fast [video/vn]
│ • ${prefix}tupai [video/vn]
│ • ${prefix}vibra [video/vn]
│ • ${prefix}robot [video/vn]
│ • ${prefix}slow [video/vn]
│ • ${prefix}bass [video/vn]
│ • ${prefix}nightcore [video/vn]
│
├ (📝) *Maker Ephoto360*
│ • ${prefix}wetglass
│ • ${prefix}multicolor3d
│ • ${prefix}watercolor
│ • ${prefix}luxurygold
│ • ${prefix}galaxywallpaper
│ • ${prefix}lighttext
│ • ${prefix}beautifulflower
│ • ${prefix}puppycute
│ • ${prefix}royaltext
│ • ${prefix}heartshaped
│ • ${prefix}birthdaycake
│ • ${prefix}galaxystyle
│ • ${prefix}hologram3d
│ • ${prefix}greenneon
│ • ${prefix}glossychrome
│ • ${prefix}greenbush
│ • ${prefix}metallogo
│ • ${prefix}noeltext
│ • ${prefix}glittergold
│ • ${prefix}textcake
│ • ${prefix}starsnight
│ • ${prefix}wooden3d
│ • ${prefix}textbyname
│ • ${prefix}writegalacy
│ • ${prefix}galaxybat
│ • ${prefix}snow3d
│ • ${prefix}birthdayday
│ • ${prefix}goldplaybutton
│ • ${prefix}silverplaybutton
│ • ${prefix}freefire
│
├ (📝) *Maker Textpro*
│ • ${prefix}blackpink
│ • ${prefix}neon
│ • ${prefix}greenneon
│ • ${prefix}advanceglow
│ • ${prefix}futureneon
│ • ${prefix}sandwriting
│ • ${prefix}sandsummer
│ • ${prefix}sandengraved
│ • ${prefix}metaldark
│ • ${prefix}neonlight
│ • ${prefix}holographic
│ • ${prefix}text1917
│ • ${prefix}minion
│ • ${prefix}deluxesilver
│ • ${prefix}newyearcard
│ • ${prefix}bloodfrosted
│ • ${prefix}halloween
│ • ${prefix}jokerlogo
│ • ${prefix}fireworksparkle
│ • ${prefix}natureleaves
│ • ${prefix}bokeh
│ • ${prefix}toxic
│ • ${prefix}strawberry
│ • ${prefix}box3d
│ • ${prefix}roadwarning
│ • ${prefix}breakwall
│ • ${prefix}icecold
│ • ${prefix}luxury
│ • ${prefix}cloud
│ • ${prefix}summersand
│ • ${prefix}horrorblood
│ • ${prefix}thunder
│
├ (🗿) *Wibu*
│ • ${prefix}otaku
│ • ${prefix}komiku
│ • ${prefix}chara
│ • ${prefix}naruto
│ • ${prefix}kaneki
│ • ${prefix}rimuru
│ • ${prefix}akira
│ • ${prefix}kurama
│ • ${prefix}dazai
│ • ${prefix}miku
│ • ${prefix}mikasa
│ • ${prefix}eren
│ • ${prefix}titan
│ • ${prefix}levi
│ • ${prefix}sakura
│ • ${prefix}hinata
│ • ${prefix}neji
│ • ${prefix}shinobu
│ • ${prefix}kurumi
│ • ${prefix}rem
│ • ${prefix}minato
│ • ${prefix}jiraya
│ • ${prefix}tsunade
│ • ${prefix}kiba
│ • ${prefix}boruto
│ • ${prefix}sarada
│ • ${prefix}sasuke
│ • ${prefix}madara
│ • ${prefix}obito
│ • ${prefix}tanjiro
│ • ${prefix}nezuko
│ • ${prefix}luffy
│ • ${prefix}zoro
│ • ${prefix}sanji
│ • ${prefix}gon
│ • ${prefix}killua
│ • ${prefix}sagiri
│ • ${prefix}zenitsu
│ • ${prefix}natsu
│ • ${prefix}genos
│ • ${prefix}saitama
│ • ${prefix}inosuke
│ • ${prefix}inori
│
├ *Anime search*
│ • ${prefix}character [anime]
│ • ${prefix}anime [query]
│ • ${prefix}manga [query]
│ • ${prefix}kusonime [query]
│ • ${prefix}kusonimesearch [query]
│ • ${prefix}otakudesu [query]
│ • ${prefix}otakudesusearch [query] 
│
├ (🔞) *Nsfw & Sfw*
│ • ${prefix}waifu
│ • ${prefix}loli
│ • ${prefix}husbu
│ • ${prefix}milf
│ • ${prefix}cosplay
│ • ${prefix}wallml
│ • ${prefix}awoo
│ • ${prefix}blowjob
│ • ${prefix}hentai
│ • ${prefix}megumin
│ • ${prefix}neko
│ • ${prefix}trapnime
│ • ${prefix}ahegao
│ • ${prefix}ass
│ • ${prefix}bdsm
│ • ${prefix}cuckold
│ • ${prefix}cum
│ • ${prefix}ero
│ • ${prefix}femdom
│ • ${prefix}foot
│ • ${prefix}gangbang
│ • ${prefix}glasses
│ • ${prefix}masturbation
│ • ${prefix}orgy
│ • ${prefix}panties
│ • ${prefix}pussy
│ • ${prefix}things
│ • ${prefix}yuri
│
├ (🛹) *Fun*
│ • ${prefix}tolol
│ • ${prefix}pinter
│ • ${prefix}pintar
│ • ${prefix}asu
│ • ${prefix}bodoh
│ • ${prefix}gay
│ • ${prefix}lesby
│ • ${prefix}bajingan
│ • ${prefix}jancok
│ • ${prefix}anjing
│ • ${prefix}ngentod
│ • ${prefix}ngentot
│ • ${prefix}monyet
│ • ${prefix}mastah
│ • ${prefix}newbie
│ • ${prefix}bangsat
│ • ${prefix}bangke
│ • ${prefix}sange
│ • ${prefix}sangean
│ • ${prefix}dakjal
│ • ${prefix}horny
│ • ${prefix}wibu
│ • ${prefix}puki
│ • ${prefix}pantex
│ • ${prefix}pantek
│ • ${prefix}cekbapak 
│ • ${prefix}cekemak 
│ • ${prefix}babi 
│ • ${prefix}beban 
│ • ${prefix}apakah 
│ • ${prefix}bisakah
│ • ${prefix}kapankah
│ • ${prefix}cantik
│ • ${prefix}ganteng
│ • ${prefix}rate
│ • ${prefix}hobby
│ • ${prefix}jadian
│ • ${prefix}gantengcek
│ • ${prefix}cantikcek
│ • ${prefix}cekwatak
│
│
├ (✍️) *Education*
│ • ${prefix}nuliskiri [text]
│ • ${prefix}nuliskanan [text]
│ • ${prefix}foliokiri [text]
│ • ${prefix}foliokanan [text]
│
├ (🖼️) *Wallpaper*
│ • ${prefix}teknologi
│ • ${prefix}programmer
│ • ${prefix}gamer
│ • ${prefix}anime
│ • ${prefix}muslim
│ • ${prefix}cyber
│
├ (🎭) *Others*
│ • ${prefix}ssweb
│ • ${prefix}cekapikey [lolhuman]
│ • ${prefix}delete
│ • ${prefix}meme
│ • ${prefix}infogempa
│ • ${prefix}quotesanime
│ • ${prefix}searchgc [link]
│ • ${prefix}playstore [nama apk]
│
├ (🎮) *Game*
│ • ${prefix}tebakgambar *[msih bug]*
│ • ${prefix}suit
│ • ${prefix}family100
│ • ${prefix}caklontong
│ • ${prefix}truth
│ • ${prefix}dare
│
├ (🕌) *Islamic*
│ • ${prefix}listsurah
│ • ${prefix}alquran
│ • ${prefix}asmaulhusna
│ • ${prefix}kisahnabi
│ • ${prefix}alquranaudio
│ • ${prefix}jadwalsholat
│
├ *Random text*
│ • ${prefix}pantun 
│ • ${prefix}puisi 
│ • ${prefix}bucinquote 
│ • ${prefix}dilanquote 
│ • ${prefix}katasenja 
│ • ${prefix}motivasi
│ • ${prefix}randomquote
│ • ${prefix}quotemuslim
│ • ${prefix}quotesgalau
│ • ${prefix}creepyfact
│ • ${prefix}cerpen
│ • ${prefix}cersex
│ • ${prefix}cersex2
│ • ${prefix}huluh [text]
│ • ${prefix}hilih [text]
│ • ${prefix}heleh [text]
│ • ${prefix}halah [text]
│ • ${prefix}reversetext [text]
│ • ${prefix}cercreepy
│ • ${prefix}faktaunik
│ • ${prefix}quotetrump
│ • ${prefix}animequote
│ • ${prefix}animequote2
│ • ${prefix}trumpthink
│
├ (👀) *Asupan*
│ • ${prefix}asupan
│ • ${prefix}ukty
│ • ${prefix}ghea
│ • ${prefix}rikagusriani
│ • ${prefix}bocil
│ • ${prefix}santuy
│
├ (👧) *Cecan*
│ • ${prefix}cecan
│ • ${prefix}random
│ • ${prefix}ukhty
│ • ${prefix}santuy
│ • ${prefix}hijaber
│ • ${prefix}indonesia
│ • ${prefix}malaysia
│ • ${prefix}thailand
│ • ${prefix}vietnam
│ • ${prefix}china
│ • ${prefix}korea
│ • ${prefix}jepang
│
├ (🔞) *Haram*
│ • ${prefix}dosa1
│ • ${prefix}dosa2
│ • ${prefix}dosa3
│ • ${prefix}dosa4
│ • ${prefix}dosa5
│ • ${prefix}dosa6
│ • ${prefix}dosa7
│ • ${prefix}dosa8
│ • ${prefix}dosa9
│ • ${prefix}dosa10
│ • ${prefix}dosa11
│ • ${prefix}dosa12
│ • ${prefix}dosa13
│ • ${prefix}dosa14
│ • ${prefix}dosa15
│ • ${prefix}dosa16
│ • ${prefix}dosa17
│ • ${prefix}dosa18
│ • ${prefix}dosa19
│ • ${prefix}dosa20
│ • ${prefix}dosa21
│ • ${prefix}dosa22
│ • ${prefix}dosa23
│ • ${prefix}dosa24
│
├ (🎶) *Sound*
│ • ${prefix}sound1
│ • ${prefix}sound2
│ • ${prefix}sound3
│ • ${prefix}sound4
│ • ${prefix}sound5
│ • ${prefix}sound6
│ • ${prefix}sound7
│ • ${prefix}sound8
│ • ${prefix}sound9
│ • ${prefix}sound10
│ • ${prefix}sound11
│ • ${prefix}sound12
│ • ${prefix}sound13
│ • ${prefix}sound14
│ • ${prefix}sound15
│ • ${prefix}sound16
│ • ${prefix}sound17
│ • ${prefix}sound18
│ • ${prefix}sound19
│ • ${prefix}sound20
│ • ${prefix}sound21
│ • ${prefix}sound22
│ • ${prefix}sound23
│ • ${prefix}sound24
│ • ${prefix}sound25
│ • ${prefix}sound26
│ • ${prefix}sound27
│ • ${prefix}sound28
│ • ${prefix}sound29
│ • ${prefix}sound30
│ • ${prefix}sound31
│ • ${prefix}sound32
│ • ${prefix}sound33
│ • ${prefix}sound34
│ • ${prefix}sound35
│ • ${prefix}sound36
│ • ${prefix}sound37
│ • ${prefix}sound38
│ • ${prefix}sound39
│ • ${prefix}sound40
│ • ${prefix}sound41
│ • ${prefix}sound42
│ • ${prefix}sound43
│ • ${prefix}sound44
│ • ${prefix}sound45
│ • ${prefix}sound46
│ • ${prefix}sound47
│ • ${prefix}sound48
│ • ${prefix}sound49
│ • ${prefix}sound50
│ • ${prefix}sound51
│ • ${prefix}sound52
│ • ${prefix}sound53
│ • ${prefix}sound54
│ • ${prefix}sound56
│ • ${prefix}sound57
│ • ${prefix}sound58
│ • ${prefix}sound59
│ • ${prefix}sound60
│ • ${prefix}sound61
│ • ${prefix}sound62
│ • ${prefix}sound63
│ • ${prefix}sound64
│ • ${prefix}sound65
│ • ${prefix}sound66
│ • ${prefix}sound67
│ • ${prefix}sound68
│ • ${prefix}sound69
│ • ${prefix}sound70
│ • ${prefix}sound71
│ • ${prefix}sound72
│ • ${prefix}sound73
│ • ${prefix}sound74
│ • ${prefix}sound75
│
├ (🤡) *War*
│ • ${prefix}buggc *[proses fixed]*
│ • ${prefix}v1
│ • ${prefix}v2
│ • ${prefix}v3
│ • ${prefix}v4
│ • ${prefix}v5
│ • ${prefix}v6
│ • ${prefix}v7
│ • ${prefix}v8
│ • ${prefix}v9
│ • ${prefix}v10
│
├ (🙏) *Tanks To*
│ • Zeeoneofc
│ • Yoga
│ • Riy-Uhuy
│ • Faiz
│ • Lexxy
╰─⬣
`
}
exports.sewabot = (prefix, salam, pushname) =>{
	return`Hi ${pushname}, selamat ${salam}

╭─⬣
├ *Price List*
│ • Sewa 5k/minggu
│ • Sewa 10k/bln
│ • Sewa Permanen 25k
│
├ *Price List*
│ • Jadi Bot 30k/bln
│ • Jadi Bot + Owner 35k
│ • Buat Beli Apikey!
│
├ *Minat? Chat*
│• Sering² Donasi
│• wa.me/6281575886399
│• Instagram : @riychh
│• YouTube : RIYCH OFC
╰─⬣
`
}