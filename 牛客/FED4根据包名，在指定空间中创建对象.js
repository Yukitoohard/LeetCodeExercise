/*
描述
根据包名，在指定空间中创建对象
输入描述：
namespace({a: {test: 1, b: 2}}, 'a.b.c.d')
输出描述：
{a: {test: 1, b: {c: {d: {}}}}}
*/

/*
首先要了解命名空间
参考链接：https://blog.csdn.net/qq_40179700/article/details/101192035
*/

function namespace(oNamespace, sPackage) {
    let arr = sPackage.split('.');
    let res = oNamespace; // 保留对原始对象的引用
    
    for (let i=0; i < arr.length; i++) {
        if (arr[i] in oNamespace) { // 空间名在对象中
            if (typeof oNamespace[arr[i]] !== "object") { // 为原始值
                oNamespace[arr[i]] = {}; // 将此属性设为空对象                
            }
            //如果是个对象则保留原值
        }
        else { // 空间名不在对象中，建立此空间名属性，赋值为空
            oNamespace[arr[i]] = {};
        }
        oNamespace = oNamespace[arr[i]]; // 将指针指向下一个空间名属性
    }
    return res;
}