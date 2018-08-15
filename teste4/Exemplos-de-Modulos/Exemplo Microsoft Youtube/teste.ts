/// <reference path="Student" />

module tsbr {
    function run(student: IStudent):void {
        student.register();
    }
    var student = new Student("Loro","josé",true,68);
    run(student);
}
