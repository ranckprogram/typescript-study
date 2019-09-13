// 函数中this  和重载
function addNums(a, b) {
    if (Array.isArray(b)) {
        return a + b.reduce(function (prev, current) {
            return prev + current;
        }, 0);
    }
    else if (typeof b === 'number') {
        return a + b;
    }
}
console.log(addNums(1, 6));
console.log(addNums(1, [6, 6, 7]));
