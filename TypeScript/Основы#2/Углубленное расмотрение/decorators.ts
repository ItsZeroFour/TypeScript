// Simplle class example
class User {
    
    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }

}


// =-Типы Декораторов-=


// Base structore of Decorator :)
// Начальная реализация докараторов
// const logClass = () => ()

// ★Class Decorator★
const logClass = (constructor: Function) => {
    console.log(constructor);
}

@logClass
class User1 { //Применяеи декоратор (вызываем)

    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }

}

// ★Property Decorator★
const logProperty = (target: Object, propertyKey: string | symbol) => {
    console.log(propertyKey);
}

class User2 {
    @logProperty
    secret: number

    constructor(public name: string, public age: number, secret: number) {
        this.secret = secret
    }

    public getPass(): string {
        return `${this.name}${this.age}`
    }

}

// ★Method Decorator★
const logMethod = (
    target: Object,
    propertyKey: string | symbol,
    description: PropertyDescriptor

) => {
    console.log(propertyKey);
}

class User3 {

    constructor(public name: string, public age: number) {}

    @logMethod
    public getPass(): string {
        return `${this.name}${this.age}`
    }

}

// ★get/set Decorator★
const logSet = (
    target: Object,
    propertyKey: string | symbol,
    descriptor: PropertyDescriptor
) => {
    console.log(propertyKey); // Result of call: "myAge"
}

class User4 {

    constructor(public name: string, public age: number) {}

    @logSet     //  <--- Apply decorator for set
    set myAge(age: number) {
        this.age = age
    }

}


// =-Factory Decorator-=
function factory(value: any) {          // Factory
    return function (target: any) {     // Decorator
        console.log(target);            // Decorator logic
    }
}

/*
    ★Фабрика декораторов это функция, которая возвращает выражение и которая будет вызвана декоратором во время исполнения программы★
*/

// ★Applying Factory Decorator★
const enumerable = (value: boolean) => {
    return (
        target: any,
        propertyKey: string | symbol,
        descriptor: PropertyDescriptor
    ) => {
        descriptor.enumerable = value
    }
}

class User5 {

    constructor(public name: string, public age: number) {}

    @enumerable(false)          //  <--- Call decorator factory with argument
    public getPss(): string {
        return `${this.name}${this.age}`
    }

}



//  ★Docorator composition syntax★
//  ★Apply decorators (one line)★
// @f @g x

// ★Apply decorators (multiple lines)★
// @f
// @g
// x

/*
    ★Композиция - это применение нескольких декораторов (пример нескольких декораторов сверху)★
*/

const first = () => {
    console.log('first() completing');
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log('first() called');
    }
}

const second = () => {
    console.log('second() completing');
    return (target: any, propertyKey: string | symbol, descriptor: PropertyDescriptor) => {
        console.log('second() called')
    }
}

// Apply and call two factory decorators
class User6 {

    constructor(public name: string, public age: number) {}

    @first()
    @second()
    public getPass(): string {
        return `${this.name}${this.age}`
    }

}

// Call result^             
// "first() completing"     // Factory 1
// "second() completing"    // Factory 2
// "second() called"        // Decorator 2
// "first() called"         // Decorator 1