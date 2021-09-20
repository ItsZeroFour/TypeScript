// Создание класса
class User {

}

class User2 {
    name: string
    age: number
    nickName: string
}

class User3 {
    name: string
    age: number
    nickName: string

    constructor(name: string, age: number, nickName: string) {
        this.name = name
        this.age = age
        this.nickName = nickName
    }
}

let Alex = new User3('Alex', 17, 'BEBRA123')

Alex // {Name: Alex, age: 17, nickName: BEBRA123}

// Class types modificators
class User4 {
    public name: string
    private nickName : string
    protected age: number
    readonly pass: number
    constructor (name: string, age: number, nickName: string,  pass: number) {
        this.name = name
        this.nickName = nickName
        this.age = age
        this.pass = pass
    }

}

let BroneShurik = new User4('Alexander', 10, 'zoro24', 228)

BroneShurik.name;
// BroneShurik.nickName - ERROR - Так как nickName является приватным
// BroneShurik.age - ERROR - Так как age является защищенным
// BroneShurik.pass = 11 - ERROR - Так как это свойство доступно только для чтения

// Сlass default properties
class User5 {
    name: string
    age: number = 13
    nickName: string = 'zoro24'

    constructor(name: string) {
        this.name = name
    }

    getPass(): string {
        return `${this.nickName}${this.age}`
    }

}

let user6 = new User5('Alexander')

user6.getPass() // zoro2413

// class User6 {
//     name: string
//     age: number = 13
//     nickName: string = 'zoro24'

//     constructor(name: string) {
//         this.name = name
//     }

//     getPass(): string {
//         return `${this.nickName}${this.age}`
//     }

// }

// let user7 = new User5('Alexander')

class User7 {
    public name: string
    public nickName: string
    public age: number
    public pass: number

    constructor(name: string, nickName: string, age: number, pass: number) {
        this.name = name
        this.nickName = nickName
        this.age = age
        this.pass = pass
    }

}

//Уменьшенная версия предыдущей конструкции
class User8 {

    constructor(
        public name: string,
        public age: number,
        public nickName: string,
        public pass: number
    ) {}

}

// Try to change private property
class User9 {
    private age: number = 20

    constructor(public name: string) {}
}

let zoro24 = new User9('Alex')

// zoro24.age = 18 - ERROR т.к оно приватное и не меняется

// -=МЕНЯЕМ ПРИВАТНОЕ СВОЙСТВО=-
class User10 {
    private age: number = 19

    constructor(public name: string) {}

    setAge(age: number) {
        this.age = age
    }

    set myAge(age: number) {
        this.age = age
    }

}

let James = new User10('James')

James.setAge(20)
James.myAge = 21

