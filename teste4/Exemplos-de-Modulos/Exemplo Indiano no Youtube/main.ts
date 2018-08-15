/// <reference path="MyValidator.ts" />


module mainModule {


    let instance1 = new MyValidator(5);
    let instance2 = new MyValidator();
    console.log("Testando");
    console.log(instance1.property);
    console.log(instance2.property);
 
    console.log("");
    console.log(instance1.isAcceptable("xucrute"));
}