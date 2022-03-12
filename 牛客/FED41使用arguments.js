/**
 * 描述
函数 useArguments 可以接收 1 个及以上的参数。请实现函数 useArguments，返回所有调用参数相加后的结果。本题的测试参数全部为 Number 类型，不需考虑参数转换。
示例1
输入：
1, 2, 3, 4
输出：
10
 * 
 */

function useArguments() {
    let sum = 0;
    for (let i=0; i<arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

function useArguments2() {
    // let arr = Array.from(arguments);
    let arr = Array.prototype.slice.call(arguments, 0);
    // let arr = [...arguments];
    return arr.reduce((sum, i) => {return sum += i;});
}

console.log(useArguments2(1, 2, 3, 4));