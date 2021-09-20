// getPass() - делаем пароль

// Simple class example
class Users {

    constructor(public name: string, public age: number) {}

}

let Jab = new Users('Jab', 25)

Jab //Name: Jab, age: 25


// Static property
class Users1 {

    static secret = 12345

    constructor(public name: string, public age: number) {}

}

// Example of call static property
Users1.secret

class Users3 {
    static secret = 12345

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${this.age}`
    }

}

let Jeb = new Users3('Jeb', 25)

Jeb.getPass()

// Complited code
// class Users4 {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     getPass() {
//         return this.name + Users1.secret
//     }
// }
// Users1.secret = 1234

// Class example
class Users5 {

    private nickName: string = 'BroneShurik'
    static secret = 12345

    constructor(public name: string, public age: number) {}

    getPass(): string {
        return `${this.name}${this.age}`
    }

}

// Inheritance example
class BroneShurik1 {

    name: string = 'Alexander'

}

let max = new Users5('Max', 20)
// let Dima = new Users5(25) - ERROR т.к. мы не передали имя

// Решение этой проблемы

class Dima extends Users5 {

    name: string = 'Dima'

    constructor(age: number) {
        super('name', age)
    }
    
}

let max1 = new Users5('Max', 20)
let Dima1 = new Users5('Dima', 25) 


// Personal method in inherited class
class Jacob extends Users5 {
    name: string = 'Jacob'

    constructor(age: number) {
        super('Jacob', age)
    }

    getPass(): string {
        return `${this.age}${this.name}${Users5.secret}`
    }

}

let Jacob2 = new Jacob(21)

Jacob2.getPass() // "21Jacob12345"

// ========================================

abstract class Users6 {

    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string
}

// let William = new Users6('William', 17) - ERROR! - Невозможно создать экземпляр абстрактного класса!
// Абстрактный класс используется только для создания наследников

// Create class using Abstraction
/*
    Error:
    Класс Liam не является абстрактным, не реализует наследственный
     обстрактный элемент "getPass" класса "Users6"
*/

/*
class Liam extends Users6 {

    name: string = 'Liam'

    constructor(age: number) {
        super('Liam', age)
    }

}
*/

// Abstract class example
abstract class Users7 {

    constructor(public name: string, public age: number) {}

    greet(): void {
        console.log(this.name);
    }

    abstract getPass(): string

}

// let Liam = new Users7('Liam', 22) - Error - невозможно создать экземпляр абстрактного класса

// Realization of 'getPass' method
class Mason extends Users5 {

    name: string = 'Mason'

    constructor(age: number) {
        super('Mason', age)
    }

    getPass(): string {
        return `${this.age}${this.name}`
    }

}

// Mason.greet()
// Mason.getPass()




