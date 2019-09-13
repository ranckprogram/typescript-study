// 问号 非必传

// 默认值

function buildName(firstName: string = "ranck2", lastName: string): string {
  return firstName + ' ' + lastName;
}

const result1 = buildName('1', '2')

// const result2 = buildName('ranck')  ?: 可选
const result3 = buildName(undefined, "hehe")
console.log(result1, '==', result3)

// 剩余参数

function add(a: number, ...arr: number[]): number {
  return a + arr.reduce((prev, current) => {
    return prev + current
  }, 0)
}
console.log(add(1, 5))
console.log(add(1, 5, 67, 2))