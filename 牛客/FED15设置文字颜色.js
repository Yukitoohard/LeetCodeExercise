/** 请使用嵌入样式将所有p标签设置为红色文字 */

let p = document.getElementsByTagName('p');

for (let i=0; i<p.length; i++) {
    p[i].style.color = "red";
}