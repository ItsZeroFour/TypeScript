//Array Type
// 2 Типа записи

let list: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]

// =============================================

// Typle Type (Запись в массив строки и числа и т.п)

let x: [string, number]
x = ['hello', 12]

// One line
let y: [string, number] = ['TypeScript', 12]
// Нельзя поменять последовательность (например: написать число, когда в значении первым написал строку!)
// y = [12, 'Hello'] - ERROR!

// =============================================
// Any Type
// Запись в массив разных типов элементов

let i: [any, any] = [1, 'Hello TypeScript']
let z: Array<any> = ['Hi!', 51]

// Any type for string
let NotSure: any = false

NotSure = true             //boolean
NotSure = 32               //number
NotSure = 'Hello World!'   //string

// =============================================
//Enum Type

// Запись нескольких элементов
enum Directions {
    Up,
    Down,
    Left,
    Right
}

Directions.Up
Directions.Down
Directions.Left
Directions.Right

// Замена индексов элементов
enum Directions2 {
    Up = 4,
    Down = 10,
    Left = 12,
    Right = 32
}

// =============================================
// Never
// Function return Error

let msg = 'Hello'
let error = (msg: string): never => {
    throw new Error(msg)
} // Функция возвращает ошибку и не заканчивает свое выполнение

// Function infinite loop


// let infiniteLoop = (): never => {
//     while (true) {

//     }
// }


 //Функция вополняется (БЕСКОНЕЧНЫЙ ЦИКЛ!)

// =============================================
//Object Type
let create = (o: object | null): void => { }

// create(1) - ERROR!
// create('12') - ERROR!
create({obj: 1})

// Записывание множества значений в одну строку
let id: number | string

id = 10
id = '42'
// id = false - ERROR!

// =============================================
// Type
type Name = string //Задаем типу "Name" значение строки

let id1: Name

id1 = '42'
// id1 = 10 ERROR! - 10 не является строкой