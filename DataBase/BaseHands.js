/**************
 * 手牌数据基类 
 * */
var DataBase = require('./DataBase');
var util = require('util');
var BaseHands = function(serverInfo , serverSeatInfo){
    DataBase.call(this,serverSeatInfo);   
    this.cantHand = [];
    this.newGetCard = -1; 
};

util.inherits(BaseHands, DataBase);

var pro = BaseHands.prototype; 

/*** 初始化数据 */
pro.init = function( _data ){
    //子类自己实现
    this.mData = _data;
};

/***新增抓一张牌会调用
 *  jData : id
 */
pro.add = function( jData ){
    var id = jData;
    this.mData.push( id );
};

/***打一张牌会调用
 * jData : 下标
 */
pro.remove = function( jData ){
    var idx = jData;
    this.mData.splice(pos,1);
};

/***设置为不可出
 * _cantHands :  [1,2,3,4]
 */
pro.setCantOutHands = function( _cantHands ){
    this.cantHand = JSON.parse( JSON.stringify(_cantHands) ) ;
};

/***获得不可出的牌
 * return [1,2,3,4]
 */
pro.getCantOutHands = function(){
    return this.cantHand;
};

/***新抓到的牌
 *  return id  为-1表示没有新牌
 */
pro.getNewGetHands = function(){
    return this.newGetCard;
};

module.exports = BaseHands;