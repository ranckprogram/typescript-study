// 问号 非必传
// 默认值
function buildName(firstName, lastName) {
    if (firstName === void 0) { firstName = "ranck2"; }
    return firstName + ' ' + lastName;
}
var result1 = buildName('1', '2');
// const result2 = buildName('ranck')  ?: 可选
var result3 = buildName(undefined, "hehe");
console.log(result1, '==', result3);
// 剩余参数
function add(a) {
    var arr = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        arr[_i - 1] = arguments[_i];
    }
    return a + arr.reduce(function (prev, current) {
        return prev + current;
    }, 0);
}
console.log(add(1, 5));
console.log(add(1, 5, 67, 2));
