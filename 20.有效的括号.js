/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const n = s.length;
    if (n % 2 !== 0) { // 如果字符长度是奇数则肯定不匹配
        return false;
    }

    const pairs = new Map([ // 创建哈希表存储括号，key为右括号，value为相同类型左括号
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    let stack = [];
    
    for (let ch of s) {
        if (pairs.has(ch)) {
            if (!stack.length || stack[stack.length - 1] !== pairs.get(ch)) { 
                // 进入这个判断时，ch为当前右括号，如果栈中无左括号，或者不是相同类型的左括号
                return false;
            }
            stack.pop(); //前面判断匹配一对括号成功，则把栈顶括号弹出，继续判断下一括号
        }
        else {
            stack.push(ch); // 栈中没有该括号，压栈
        }
    }
    return !stack.length; // 如果括号全部匹配成功则栈空，!0 = true；如果没匹配成功比如"(("，则栈非空
};