var sudoku = require('sudoku');

export function makePuzzle(difficulty) {
    if (typeof difficulty == 'undefined') {
        difficulty = 1;
    }

    var puzzle = sudoku.makepuzzle();
    puzzle = puzzle.map(char => {
        if (char === null) 
            char = 0;
        return char;
    })

    return puzzle.join('');

}



