import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath, pathToFileURL } from 'url'

global.owner = [['51978194933', 'SYSSOLUTIONS💻⁷', true],
['50558124470', 'Ender owner🖥️', true]]

global.botNumberCode = '51978194933'
global.confirmCode = ''

global.suittag = ['573027866596']
global.mods = ['51978194933']
global.prems = ['51978194933']


global.packname = 'ᥫ᭡nexus bot-𝙈𝘿ꨄ'
global.author = 'eder'
global.wm = '𓆩Nexus bot-𝐌𝐃𓆪'
global.wm2 = '✦nexus bot-𝗠𝗗✦'
global.jxtxn = 'eder'
global.cb = '⏤͟͟͞͞Nexus bot-ＭＤ'

//Las Versiones Y Entre Otros
global.vs = 'V2'
global.library = 'Baileys'
global.baileys = '@whiskeysockets/baileys'
global.lenguaje = 'Español'
global.menudi = ['⛶','❏','⫹⫺']
global.dev = 'SYSSOLUTIONS'
global.devnum = '+51978194933'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => { unwatchFile(file)
console.log(chalk.yellow('Se actualizo el archivo config.js'))
import(`${file}?update=${Date.now()}`)
})
