function getStudentInfo(student) {
    return student.name + "\u540C\u5B66\uFF0C\u5E74\u9F84" + student.age + ",\u662F" + student.isFullTime;
}
console.dir(getStudentInfo({
    name: '11',
    age: 25,
    isFullTime: true
}));
