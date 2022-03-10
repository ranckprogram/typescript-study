// 函数中this  和重载

// 箭头函数的本质 ： this是函数创建时候的值


/**
 * 
 * Array<number>
 * number[]
 */
function addNums(a: number, b: Array<number>): number
function addNums(a: number, b: number): number

function addNums(a: number, b: any): number {
  if (Array.isArray(b)) {
    return a + b.reduce((prev, current) => {
      return prev + current;
    }, 0)
  } else if (typeof b === 'number') {
    return a + b
  }
}


console.log(addNums(1, 6))
console.log(addNums(1, [6, 6, 7]))