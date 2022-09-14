const bubbleSort = (arr) => {
    let tmp = 0;
    let position = arr.length - 1;
    let len = arr.length - 1
    for (let i=0; i < arr.length; i++) {
        let flag = true;
        for (let j=0; j < len; j++) {
            if (arr[j] < arr[j + 1]) {
                tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                flag = false;
                position = j;
            }
        }
        len = position;
        if (flag) break;
    }
    return arr;
}

let testArr = [0, 3, 2, 5, 4]
// let testArr = [5, 4, 3, 2, 0]
console.log(bubbleSort(testArr));