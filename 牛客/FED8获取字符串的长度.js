/*
描述
如果第二个参数 bUnicode255For1 === true，则所有字符长度为 1
否则如果字符 Unicode 编码 > 255 则长度为 2

示例1
输入：
'hello world, 牛客', false
输出：
17
*/

function strLength(s, bUnicode255For1) {
    /* 简单直观的解题办法
    首先：我觉得读懂题目很重要，刚开始我就没怎么读懂
    1、它的意思是如果传进来的参数（也就是bUnicode255For1）是传的true，
    那么字符串中每个字符按照1的长度来计算
    2、如果传进来的是flase，那么再对每一个字符进行判断，如果它们的unicode编码>255(a=97)，那么该字符就按照2的长度来计算。
    3、比较啰嗦，但是理解了就很简单了。（获取编码数：charCodeAt（index） //可以拿到指定位置的编码数）*/
    if (bUnicode255For1) {
        return s.length;
    }
    let len = 0;
    for (let i=0; i < s.length; i++) {
        len += s.charCodeAt(i) > 255 ? 2 : 1;
    }
    return len;
}