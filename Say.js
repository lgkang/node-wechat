/**
 * 处理发信息
 * TODO：
 */
const { FileBox } = require('file-box');
const { UrlLink } = require('wechaty');
class Say {
    constructor(msg, bot) {
        this.msg = msg;
        this.bot = bot;
    }

    /**
     *
     * @param params  发送内容
     * string  发送消息
     * Contact 联系人
     * FileBox 文件
     * UrlLink url 链接
     * MiniProgram 微信小程序
     */
    send(params) {
        this.msg.say(params);
    }

    /**
     *
     * @param params 处理参数中的if
     * @returns {boolean}
     */
    handleIf(params) {
        let flag = true;
        // 函数的时候处理回调
        if(typeof params.if === 'function') {
            flag = params.if(this.msg, this.bot)
        }else {
            flag = !!params.if;
        }
        return flag
    }

    /**
     *
     * @param params
     * if 为true时，则发送消息
     */
    file(params) {
        if(this.handleIf(params)) {
            const fileBox = FileBox.fromUrl(params.url);
            this.send(fileBox);
        }
    }
    link(params) {
        const urnLink = new UrlLink({
            description: '链接的描述',
            thumbnailUrl: '缩略图链接',
            title: '标题',
            url: '链接地址'
        })
    }
}

module.exports = Say;
