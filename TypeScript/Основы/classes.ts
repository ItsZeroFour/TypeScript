class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numberOfWeels: number = 4

//     constructor(theModel: string) {
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWeek: number = 4
    constructor(readonly model: string) {}
}

// МОДИФИКАТОРЫ

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('go');
        
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
        // this.go()
    }
}

let cat = new Cat()
cat.setVoice('Hello TypeScript!')
console.log(cat.color);

// ====------====

abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }
    info(): string {
        return 'This is info'
    }
}