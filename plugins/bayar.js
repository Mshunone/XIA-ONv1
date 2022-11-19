const kontol = "https://i.pinimg.com/564x/57/5c/8c/575c8cf89faea4a22e2bb0eacc12ffcc.jpg"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, kontol, `
Silahkan scan barcode di atas untuk melakukan transaksi, wajin menyertakan bukti transfer
`.trim(), wm, 'Owner', usedPrefix + 'owner', m) // Tambah sendiri kalo mau
handler.help = ['bayar']
handler.tags = ['main', 'utama']
handler.command = /^(bayar)$/i

module.exports = handler

