/*
描述
css 中经常有类似 background-image 这种通过 - 连接的字符，通过 javascript 设置样式的时候需要将这种样式转换成 backgroundImage 驼峰格式，请完成此转换功能
1. 以 - 为分隔符，将第二个起的非空单词首字母转为大写
2. -webkit-border-image 转换后的结果为 webkitBorderImage
示例1
输入：
'font-size'
输出：
fontSize
*/

function cssStyle2DomStyle(sName) {
    let chars = sName.split('');
    //判断第一个是不是 '-'，是的话就删除
    if (chars.indexOf('-') == 0) {
        chars.splice(0, 1);
    }
    //处理剩余的'-'
    for (let i=0; i < sName.length; i++) {
        if (chars[i] == '-') {
            chars.splice(i, 2, chars[i+1].toUpperCase());
            // chars[i] = chars[i].toUpperCase();
        }
    }
    return chars.join('');

    // 方法二：正则
    return sName.replace(/\-[a-z]/g, function(a, b) {
        return b == 0 ? a.replace('-', '') : a.replace('-', '').toUpperCase();
    })
}