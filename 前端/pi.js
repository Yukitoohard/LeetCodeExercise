const calc = (n) => {
    let x, y;
    let m = 0;

    for (let i = 0; i < n; i++) {
        x = Math.random();
        y = Math.random();
        if (x * x + y * y < 1) m++;
    }

    let pi = 4 * m / n;
    console.log(pi);
}

let n = 10000000;
calc(n);