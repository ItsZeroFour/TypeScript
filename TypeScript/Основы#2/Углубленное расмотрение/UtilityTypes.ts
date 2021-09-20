// ★Readonly<T>★
interface User {
    name: string
}

const user: Readonly<User> = {
    name: 'Christopher'
}

// user.name = 'David'  // Error:  Readonly доступен только для чтения


// ★Required<T>★
interface Props {
    a?: number
    b?: string
}

const obj: Props = {a: 5}               //OK

// const obj2: Required<Props> = {a: 5}    //Error: в случае указания Required - cвойства становятся обязательными


// ★Record <K, T>★
interface PageInfo {
    title: string
}

type Page = 'home' | 'about' | 'contact'

const x: Record<Page, PageInfo> = {
    about: { title: 'about' },
    contact: { title: 'contact' },
    home: { title: 'home' },
}


// ★Pick<T, K>★ - создает тип, заданное нами свойство из интерфейса Todo
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false
}


// ★Omit <T, K>★ - Удаление ненужного свойства у объекта
interface Todo {
    title: string
    description: string
    completed: boolean
}

type TodoPreview2 = {
    title: 'Clean room'
    completed: false
}


// ★Exclude <T, U>★ - Создает тип, исключая из него все типы, которые передаются в нем вторым аргументом
type T0 = Exclude<"a" | "b" | "c", "a">                         // "b" | "c"
type T1 = Exclude<"a" | "b" | 'c', "a" | "b">                   // "c"
type T2 = Exclude<string | number | (() => void), Function>     // string | number

// Extract <T, U> - Противоположность первой
type T3 = Extract<"a" | "b" | "c", "a" | "f">                   // "a"
type T4 = Extract<string | number | (() => void), Function>     // () => void

// NonNullable - Выбрасывает все несуществоющие типы (null, underfined)
type T5 = NonNullable<string | number | undefined>              // string | number
type T6 = NonNullable<string[] | null | undefined>              // string[]


// ★ReturnType<T>★ - Возвращает значение
declare function f1(): {a: number, b: string}                           
                                                                            // Что возвращает тот или иной тип:
type T7 = ReturnType<() => string>                                          // string
type T8 = ReturnType<(s: string) => void>                                   // void
type T9 = ReturnType<(<T>() => T)>                                          // {}
// type T11 = ReturnType<(T extends X, X extends number[]>() => T)>         // number[]
type T12 = ReturnType<typeof f1>                                            // {a: number, b: string}
type T13 = ReturnType<any>                                                  // any
type T14 = ReturnType<never>                                                // any
// type T15 = ReturnType<string>                                            // Error
// type T16 = ReturnType<Function>                                          // Error


// ★InstanceType<T>★
class C {
    x = 0
    y = 0
}

type T17 = InstanceType<typeof C>       // C
type T18 = InstanceType<any>            // any
type T19 = InstanceType<never>          // any
// type T20 = InstanceType<string>      // Error
// type T21 = InstanceType<Function>    // Error