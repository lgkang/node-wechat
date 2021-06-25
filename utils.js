module.exports = {
    isAddMsg() {

    },
    /**
     * 全局处理错误
     * @param e
     */
    onError(e, message) {
        // TODO: 记录日志
        console.log(e);
        console.log(message);
    }
}
