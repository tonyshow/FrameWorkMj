 /**************
 * 手牌已出的牌基类 
 * */
var DataBase = require('./DataBase');
var util = require('util'); 
var BaseWalls = function( serverInfo , serverSeatInfo){

    DataBase.call(this,serverSeatInfo); 

    this.mData = -1;
}; 

util.inherits(BaseWalls, DataBase);

var pro = BaseWalls.prototype;
 
/***获取墙牌数量 */
pro.getCnt = function(){
    return this.mData;
}; 
module.exports = BaseWalls;