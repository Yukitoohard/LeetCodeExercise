/**
 * 描述
实现一个打点计时器，要求
1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
3、第一个数需要立即输出
 */

function count(start, end) {
    console.log(start);  // 立即返回第一个数
    let timer = setInterval(() => {
        if (start < end) { // 从start到end
            console.log(++start);  // 增幅为1。此处注意i++和++i的区别
        }
        else {
            clearInterval(timer);
        }
    }, 100);

    return {
        cancel() {
            clearInterval(timer);
        }
    }
}

console.log(count(1, 3));