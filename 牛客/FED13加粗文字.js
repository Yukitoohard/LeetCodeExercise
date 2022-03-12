/** 使用一个标签将“牛客网”三个字加粗显示 */

// <p><strong>牛客网</strong>，程序员必备求职神器</p>

let p = document.getElementsByTagName('p')[0];
p.innerHtml = p.innnerText.replace("牛客网", "<strong>牛客网</strong>")
