interface User {
    name: string
    age: number
}

// ★Inteface & Type★
interface User {
    name: string
    age: number
}

type User1 = {
    name: string
    age: number
}

// ★Create object basen on Interface★
interface User {
    name: string
    age: number
}

let Noah: User = {
    name: 'Noah',
    age: 15
}

// ★Interface optional property★
interface User2 {
    name: string
    age?: number // <--- Optional
}

let Alexander: User2 = {
    name: 'Alexander'
}

/*
 ★
    Error:
    Свойство "name" отсутствует в типе "{age: number}" и является обязательным в типе "User2"
    ↓
 ★    
*/

// let Liam: User2 = {
//     age: 14
// } 

// ★Блокировка изменений★

interface User3 {
    readonly name: string // <--- Can't be change
    age: number
}

let Mason: User3 = {
    name: 'Mason',
    age: 43
}

Mason.age = 44
// Mason.name = 'Vlad' // Error: Не удалось задать свойство для name, так как это свойство только для чтения

interface User4 {
    name: string
    age: number
}

// let Jacob: User4 {
//     name: 'Jacob',
//     age: 32,
//     /*
//      ★
//      Error:
//      Невозможно повторно объявить переменную (Missing) с областью видимости Блок
//      ★
//     */
//    nickName: 'Jack',
// }

// ★Interface extendion★
interface User5 {
    name: string
    age: number
    [propName: string]: any
}

let William: User5 = {
    name: 'William',
    age: 17,
    nickName: 'BLENDER123', // Interface don't control this property
    justTest: 'test'        // Interface don't control this property
}

// ★Class Interface★
interface User6 {
    name: string
    age: number
    getPass(): string
}

// Class creation based on interface "User"
class Ethan implements User6 {
    name: string = 'Ethan'
    age: number = 24
    nickName: string = 'УбийцаКрови2011'

    getPass() {
        return `${this.name}${this.age}`
    }
}

// ★Create Class basen on multiple interface★
interface User7 {
    name: string
    age: number
}

// Separate interface with one method
interface Pass {
    getPass(): string
}

class Michae implements User7, Pass {
    name: string = 'Michae'
    age: number = 28

    getPass() {
        return `${this.name}${this.age}`
    }
}

// ★Расширение интерфейсов★
interface User8 {
    name: string
    age: number
}

interface Admin extends User8 {
    getPass(): string
}

class Adam implements Admin {
    name: string = 'Adam'
    age: number = 37

    getPass() {
        return `${this.name}${this.age}`
    }
}