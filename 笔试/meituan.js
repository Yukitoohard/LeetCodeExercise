// 1
// [4, 2, 1 ,3]
/*
let cards = [1, 2, 3, 4]

let res = [];
while (cards.length) {
    let item = cards.pop();
    res.unshift(item);

    let bob = res.pop();
    res.unshift(bob);

    let alice = res.pop();
    res.unshift(alice);
}

console.log(res);
*/

// 2
let n = 6, t = 5;
let nums = [5, 6, 7, 8, 9 ,10]
nums.sort((a, b) => a - b)
let cur_time = 0;
let res = 0;

for (let i=0; i < nums.length; i++) {
    if (cur_time + t <= nums[i]) {
        cur_time += t;
    }
    else res++;
}
console.log(res);