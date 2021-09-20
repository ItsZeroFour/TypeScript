// getPass() - делаем пароль

// ★Array generic type★
const list: Array<number> = [1, 2, 3]


// ★Example of using "any"★
const getter = (data: any): any => data

getter(10)
getter('test')


const getter1 = (data: any): any => data

getter1(10).length      // underfined т.к. у числа такого свойства нет
getter1('test').length  // 4

// ★Using of generic type★
// ES6 syntax
const getter2 = <T>(data: T): T => data

// ES5 syntax
function getter3<T>(data: T): T {
    return data
}

const getter4 = <T>(data: T): T => data

// getter4(10).length   //  Свойство lendth не существует в типе "10"
getter4('test').length  //  4

// ★Generetic behavior explanation★
// For a number

// const getter5 = (data: number): number =>
// getter5(10).length       //  Свойство lendth не существует в типе "number"

// For a strin
const getter6 = (data: string): string => data
getter6('test').length

// ★Function argument type★
const getter7 = <T>(data: T): T => data

// Define type in function calling  
// getter7<number>(10).length       //  Свойство lendth не существует в типе "number"
getter7<string>('test').length      //  4

// Simple class example
class User {

    constructor(public name: string, public age: number) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }

}

// ★Generic class★
// ★Переписываем прошлый код в Generic type★
class User2<T> {
    
    constructor(public name: T, public age: T) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }

}

const Andrew = new User2('Andrew', '42')
const Anthony = new User2(123, 456)

Andrew.getPass()    //Andrew42
Anthony.getPass()   //123456

// ★Multiple generic types★
// ★Передаем строку и число★
class User3 <T, K> {

    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }

}

const Ethan = new User3 ('Ethan', '21')
const Jack = new User3 (123, 456)
const Jimmy = new User3 ('Jimmy', 13)

Ethan.getPass() //  "Ethan21"
Jack.getPass()  //  "123456"
Jimmy.getPass() //  "Jimmy13"

// ★New class method 'getSecret'★
class User4 <T, K> {

    constructor (public name: T, public age: K) {}

    public getPass(): string {
        return `${this.name}${this.age}`
    }

    // public getSecret(): number {
    //     // return this.age**2     // <--- "age must be a number" (★Error★)
    // }

}

// ★Specify generic type 'K' with key-word 'extends'★
// ★Делаем "K" только числом★
class User5 <T, K extends number> {
    
    constructor(public name: T, public age: K) {}

    public getPass(): string {
        return `${this.age}${this.age}`
    }

    public getSecret(): number {
        return this.age**2
    }
}

const Jason = new User5('Jason', 17)
const Martin = new User5(123, 456)

/*
 ★
    Error:
    Аргумент типа "string" нельзя назначить параметру типа "number"
    ↓
 ★
*/

// const Nicholas = new User5('Nicholas', '31')