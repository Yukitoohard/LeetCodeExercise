/* 
描述
为 Array 对象添加一个去除重复项的方法

示例1
输入：
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN]

输出：
[false, true, undefined, null, NaN, 0, 1, {}, {}, 'a']
*/

// 方法一 没有去除{}诶
let arr1 = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
const helper = (arr) => {
    if (!(arr instanceof Array)) {
        return "Not an Array";
    }
    let res = [], len = arr.length, flag = true;

    for(let i=0; i<len; i++) {
        if (res.indexOf(arr[i]) == -1) {
            if (arr[i] !== arr[i]) {
                if (flag) {
                    res.push(arr[i]);
                    flag = false;
                }
            }
            else {
                res.push(arr[i]);
            }
        }
    }
    return res;
}
console.log(helper(arr1));

// 方法二 很暴力 没有去除{}和NaN
/*
let arr1 = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
const helper = (arr) => {
    if (!(arr instanceof Array)) {
        return "Not an Array";
    }
    let res = [arr[0]];
    for (let i=0; i<arr.length; i++) {
        let flag = true;
        for (let j=0; j<res.length; j++) {
            if (arr[i] === res[j]) {
                flag = false;
                break;
            }
        }
        if (flag) {
            res.push(arr[i]);
        }
    }
    return res;
}
console.log(helper(arr1));
*/

// 方法三 也没有去除{}而且第一个NaN也被去除了
/*
let arr1 = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
const helper = (arr) => {
    if (!(arr instanceof Array)) {
        return "Not an Array";
    }
    const res = arr.filter((item, index, arr) => {
        return arr.indexOf(item) === index;
    })
    return res;
}
console.log(helper(arr1));
*/

// 方法四：还是没有去除{}
/* let arr1 = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
const helper = (arr) => {
    if (!(arr instanceof Array)) {
        return "Not an Array";
    }
    return [...new Set(arr)];
}
console.log(helper(arr1));
*/

// 方法五：依旧没有去除{}
/* let arr1 = [false, true, undefined, null, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
const helper = (arr) => {
    if (!(arr instanceof Array)) {
        return "Not an Array";
    }
    return Array.from(new Set(arr));
}
console.log(helper(arr1));
*/