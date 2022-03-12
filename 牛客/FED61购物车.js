/**
 * 描述
HTML模块为一个简化版的购物车，tbody为商品列表，tfoot为统计信息，系统会随机在列表中生成一些初始商品信息
1、请完成add函数，在列表后面显示items商品信息。参数items为{name: String, price: Number}组成的数组
2、请完成bind函数，点击每一行的删除按钮(包括通过add增加的行)，从列表中删除对应行
3、请注意同步更新统计信息，价格保留小数点后两位
4、列表和统计信息格式请与HTML示例保持一致
5、不要直接手动修改HTML中的代码
6、不要使用第三方库
 */

// 未理解
function add(items) {
    // items {name , price }
    let parent = document.getElementsByTagName('tbody')[0]
    var tfoot = document.getElementsByTagName('tfoot')[0]
    var len = parent.children.length
    var total = tfoot.innerText.match(/^.*\t(\d*\.?\d*)\(.*\)$/)[1]
    var price = parseFloat(total)
    var tr = ""
    for (let i in items){
            price = parseFloat((price+items[i].price).toFixed(2))
            tr += `<tr>
                    <td>${items[i].name}</td>
                    <td>${items[i].price.toFixed(2)}</td>
                    <td><a href="javascript:void(0);">删除</a></td>
                    </tr>`
            len++
    }
    
    var tf = `
             <tr><th>总计</th><td colspan="2">${price.toFixed(2)}(${len}件商品)</td></tr>
             `
    tfoot.innerHTML = tf
    parent.innerHTML = parent.innerHTML+tr
    
 }


function bind() {
    var parent = document.getElementsByTagName('tbody')[0]
    var tfoot = document.getElementsByTagName('tfoot')[0]
    parent.addEventListener('click',(event)=>{
      var len = parent.children.length
      if(event.target.tagName == 'A'){
        var price = event.target.parentElement.parentElement.innerText.match(/^.*\t(\d*\.?\d*)\t.*$/)[1]
        var total = tfoot.innerText.match(/^.*\t(\d*\.?\d*)\(.*\)$/)[1]
        price = parseFloat((parseFloat(total)-price).toFixed(2))
        var tf = `
             <tr><th>总计</th><td colspan="2">${price.toFixed(2)}(${len-1}件商品)</td></tr>
             `
        tfoot.innerHTML = tf
        event.target.parentElement.parentElement.remove()
      }
    })
}
bind()

