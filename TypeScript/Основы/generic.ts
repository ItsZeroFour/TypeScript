let arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6]
let arrayOfStrings: Array<string> = ['Hello', 'World!']


function reverse<T>(array: T[]): T[] {
    return array.reverse()
}

reverse(arrayOfNumbers)
reverse(arrayOfStrings)