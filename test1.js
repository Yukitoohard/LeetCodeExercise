const debounce = (fn, delay) => {
    let timer = null;
    if (timer) {
        clearTimeout(timer);
    }
    else {
        timer = setTimeout(fn, delay);
    }
}

const throttle = (fn, delay) => {
    let valid = true;
    return function () {
        if (!valid) {
            return false;
        }
        valid = false;
        setTimeout(() => {
            fn();
            valid = true;
        }, delay);
    }
}

const coins = (arr) => {
    

}