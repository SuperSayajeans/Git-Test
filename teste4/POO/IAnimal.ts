module poo {
    export interface IAnimal {
        tamanho: number;
        peso: number;
        idade?: number;
        fazerBarulho(): void;
        getBarulho(): string;
    }
}