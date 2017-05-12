 /**************
 * 手牌已出的牌基类 
 * */

var BaseCards = require('./BaseCards');
var util = require('util'); 
var BaseWalls = function( ){

    BaseCards.call(); 

    this.mCards = -1;
}; 

util.inherits(BaseWalls, BaseCards);

var pro = BaseWalls.prototype;
 
/***获取墙牌数量 */
pro.getCnt = function(){
    return this.mCards;
}; 

/***移除最后一个数据 */
pro.removeFrist = function( jData ){
    
};

module.exports = BaseWalls;