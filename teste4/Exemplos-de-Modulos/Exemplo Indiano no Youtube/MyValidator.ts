/// <reference path="Validator.ts" />

module mainModule {
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