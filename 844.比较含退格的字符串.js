/*
 * @lc app=leetcode.cn id=844 lang=javascript
 *
 * [844] 比较含退格的字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    // 方法一：两个栈，空间复杂度为O(n + m)
    /*
    let S = [], T = [];
    for (let i=0; i<s.length; i++) {
         if (s[i] != '#') S.push(s[i]);
         else if (S) {
             S.pop();
         }
    }
    for (let i=0; i<t.length; i++) {
        if (t[i] != '#') T.push(t[i]);
        else if (T) {
            T.pop();
        }
   }

   if (S.join('') == T.join('')) return true;
   return false;
   */

   // 方法一精简代码
   /*
   const getString = (s) => {
        let S = [];
        for (let i=0; i<s.length; i++) {
            if (s[i] != '#') S.push(s[i]);
            else if (S) {
                S.pop();
            }
        }
        return S.join('');
   }

   return getString(s) == getString(t)
   */

   // 方法二 双指针
   let sSkipNum = 0, tSkipNum = 0;  // 记录s和t的#的数量
   let i = s.length - 1, j = t.length - 1;  // i, j指针分别指向s, t的末位字符
   while (1) {
       // 下面两个循环把每个不需要退格的字符拿出来逐个进行比较 
       while (i >= 0) {
           // 当前字符为#，则sSkipNum自增1
           if (s[i] == '#') sSkipNum++;
           else {
               // 当前字符不是#，且sSkipNum不为0，则sSkipNum自减1
               if (sSkipNum > 0) sSkipNum--;
               // 若当前字符不是#，且sSkipNum为0，则代表当前字符不会被消除，可以用来和t中的当前字符作比较，所以跳出循环取得该字符
               else break;
           }
           i--;
       }
       while (j >= 0) {
            if (t[j] == '#') tSkipNum++;
            else { 
                if (tSkipNum > 0) tSkipNum--;
                else break;
            }
            j--;
        }
        if (i < 0 || j < 0) break;
        // 若对比过程出现s，t当前字符不匹配则遍历结束，返回false
        if (s[i] != t[j]) return false;
        // 当前字符相等，指针左移去判断下一个字符  
        i--; j--;
   }
   if (i == -1 && j == -1) return true;
   return false;
};
// @lc code=end

