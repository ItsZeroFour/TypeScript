// Все значения переменных

import { type } from "express/lib/response"

let isFetching: boolean = true
let isLoading: boolean = false

let int: number = 42
let float: number = 4.2
let num: number = 3e10

let message: string = 'Hello TypeScript'

let numberArray: number[] = [1, 43, 5, 3, 5, 2, 1, 4]
let numberArray2: Array<number> = [1 , 4, 5, 3, 2, 4, 5]

let words: string[] = ['Hellow', 'TS']

// Записывание и строки и цифр
let contact: [string, number] = ['Vladilen', 1234567]

// Перезапись из числа в строку
let variable: any = 42

variable = 'New String'
variable = []

// Функции

function sayMyName(name: string): void {
    console.log(name);
}

sayMyName('Haizenberg')

// Never

function throwError(message: string): never {
            throw new Error(message)
}

// БЕСКОНЕЧНЫЙ ЦИКЛ

// function infinite(): never {
//     while (true) {

//     }
// }

// Типы

type Login = string

let login: Login = 'admin'
// let login2: Login = 2

type ID = string | number

let id1: ID = 1234
let id2: ID = '1234'
// let id3: ID = true

type SomeType = string | null | undefined
