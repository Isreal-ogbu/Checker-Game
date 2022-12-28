let game = [null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
]

// DOM model for this game

const cell = document.querySelectorAll('td')
let redpiece = document.querySelectorAll('h5')
let blackpiece = document.querySelectorAll('p')
const turnblack = document.querySelectorAll('.change-black')
const trunred = document.querySelectorAll('.change-red')
const divider = document.querySelector('#divider')

let turn = true;
let blacktrun = 12;
let redturn = 12;
let playerpieces;