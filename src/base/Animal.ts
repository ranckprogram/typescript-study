class Animal {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

const a = new Animal("hema")

class Horse extends Animal {
  constructor() {
    super('horse');
  }
}

const h = new Horse()

console.log(h)