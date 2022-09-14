// 1
let str = "baiduoxiaojiabankanjiaran"
const isDup = (str) => {
    const len = str.length;
    for (let i = 0; i < len; i++) {
        const cur = str.charAt(i);
        for (let j = i + 1; j < len; j++) {
            if (cur === str.charAt(j)) {
                return true;
            }
        }
    }
    return false;
}
const subString = (str) => {
    let count = 0;
    let pattern = /[b-df-hj-np-tv-z][aeiou]{2}[b-df-hj-np-tv-z][aeiou]/
    for (let i=0; i<str.length; i++) {
        let sub = str.slice(i, i+5);
        if (!isDup(sub)) {
            if(pattern.test(sub)) {
                count++;
                console.log(sub);
            }
            else continue;
        }
    }
    
    return count;  
}

console.log(isDup("jiaba"));
console.log(subString(str));