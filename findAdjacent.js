function randomCharacter() {
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var charactersLength = characters.length;
    return characters.charAt(Math.floor(Math.random() * charactersLength));
}

function createBoard(m, n) {
    let eachRowOfBoard = [];
    let board = [];

    for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
            eachRowOfBoard.push(randomCharacter());
        }
        board.push(eachRowOfBoard);
        eachRowOfBoard = [];
    }
    return board;
}

function createWord(wordLength) {
    let word = '';
    for (let i = 0; i < wordLength; i++) {
        word += randomCharacter();
    }
    return word;
}

// Create Case
const m = 4;
const n = 10;
const word = createWord(2);
const board = createBoard(m, n);

// Solving
let result = false;
const posFirstChar = [];
let posNextChar = []; //position of adjacent

// Find position of first character
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (board[i][j] === word[0]) posFirstChar.push({x: i, y: j});
    }
}

function checkAdjacent(x1, y1, nextWord) { 
    const adjPos = [
        {x: x1 - 1, y: y1}, 
        {x: x1 + 1, y: y1}, 
        {x: x1, y: y1 - 1}, 
        {x: x1, y: y1 + 1}
    ];

    for (let i = 0; i < adjPos.length; i++) {
        if (adjPos[i].x >= 0 && adjPos[i].y >= 0 && adjPos[i].x <= (n - 1) && adjPos[i].y <= (m - 1)) {
            if (board[adjPos[i].x][adjPos[i].y] === nextWord) {
                posNextChar.push({x: adjPos[i].x, y: adjPos[i].y});
            }
        }
    }
}

for (let i = 0; i < posFirstChar.length; i++) {
    checkAdjacent(posFirstChar[i].x, posFirstChar[i].y, word[1]); // find position of next character
    if (posNextChar.length == 0) {
        result = false;
    } else {
        for (let j = 2; j < word.length; j++) {
            if (posNextChar.length == 0) {
                result = false;
            } else {
                let posTemp = [...posNextChar]
                posNextChar = [];
                for (let k = 0; k < posTemp.length; k++) {
                    checkAdjacent(posTemp[k].x, posTemp[k].y, word[j]);
                    // console.log(posNextWord);
                }
            }
        }
        if (posNextChar.length > 0) {
            result = true;
            break;
        }
    }
}

console.log(word);
console.log(board);
console.log(result);
