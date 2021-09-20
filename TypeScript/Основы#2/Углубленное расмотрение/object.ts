let user = {
    name: 'Alex',
    age: 22
}

// Object type using any
let user2: any = {
    name: 'Alex',
    age: 22
}

user2 = 'test'  //переобределяем значения

// Array Type
let list: Array<number> = [1, 2, 3, 4, 5]

// Define object type
let user3: { name: string, age: number} = {
    name: 'Alex',
    age: 22
}

// Переопределяем значения переменной user3:

// user3 = 'text' - ERROR!

// Additional property
let user4: { name: string, age: number} = {
    name: 'Alex',
    age: 22,
    // nickNam: 'loh' - ERROR!
}

// Что бы устронить ошибку,надо просто добавить новый тип свойства nickName

let user5: { name: string, age: number, nickName: string} = {
    name: 'Alex',
    age: 22,
    nickName: 'Ядерный хуесос5000'
}

// =================================================

// 2 object with the same types
let userInfo: { name: string, age: number, nickName: string} = {
    name: 'Misha',
    age: -10,
    nickName: 'Мишка фреде'
}

let admin: { name: string, age: number, nickName: string} = {
    name: 'Alexander',
    age: 10,
    nickName: 'BroneShurik'
} // - Данный подход не верно писать, хоть он и работает

// Правильней писать так:

// Using Type for object structure
type Person = { name: string, age: number, nickName: string}

let userInfo2: Person = {
    name: 'Dmitriy',
    age: 16,
    nickName: 'Dima228Pro'
}

let adminInfo: Person = {
    name: 'Anton',
    age: 6,
    nickName: 'AbToha228'
}

// 2 object with almost the same structure

let userInfo3: Person = {
    name: 'Dmitriy',
    age: 16,
    nickName: 'Dima228Pro'
}

// let adminInfo2: Person = {
//     name: 'Anton',
//     age: 6,
//     getPass(): string {
//         return `${this.name}${this.age}`
//     }
// } - ERROR!

// ------------------------------------

// Updating type with optical properties
// Модефецируем тип Person
type Person2 = {
    name: string,
    age: number,
    nickName?: string,
    getPass?: () => string
} //с помощью знака "?" делаем некоторые элементы необязательными