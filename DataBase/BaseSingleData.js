/****************
 * 单个人的游戏信息
 *  */
var BaseSingleData = function( serverData ){
    this.mFuZis = null;
    this.mOuts  = null;
    this.mHands = null;
    this.mWalls = null;
}; 

var pro = BaseSingleData.prototype;

module.exports = BaseSingleData;