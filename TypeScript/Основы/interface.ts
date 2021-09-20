// ИНТЕРФЕЙСЫ

interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

let rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: '#ccc'
}

let rect2: Rect = {
    id: '1234',
    size: {
        width: 10,
        height: 5
    }
}

rect2.color = 'black'
// rect2.id = '321'

let rect3 = {} as Rect
let rect4 = <Rect>{} 

// =-----=====-----=

interface RectWithArea extends Rect {
    getArea: () => number
}

let rect5: RectWithArea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// =----------=-----------=

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()
    setTime(date: Date): void {
        this.time = date
    }
}

// -=-==================-=-

interface Styles {
    [key: string]: string
}

let css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
}