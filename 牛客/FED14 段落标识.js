/** 请将下面这句话以段落的形式展示在浏览器中——“牛客网是一个专注于程序员的学习和成长的专业平台。” */

// 方法一
let body = document.getElementsByTagName('body');
body.innerHtml = body.innerText.replace("牛客网是一个专注于程序员的学习和成长的专业平台。", "<p>牛客网是一个专注于程序员的学习和成长的专业平台。</p>");

// 方法二
let p = document.createElement('p');
p.innerText = "牛客网是一个专注于程序员的学习和成长的专业平台。";
document.body.append(p);