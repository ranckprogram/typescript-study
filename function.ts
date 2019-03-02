interface IStudent {
    name: String,
    age: Number,
    isFullTime: Boolean
}

function getStudentInfo (student: IStudent):String {
    return  `${student.name}同学，年龄${student.age},是${student.isFullTime}`
}

var st = {
    name: '11',
    age: 25,
    isFullTime: true
}

const message = getStudentInfo(st)
console.dir(message)