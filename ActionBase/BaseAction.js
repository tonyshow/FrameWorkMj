
/***基础动作 */
var BaseAction = function(){
    this.actionType1 = 0;				//动作类型1
	this.actionType2 = 0;				//动作类型2
	this.hui = null;						//会牌设置
	this.referAction = nil;				//可引用的其他动作
	this.conditionList = {};				//需满足的基本动作条件
}

var pro = BaseAction.prototype;

/***动作是否成立 */
pro.getResult = function(){
    //子类自己实现
	return false;
};