// 函数的参数的类型 和 返回值 的类型

interface Square {
  color: string
  area: number
}

interface SquareConfig {
  color?: string
  width?: number
}

function createSquare(config: SquareConfig): Square {
  let newSquare = {
    color: '#ddd',
    area: 10
  }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare;
}

let mySquare = createSquare({color: 'red', width: 20})

console.log(mySquare)