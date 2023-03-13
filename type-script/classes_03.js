var Employee = /** @class */ (function () {
    function Employee() {
        this.firstName = 'Kundhana';
        this.lastName = 'Sree';
        this.age = 3;
        this.isLoggedIn = true;
    }
    Employee.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Employee.prototype.getAge = function () {
        return this.age;
    };
    return Employee;
}());
var empObj = new Employee();
console.log(empObj.getFullName());
console.log(empObj.getAge());
