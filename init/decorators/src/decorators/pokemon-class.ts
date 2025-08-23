function printToConsole(value: Function, context: ClassDecoratorContext) {
    console.log("Decorator class: ", value);
}

@printToConsole
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co';
    public name: string

    constructor(name: string){
        this.name = name;
    }

}

