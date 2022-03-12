/**
 * @param {number} n
 * @return {string}
 */
 var thousandSeparator = function(n) {
    let count = 0;
    let res = "";
    do{
        // 为什么用do...while()不用while()：因为res初始值为""，如果用while循环则不执行循环内代码，获得结果依旧是""。
        let curr = n % 10; // 获取n的最后一位
        n = Math.floor(n/10); // 通过向下取整获取n的剩下几位
        res += curr.toString(); // 把当前字符拼接到res中（顺序为n的倒序）
        count++;
        if (count  % 3 == 0 && n) {
            res += "."; // 每3位添加1个分位符
        }
    }while(n);
    
    return res.split('').reverse().join(''); // res为n的倒序字符串，先把每个字符分开再反转，最后拼接得到答案
};