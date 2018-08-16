/// <reference path="IAnimal.ts" />
var poo;
(function (poo) {
    var Canino = /** @class */ (function () {
        function Canino(tamanho, peso, idade) {
            this.tamanho = tamanho;
            this.peso = peso;
            this.idade = idade;
            this.tamanho = tamanho;
            this.peso = peso;
            if (idade)
                this.idade = idade;
        }
        Canino.prototype.fazerBarulho = function () {
            console.log("Grrrrrrrrrrr");
        };
        Canino.prototype.getBarulho = function () {
            return "Grrrrrrrrrrr";
        };
        return Canino;
    }());
    poo.Canino = Canino;
})(poo || (poo = {}));
