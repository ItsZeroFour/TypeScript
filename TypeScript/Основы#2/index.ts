// Boolean Type
let isCompleted: boolean = false

// isCompleted = 42 - ERROR!
// isCompleted = '42' - ERROR!

isCompleted = true

//В boolen можно засписывать только boolean (с типом boolean) значения, как и перезаписывать их 

// ====================================================

// Number


let decimal: number = 6
let integer: number = 7.1
let hex: number = 0xf00d
let binary: number = 0b1010
let octal: number = 0o744

// ===================================================

// STRING


let Name: string = 'Alex'

// template string

let sentance: string = `Hello, my name is ${ Name }!`

// ==================================================

// null & underfined
// JAVASCRIPT:

typeof null
typeof undefined

// TypeScript:

let u: undefined = undefined
let n: null = null



// =================================================

// Void Type

let greetUser = (): void => {
    alert('Hello TypeScript!')
}

// ERROR! 

// let greetUser: void = () => {
//     alert ('Hello TypeScript!')
// }