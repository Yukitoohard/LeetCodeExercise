const isDup = (str) => {
    const len = str.length;
    for (let i = 0; i < len; i++) {
        const cur = str.charAt(i);
        for (let j = i + 1; j < len; j++) {
            if (cur === str.charAt(j)) {
                return true;
                // return i;  // 返回重复字符的位置
            }
        }
    }
    return false;
}