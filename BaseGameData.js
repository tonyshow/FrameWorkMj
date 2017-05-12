/****游戏数据 */
var BaseGameData = function(){
    this.surplusWallCnt = 0;
};

var pro = BaseGameData.prototype;

/***玩家总人数 
 * 因为有可能是两个人 、三个人、四个人的游戏
*/
pro.getPlayerCnt = function(){
    //必须子类自己重写
};

/***当前剩余的墙牌数量 */
pro.getSurplusWallCnt = function(){
    return this.surplusWallCnt;
};

module.exports = BaseGameData;