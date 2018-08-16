/// <reference path="Cachorro.ts" />
// tsc main.ts --outFile main.js

module poo{
    let dog1 = new Cachorro(4,20,undefined,"pintcher");
    let canino1 = new Canino(12,2);
    dog1.fazerBarulho();
    if(dog1.domesticavel)
        console.log("Doguinho é amigo");
    canino1.fazerBarulho();
}