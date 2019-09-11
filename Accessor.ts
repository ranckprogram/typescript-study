// 存取器

// tsc Accessor.ts --target es5  => 这里需要指定es5，因为默认是es3 不支持

let password = "64564ppgfsd"

class Employee {
  private _fullname: string

  get fullname() {
    return this._fullname
  }

  set fullname(newName: string) {
    if (password === "64564ppgfsd2") {
      this._fullname = newName

    } else {
      throw "password Error";
    }
  }
}

let employee = new Employee();
employee.fullname = "ranck"
console.log(employee.fullname)
