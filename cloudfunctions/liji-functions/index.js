const userHandler = require('./services/user');
const bookHandler = require('./services/book');
const giftReceiveHandler = require('./services/giftReceive');
const giftOutHandler = require('./services/giftOut');
const friendHandler = require('./services/friend');
const sponsorHandler = require('./services/sponsor');
const issueHandler = require('./services/issue');

// 云函数入口函数
exports.main = async (event, context) => {
    switch (event.type) {
       case 'userOpenid': // 获取用户openid
            return await userHandler.userOpenid(event, context);
        case 'getBookPage': // 分页获取礼簿
            return await bookHandler.page(event, context);
        case 'addBook': //添加礼簿
            return await bookHandler.add(event, context);
        case 'updateBook': // 更新礼簿
            return await bookHandler.update(event, context);
        case 'deleteBook': // 删除礼簿
            return await bookHandler.delete(event, context);
        case 'computedTotalGiftReceive': // 计算收礼总计
            return await giftReceiveHandler.total(event, context);
        case 'addGiftReceive': // 添加收礼
            return await giftReceiveHandler.add(event, context);
        case 'updateGiftReceive': // 更新收礼
            return await giftReceiveHandler.update(event, context);
        case 'deleteGiftReceive': // 删除收礼
            return await giftReceiveHandler.delete(event, context);
        case 'computedTotalGiftOut': // 计算送礼总计
            return await giftOutHandler.total(event, context);
        case 'addGiftReceive': // 添加送礼
            return await giftOutHandler.add(event, context);
        case 'updateGiftOut': // 更新送礼
            return await giftOutHandler.update(event, context);
        case 'deleteGiftOut': // 删除送礼
            return await giftOutHandler.delete(event, context);
        case 'getFriends': // 获取全部亲友
            return await friendHandler.getList(event, context);
        case 'addFriend': // 添加亲友
            return await friendHandler.add(event, context);
        case 'updateFriend': // 更新亲友
            return await friendHandler.update(event, context);
        case 'deleteFriend': // 删除亲友
            return await friendHandler.delete(event, context);
        case 'getSponsors': // 获取全部赞助名单
            return await sponsorHandler.getList(event, context);
        case 'addSponsor': // 添加赞助名单
            return await sponsorHandler.add(event, context);
        case 'updateSponsor': // 更新赞助名单
            return await sponsorHandler.update(event, context);
        case 'deleteSponsor': // 删除赞助名单
            return await sponsorHandler.delete(event, context);
        case 'getIssuePage': // 分页获取讨论
            return await issueHandler.page(event, context);
        case 'updateIssue': // 更新讨论
            return await issueHandler.update(event, context);
        case 'deleteIssue': // 删除讨论
            return await issueHandler.delete(event, context);
    }
};
