// 这段代码所做的事情是：如果元素中有v-if的话，就将v-if的条件取出来加入到el.ifConditions里面，如果有 v-else，v-else-if属性的话就将相应的标志位置为成true
// 匹配if属性，分别处理v-if, v-else以及v-else-if属性
const processIf = (el) => {
    // 取出v-if属性
    const exp = getAndRemoveAttr(el, 'v-if');
    if (exp) {
        // 存在v-if属性
        el.if = exp;
        // 在el的ifConditions属性中加入{exp, block}
        addIfCondition(el, {
            exp: exp,
            block: el
        });
    }
    else {
        // 不存在v-if属性
        if (getAndRemoveAttr(el, 'v-else') != null) {
            el.else = true;
        }
        const elseif = getAndRemoveAttr(el, 'v-else-if')
        if (elseif) {
            el.elseif = elseif;
        }
    }
}

// 在el的ifConditions属性中加入condition
const addIfCondition = (el, condition) => {
    if (!el.ifconditions) {
        el.ifconditions = [];
    }
    el.ifconditions.push(condition);
}