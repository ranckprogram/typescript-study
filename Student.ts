interface studentInterface {
    name: String,
    age: Number,
    greeting(message: string)
}

class Student implements studentInterface {
    name: String
    age: Number
    constructor (name: string, age: number) {
        this.name = name
        this.age = age
    }
    greeting (message: string) {
        console.dir(`${message},我叫${this.name},今年 ${this.age}岁`)
    }
}

const s = new Student('ranck', 26)
s.greeting('hahah')