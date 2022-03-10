// 抽象类 => 不能被实例化，派生类可以实例化

// 有抽象方法的类

abstract class Department {
  name: string

  constructor(name: string) {
    this.name = name
  }

  printName() {
    console.log(`this name ${this.name}`)
  }

  abstract PrintMeeting(): void
}

class Finance extends Department {
  name: string
  constructor () {
    super("hello hahah")
  }
  PrintMeeting () {
    console.log('printMeeting ')
  }
}

const finance = new Finance();

finance.PrintMeeting()