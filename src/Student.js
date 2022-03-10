var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.greeting = function (message) {
        console.dir(message + ",\u6211\u53EB" + this.name + ",\u4ECA\u5E74 " + this.age + "\u5C81");
    };
    return Student;
}());
var s = new Student('ranck', 26);
s.greeting('hahah');
