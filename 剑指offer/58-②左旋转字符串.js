/* 
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。

示例 1：
输入: s = "abcdefg", k = 2
输出: "cdefgab"

示例 2：
输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
 

限制：
1 <= k < s.length <= 10000
*/

/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
 var reverseLeftWords = function(s, n) {
    // 方法一：字符串切片
    // 时间复杂度O(N)：其中N为字符串s的长度，字符串切片函数为线性时间复杂度
    // 空间复杂度O(N)：两个字符串切片的总长度为N
    // 新建两切片字符串，并将两切片拼接为结果字符串，无冗余操作，效率最高。
    return s.substr(n, s.length) + s.substr(0, n);

    // 方法二：列表遍历拼接
    // 可简化为：
    /* let res = "";
    for (let i=n; i < n + s.length; i++) {
        res.push(s[i % s.length]);
    }
    */
    let res = [];
    for (let i=n; i < s.length; i++) {
        res.push(s[i]);
    }
    for (let i=0; i < n; i++) {
        res.push(s[i]);
    }
    return res.join('');

    // 方法三：字符串遍历拼接
    // 可简化为：
    /* let res = "";
    for (let i=n; i < n + s.length; i++) {
        res += s[i % s.length];
    }
    */
    let res = "";
    for (let i=n; i < s.length; i++) {
        res += s[i];
    }
    for (let i=0; i < n; i++) {
        res += s[i];
    }
    return res;
};

