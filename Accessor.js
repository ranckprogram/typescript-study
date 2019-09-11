// 存取器
var password = "64564ppgfsd";
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullname", {
        get: function () {
            return this._fullname;
        },
        set: function (newName) {
            if (password === "64564ppgfsd2") {
                this._fullname = newName;
            }
            else {
                throw "password Error";
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullname = "ranck";
console.log(employee.fullname);
