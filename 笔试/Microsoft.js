function test (arr) {
    let set = {};
  let maxNum = 0; 
  let maxEle = null;
  
  for (let i=0; i<arr.length; i++) {
    let a = arr[i];
    set[a] === undefined ? set[a] = 1 : (set[a]++);
    if (set[a] > maxNum) {
      maxEle = a;
      maxNum = set[a]
    }
  }
  return maxEle;
}

let test_Arr = [2, 2, 2, 2, 2, 3, 3];
console.log(test(test_Arr));