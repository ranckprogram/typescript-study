// 抽象类 => 不能被实例化，派生类可以实例化
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 有抽象方法的类
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("this name " + this.name);
    };
    return Department;
}());
var Finance = /** @class */ (function (_super) {
    __extends(Finance, _super);
    function Finance() {
        return _super.call(this, "hello hahah") || this;
    }
    Finance.prototype.PrintMeeting = function () {
        console.log('printMeeting ');
    };
    return Finance;
}(Department));
var finance = new Finance();
finance.PrintMeeting();
