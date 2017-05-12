 /***
  * 玩家牌的基类 
  * 子类为：附子、手牌、已打出去的牌 */
  
var BaseCards = function(){    
    
    this.mCards = null;  //牌的数据  由子类自己定义数据类型
}; 

var pro = BaseCards.prototype;  

/***获取数量
 * this.mCards数据不为数组类型需要子类自己实现
 */
pro.getCnt = function(){    
    return _.size(this.mCards);
};

/***获取牌数据
 * return [x,x,x,x];
 */
pro.getCards = function(){
    return this.mCards;
};

/* ===============================================================
 *                              子类自己实现 
 * ===============================================================
 * */

/*** 初始化数据 */
pro.init = function( _data ){
    //子类自己实现
}; 

/***新增数据 */
pro.add = function( jData ){
    //子类自己实现
};

/***移除数据 */
pro.remove = function( jData ){
    //子类自己实现
};

/***移除最后一个数据 */
pro.removeLast = function( jData ){
    //子类自己实现
}; 

/***移除第一个数据 */
pro.removeFrist = function( jData ){
    //子类自己实现
}; 

module.exports = BaseCards;