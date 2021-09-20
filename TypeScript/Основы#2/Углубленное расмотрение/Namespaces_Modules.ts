// Тестовые переменные

// const SECRET: string = '12345'
// const PI: number = 3.14

// const getPass = (name: string, age: number): string => `${name}${age}`

// const isEmpty = <T>(data: T): boolean => !data

(function () {
    const SECRET: string = '12345'
    const PI: number = 3.14

    const getPass = (name: string, age: number): string => `${name}${age}`

    const isEmpty = <T>(data: T): boolean => !data
})

namespace Utils {
    const SECRET: string = '12345'
    const PI: number = 3.14

    const getPass = (name: string, age: number): string => `${name}${age}`

    const isEmpty = <T>(data: T): boolean => !data
}

// const myPass = Utils.getPass('Alexander', 21) - Свойство getpass нету в Utils

// Что бы избежать этой проблемы:
namespace Utils {

   export const SECRET: string = '12345'
   export const PI: number = 3.14

   export const getPass = (name: string, age: number): string => `${name}${age}`

   export const isEmpty = <T>(data: T): boolean => !data

}

const myPass = Utils.getPass('Alexander', 21)
const isSecret = Utils.isEmpty(Utils.SECRET)

const PI = 3

// Использование одного Namespace на несколько файлов

// Export
namespace Utils {

    export const SECRET2: string = '12345'

    export const getPass2 = (name: string, age: number): string => `${name}${age}` 

}

// Calling "Utils" namespace method
const myPass1 = Utils.getPass('Alexander', 21)

// =========================================

// Inport/Export с помощью модулей

// File object.ts
// export const SECRET: string = '12345'

// export const getPass = (name: string, age: number): string => `${name}${age}`

// // File classes.ts
// import { getPass, SECRET } from './classes'

// const myPass3 = getPass(SECRET, 21)