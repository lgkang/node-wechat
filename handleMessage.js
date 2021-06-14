module.exports = (msg, bot) => {
    console.log(msg)
    console.log(`Message: ${msg}`);
    const type = msg.type();
    switch (type){
        case 7:
            handleLogic(msg, bot);
            break;
    }
}

function handleLogic(msg, bot){
    const text = msg.text();
    console.log(text)
    switch (text){
        case '测试':
            msg.say('这就是测试吗')
            break
        default:
            msg.say('没有对应的指令')
            break;
    }
}
