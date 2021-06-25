module.exports = {
    isAddMsg() {

    },
    /**
     * 全局错误事件
     * @param e 获取到真实错误
     * @param message 错误提示
     */
    onError(e, message) {
        // TODO: 记录日志
        console.log(e);
        console.log(message);
    }
}
