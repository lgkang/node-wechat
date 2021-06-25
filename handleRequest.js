/**
 * 处理好友请求
 * @param friendship
 * @returns {Promise<void>}
 */
async function handleFriendship(friendship, bot) {
    //TODO: 逻辑
}

/**
 * 处理房间邀请
 * @returns {Promise<void>}
 * @param room
 * @param inviteeList
 * @param inviter 邀请人
 */
async function handleRoomInvitee(room, inviteeList, inviter, bot) {
    // TODO: 根据某某消息接受邀请
}


/**
 * 处理房间离开
 * @returns {Promise<void>}
 * @param room
 * @param leaverList
 * @param remover 离开的人
 */
async function handleRoomLeaver(room, leaverList, remover, bot) {
    // TODO: 逻辑
}
module.exports = {
    handleFriendship,
    handleRoomInvitee,
    handleRoomLeaver
}
