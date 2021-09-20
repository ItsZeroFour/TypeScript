enum Directions {
    Up3,
    Down3,
    Left3,
    Right3
}

Directions.Up3      //0
Directions.Down3    //1
Directions.Left3    //2
Directions.Right3   //3

// По индексам

Directions[0]   //"Up"
Directions[1]   //"Down"
Directions[2]   //"Left"
Directions[3]   //"Right"

// Назначение индекса

enum Directions {
    Up4 = 2,
    Down4 = 5,
    Left4 = 10,
    Right4 = 12
}

// Назначение строки для значения

enum links {
    youtube = 'https://www.youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

links.vk        //https://www.youtube.com/
links.youtube   //https://vk.com/
links.facebook;  //https://facebook.com/

// (function(links) {
//     links['youtube'] = 'https://vk.com/'
//     links['vk'] = 'https://vk.com/'
//     links['facebook'] = 'https://facebook.com/'
// })(links || (links = {}))


// (function (Directions) {
//     Directions[Directions['Up4'] = 0] = "Up4"
//     Directions[Directions['Down4'] = 1] = "Down4"
//     Directions[Directions['Left4'] = 2] = "Left4"
//     Directions[Directions['Right4'] = 3] = "Right4"
// })(Directions || (Directions = {}))

// Константное перечисление (работает только с const)

const enum links1 {
    youtube = 'https://www.youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

// =======================================

const enum links2 {
    youtube = 'https://www.youtube.com/',
    vk = 'https://vk.com/',
    facebook = 'https://facebook.com/'
}

let arr = [links2.vk, links2.facebook]