 /***牌的基类 */
var BaseCards = function(){
    
    this.mData = null;
}; 

var pro = BaseCards.prototype;  

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

/***获取数量
 * this.mData数据不为数组类型需要子类自己实现
 */
pro.getCnt = function(){    
    return _.size(this.mData);
};

module.exports = BaseCards;