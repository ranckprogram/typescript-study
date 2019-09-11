class Person {
  readonly name: string
  constructor (name: string){
    this.name = name
  }
}

const p = new Person('ranck')

// p.name = 'tony'  // 只读限制


// 