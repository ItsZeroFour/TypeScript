interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'
key = 'age'

type User = {
    _id: number
    name: string
    email: string
    createAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email' - МОЖЕМ ПЕРЕМОННОЙ ЗАДОВАТЬ ТОЛЬКО name и email
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>

let user1: UserKeysNoMeta1 = 'name'
user1 = 'name'

