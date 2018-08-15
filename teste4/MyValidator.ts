import { StringValidator } from "./Validator";
export module App {
    export class MyValidator implements StringValidator {
        property: number;
        isAcceptable(input: string): boolean {

            return true;
        }

        constructor(thing?: number) {
            if (thing)
                this.property = thing;
        }

    }

}