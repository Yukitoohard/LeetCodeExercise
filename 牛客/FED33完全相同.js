/**
 * 描述: 判断 val1 和 val2 是否完全等同
 */

function identity(val1, val2) {
    return val1 === val2; // NaN返回false
    // return Object.is(val1, val2);  // NaN返回true
}

console.log(identity(NaN, NaN));