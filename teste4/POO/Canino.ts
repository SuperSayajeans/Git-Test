/// <reference path="IAnimal.ts" />

module poo{
    export class Canino implements IAnimal{
        constructor(public tamanho:number, public peso:number, public idade?: number ) {
            this.tamanho = tamanho;
            this.peso = peso;
            if(idade)
                this.idade = idade;
        }
      
        fazerBarulho(): void{
            console.log("Grrrrrrrrrrr");
        }
        getBarulho(): string{
            return "Grrrrrrrrrrr";
        }
    }
}

