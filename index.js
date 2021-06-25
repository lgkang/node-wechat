const { Wechaty } = require('wechaty');
const onMessage = require('./handleMessage');
const {handleFriendship, handleRoomInvitee} = require('./handleRequest');
const {onError} = require('./utils')

/**
 * ㊗主函数 一个wechaty机器人 demo，更多机器人功能见官网：wechaty.org
 * @returns {Promise<void>}
 */
async function main () {
    const bot = new Wechaty()
    bot
        .on('scan', (qrcode, status) => console.log(`Scan QR Code to login: ${status}\nhttps://wechaty.js.org/qrcode/${encodeURIComponent(qrcode)}`))
        .on('login',            user => console.log(`User ${user} logged in`))
        .on('message',       (message) => onMessage(message, bot)) // 监听微信消息
        .on('friendship', (friendship) => handleFriendship(friendship, bot)) // 监听好友请求
        .on('room-join', (...args) => handleRoomInvitee(...args, bot)) // 处理群邀请
    await bot.start()
}

main()
    .catch(e => {
        onError(e, '启动微信机器人失败')
    })
