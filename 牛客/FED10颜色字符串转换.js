/*
描述
将 rgb 颜色字符串转换为十六进制的形式，如 rgb(255, 255, 255) 转为 #ffffff
1. rgb 中每个 , 后面的空格数量不固定
2. 十六进制表达式使用六位小写字母
3. 如果输入不符合 rgb 格式，返回原始输入
示例1
输入：
'rgb(255, 255, 255)'
输出：
#ffffff
*/

function rgb2hex(sRGB) {
    // 首先正则验证是否是有效rgb，无效则直接返回。然后再全局正则匹配数字，最后转成16进制输出即可。
    let pattern = /rgb\((\d+),\s*(\d+),\s*(\d+)\)/;  // 每个 , 后面的空格数量不固定，所以 , 后匹配\s*
    let ret = sRGB.match(pattern);  
    // match输出的匹配的数组，匹配不到就是null，匹配成功就是第一项存放成功匹配的整个字符串，后面依次存放各个子正则表达式匹配的项
    // 这里match返回的是[
    //   'rgb(255, 255, 255)',
    //   '255',
    //   '255',
    //   '255',
    //   index: 0,
    //   input: 'rgb(255, 255, 255)',
    //   groups: undefined
    // ]
    console.log(ret);
    if (!ret) return sRGB;  // 如果输入不符合 rgb 格式，返回原始输入
    else {
        let str = '#';
        for (let i=1; i<=3; i++) {
            let m = parseInt(ret[i]);
            //(m<=255 && m>=0) ? str+=(m<16 ? '0'+m.toString(16) : m.toString(16)) : return sRGB;
            if(m<=255&&m>=0){
                str+=(m<16?'0'+m.toString(16):m.toString(16));
            }else{
                return sRGB;
            }
        }
        return str;
    }
}

console.log(rgb2hex('rgb(255, 255, 255)'));