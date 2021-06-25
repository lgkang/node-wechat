const {onError} = require('./utils');
const {Say} = require('./Say');
let say = null
module.exports = (msg, bot) => {
    console.log(msg)
    console.log(`Message: ${msg}`);
    say = new Say(this.msg, this.bot)
    const type = msg.type();
    const typeEnum = bot.Message.Type || {
        Text: 7
    };
    switch (type){
        // 发送文字消息
        case typeEnum.Text:
            handleTextLogic(msg, bot);
            break;
        case typeEnum.Image:
    }
}

/**
 * 处理发送过来的文字逻辑
 * @param msg 发送的消息
 * @param bot wechaty 实例
 */
async function handleTextLogic(msg, bot){
    try {
        const text = msg.text();
        // 获取发信息的联系人
        const contact = msg.from();
        // 如果是群发送的消息，则room有值
        const room = msg.room();
        // 群发送
        if (room) {
            const topic = await room.topic();
            console.log(`${topic} Contact: ${contact.name()} say: ${text}`);
            const marked = await msg.mentionSelf();
            // 如果自己被@
            if(marked) {
                console.log(`marked: ${text}`)
                // TODO: 被@处理指令
                // 获取消息提到的联系人列表
                const contactList = msg.mention();
                console.log('消息提到的联系人列表')
                console.log(contactList)
            }

        } else {
            //TODO: 自己逻辑指令
            console.log(`${contact.name()} say: ${text}`);
            // 如果是自己给自己发消息，就回发一条
            if(msg.self()){
                say(`自己 say: ${text}`)
            }
        }
    }catch (e) {
        onError(e, '获取消息错误')
    }
}
