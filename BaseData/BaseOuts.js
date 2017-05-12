 /**************
 * 手牌已出的牌基类 
 * */
var BaseCards = require('./BaseCards');
var util = require('util'); 
var BaseOuts = function( ){

    BaseCards.call();

    this.mCards = [];
}; 

util.inherits(BaseOuts, BaseCards);

var pro = BaseOuts.prototype;

/***新增一组已出
 * jData.fuzi_type:已出类型(ConstsMj.FUZI_TYPE)
 * jData.cards:已出牌( [1,1,1] ) size必须大于三等于4
 */
pro.add = function( jData ){ 
    var id = jData;
    this.mCards.push(id); 
};

/***移除数据最后打的牌
 *  当我打的牌被别：杠、碰、胡、吃
 */
pro.removeLast = function(){ 
    //移除最后一位   
    this.mCards = _.initial( this.mCards );
};

module.exports = BaseOuts;