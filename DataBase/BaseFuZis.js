var ConstsMj = require('./../ConstsMj');

/***附子数据基类 */
var BaseFuZis = function(){
    //this.fuZis = [ {fuzi_type:fuzi_type,cards:cards},{fuzi_type:fuzi_type,cards:cards} ];
    this.fuZis = [];
}; 

var pro = BaseFuZis.prototype;

/***新增一组附子
 * fuzi_type:附子类型(ConstsMj.FUZI_TYPE)
 * cards:附子牌( [1,1,1] ) size必须大于三等于4
 */
pro.addFuZi = function( fuzi_type , cards ){ 
    if( null == cards ){
        console.error( '请传入有效的附子牌' );
        return;
    }

    if( null == fuzi_type ){
        console.error( '请传入有效的附子类型 : ConstsMj.FUZI_TYPE.EAT' );
        return;
    }

    var cardsLength = _.size(cards);
    if( cardsLength>=3 && cardsLength <= 4  ){
        console.error( '请传入有效的附子数量当前附子cards : %s'+ JSON.stringify(cards) );
        return;
    }

    this.fuZis.push( {fuzi_type:fuzi_type,cards:cards} );
    return this.fuZis;
};

/***获取附子信息 */
pro.getFuZis = function(){
    return this.fuZis;
};

/***获取附子数量 */
pro.getFuZiCnt = function(){
    _.size(this.fuZis);
};

/***断线重连重新解析附子数据
 * serverInfo:服务器的数据
 */
pro.resetNet = function( serverInfo ){
    this.fuZis = serverInfo;
};
