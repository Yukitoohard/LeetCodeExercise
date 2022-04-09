// A+B(3)
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputArr = [];
rl.on("line", function (input) {
    inputArr.push(input.trim());
    for (let i=0; i<inputArr.length; i++) {
        let nums = inputArr[i].split(' ');
        if (nums[0] == 0 && nums[1] == 0) break;
        console.log(parseInt(nums[0]) + parseInt(nums[1]));
    }
    // 这一步很重要！把inputArr置空，接着读取下一行
    inputArr = [];
})

// A+B(4)
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on("line", function(input) {
    inputArr.push(input.trim());
    for (let i=0; i<inputArr.length; i++) {
        let nums = inputArr[i].split(' ');
        let n = parseInt(nums[0]);
        if (n == 0) break;
        let sum = 0;
        for (let j=1; j<n+1; j++) {
            sum += parseInt(nums[j])
        }
        console.log(sum);
        inputArr = [];
    }
});

// A+B(5)
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var inputArr = [];
rl.on("line", function(input) {
    inputArr.push(input.trim());
    let n = parseInt(inputArr[0]);
    for (let i=1; i<=n; i++) {
        let nums = inputArr[i].split(' ');
        let sum = 0;
        for (let j=0; j<nums.length; j++) {
            sum += parseInt(nums[j])
        }
        console.log(sum);
        inputArr = [];
    }
});

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var inputArr = [];
var lineNum = 0;
rl.on("line", function(input) {
    inputArr.push(input);
    let nLine = parseInt(inputArr[0]);
    
    if (lineNum == nLine) {
        let arr = inputArr.slice(1);
        let nums = arr.split(' ');
        let sum = 0;
        let nNum = nums[0];
        for (let j=1; j<=nNum; j++) {
            sum += parseInt(nums[j]);
        }
        console.log(sum);
        inputArr = [];
    }
    else {
        lineNum++;
    }
    
});