var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/// <reference path="Canino.ts" />
/// <reference path="IDomesticavel.ts" />
var poo;
(function (poo) {
    var Cachorro = /** @class */ (function (_super) {
        __extends(Cachorro, _super);
        function Cachorro(tamanho, peso, idade, raça) {
            var _this = _super.call(this, tamanho, peso, idade) || this;
            _this.tamanho = tamanho;
            _this.peso = peso;
            _this.idade = idade;
            _this.raça = raça;
            _this.domesticavel = true;
            if (raça)
                _this.raça = raça;
            return _this;
        }
        Cachorro.prototype.fazerBarulho = function () {
            console.log("Bark bark");
        };
        Cachorro.prototype.getBarulho = function () {
            return "Bark bark";
        };
        return Cachorro;
    }(poo.Canino));
    poo.Cachorro = Cachorro;
})(poo || (poo = {}));
/// <reference path="Cachorro.ts" />
var poo;
(function (poo) {
    var dog1 = new poo.Cachorro(4, 20, undefined, "pintcher");
    var canino1 = new poo.Canino(12, 2);
    dog1.fazerBarulho();
    canino1.fazerBarulho();
})(poo || (poo = {}));
