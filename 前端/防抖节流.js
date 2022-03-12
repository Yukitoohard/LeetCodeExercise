// https://www.jianshu.com/p/f9f6b637fd6c
// https://juejin.cn/post/6894535259544059917#chapter-one
// 函数防抖（debounce），就是指触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
// 简单的说，当一个动作连续触发，则只执行最后一次。
// 打个比方，坐公交，司机需要等最后一个人进入才能关门。每次进入一个人，司机就会多等待几秒再关门。

// 函数节流（throttle）限制一个函数在一定时间内只能执行一次。
// 举个例子，乘坐地铁，过闸机时，每个人进入后3秒后门关闭，等待下一个人进入。

// 函数防抖的简单实现
/*
防抖：任务频繁触发的情况下，只有任务触发的间隔超过指定间隔的时候，任务才会执行。
举例：

监听拖拽滚动条，然后频繁向下滚动信息，会变得很慢，很迟钝。
点击提交表单后，用户在结果还没出来的时候重复触发。

简单来说：某件事你并不想它太过频繁触发，那么设置一个定时器，每次进来的时候都清除原本的定时器，然后重新开始计时。
*/
function debounce(func) {
    // 设置定时器
    // 设置一个闭包，返回一个方法
    // 如果反复进来，清空前面的定时器，再重新设置一遍
    let timer = null;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, arguments);
        }, 1000);
    };
};

// 函数节流的简单实现
function throttle(func) {
    let timer = true;

    return function() {
        if (!timer) {
            return;
        }

        timer = false;
        setTimeout(() => {
            func.apply(this, arguments);
            timer = true;
        }, 1000);
    };
};

// 防抖+节流（时间戳版节流）
/*
防抖有时候因为触发太过频繁，导致一次响应都没有。
所以希望固定的时间必定给用户一个响应，于是就有了防抖+节流的操作。

设置 last 记录定时器开始的时间
设置 timer 表示一个定时器
获取当前时间 now
如果当前时间 - 开始时间小于延迟时间，那么就防抖
否则设置时间到了，执行函数
*/

function throttle(fn, delay) {
    let last = 0, timer = null;
    return function(...args) {
        let now = new Date();
        if (now - last < delay) {
            clearTimeout(timer);
            setTimeout(function() {
                last = now;
                fn.apply(this, args);
            }, delay);
        }
        else {
            // 这个时候表示时间到了，必须给响应
            last = now;
            fn.apply(this, args);
        }
    }
}
