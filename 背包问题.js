// 二维数组
const testWeightBagProblem = (weight, value, size) => {
    const len = weight.length;
    let dp = Array(len).fill().map(() => Array(size + 1).fill(0));

    // 初始化
    // 当j < weight[0]的时候，dp[0][j]应该是0，因为背包容量比编号0的物品重量还小。这一步已经在数组定义时初始化为0
    // 当j >= weight[0]时，dp[0][j] 应该是value[0]，因为背包容量放足够放编号0物品。
    for (let j = weight[0]; j <= size; j++) {
        dp[0][j] = value[0];
    }

    // weight数组的长度len就是物品个数
    for (let i = 1; i < len; i++) { // 遍历物品
        for (let j = 0; j <= size; j++) {  // 遍历背包容量
            if (j < weight[i]) dp[i][j] = dp[i-1][j];
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - weight[i]] + value[i]);
            }
        }
    }
    console.table(dp);
    console.log(dp[len - 1][size]);
    return dp[len - 1][size];
}

// 一维数组
const testWeightBagProblem1 = (weight, value, size) => {
    const len = weight.length;
    let dp = new Array(size + 1).fill(0);

    // dp[j]表示：容量为j的背包，所背的物品价值可以最大为dp[j]
    // weight数组的长度len就是物品个数
    for (let i = 0; i < len; i++) { // 遍历物品
        for (let j = size; j >= weight[i]; j--) {  // 遍历背包容量，倒序遍历时为了保证物品i只被放入一次
            dp[j] = Math.max(dp[j], dp[j - weight[i]] + value[i])
        }
    }
    console.table(dp);
    console.log(dp[size]);
    return dp[size];
}

// function test () {
//     console.log(testWeightBagProblem([1, 3, 4, 5], [15, 20, 30, 55], 6));
// }

// test();
testWeightBagProblem1([1, 3, 4, 5], [15, 20, 30, 55], 6)