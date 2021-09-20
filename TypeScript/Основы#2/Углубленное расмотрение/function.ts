let createPassword = (name, age) => `${name}${age}`

createPassword('Jack', 31)

// Arguments Type
let createPassword2 = (name: string, age: number) => `${name}${age}`
 
// Multiple argument types (Задаем возросту значения числа и строки)
let createPassword3 = (name: string, age: number | string) => `${name}${age}`

createPassword('Jack', 31)
createPassword('Jack', '31')

// ======================

// Задаем дефолтные значения функции

let createPassword4 = (name: string = 'Max', age: number | string = 20) => `${name}${age}`
createPassword4('Alex', 15)
createPassword4(null)

// Function with two require arguments
// Делаем значение функции необязательным
let createPassword5 = (name: string, age: number): string => `${name}${age}`

// createPassword5('Jack') - ERROR! Надо присвоить значение age!

// Что бы сделать его необязательным - достаточно перед значение "age" поставить "age"
let createPassword6 = (name: string, age?: number) => `${name}${age}`

// ================================

// REST
let createSkills = (name, ...skills) =>
`${name}, my skils are ${skills.join()}`

// REST type
let createSkills2 = (name: string, ...skills: Array<string>) =>
`${name}, my skils are ${skills.join()}`

// Вызов функции REST с аргументами
createSkills('Alex', 'JS', 'ES6', 'React') // "Alex, my skils are JS,ES6,React"

// ======================================
// return type is string
let createPassword7 = (name: string, age: number | string): string => `${name}${age}`

// return rype is number
let sum = (first: number, second: number): number => first + second

// return type is object

let createEmptyObject = (): object => ({})

// =======================================

// Если функция не возвращает значение,то используем Void

//Если возвращает ошибку или выполняется постоянно - never

let msg = 'hello'
let error = (msg: string): never => {
    throw new Error(msg)
}

// Тип функций

let myFunc

function oldFunc(name: string): void {
    alert(`Hello ${name}`)
}

myFunc = oldFunc

let myFunc2: (firstArg: string) => void //с помощью void говорим,что функция ничего не возвращает

function oldFunc2(name: string): void {
    alert(`Hello ${name}`)
}

myFunc2 = oldFunc2

// Describle function type with wrong return type
// let myFunc3: (firstArg: string) => number

// function: oldFunc3(name: string): void {
//     alert(`Hello ${name}`)
// } - ERROR! oldFunc не совпадает с описаным типом функции

// myFunc3 = oldFunc3
