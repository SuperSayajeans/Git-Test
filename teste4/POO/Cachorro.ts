/// <reference path="Canino.ts" />
/// <reference path="IDomesticavel.ts" />

module poo {
    export class Cachorro extends Canino implements IDomesticavel {
        domesticavel:boolean = true;
        constructor(public tamanho: number, public peso: number, public idade?: number, public raça?: string) {
            super(tamanho, peso, idade);
            if (raça)
                this.raça = raça;
        }
        fazerBarulho(): void {
            console.log("Bark bark");
        }
        getBarulho(): string {
            return "Bark bark";
        }
    }
}