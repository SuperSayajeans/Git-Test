import { App } from "./MyValidator";

let instance1 : App.MyValidator = new App.MyValidator(5);
let instance2 : App.MyValidator = new App.MyValidator();

console.log(instance1.property);
console.log(instance2.property);

console.log("");
console.log(instance1.isAcceptable("xucrute"));