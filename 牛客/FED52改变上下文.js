/**
 * 描述
将函数 fn 的执行上下文改为 obj，返回 fn 执行后的值
示例1
输入：
alterContext(function() {return this.greeting + ', ' + this.name + '!'; }, {name: 'Rebecca', greeting: 'Yo' })
输出：
Yo, Rebecca!
 */

function alterContext(fn, obj) {
    return fn.call(obj);  // 此处无this，传参要有this，改变上下文不用
}