export function makePuzzle(difficulty) {
    if (typeof difficulty == 'undefined') {
        difficulty = 1;
    }

    let sudoku;


    // deadly pattern r2c4 r2c5 r9c4 r9c5 
    //sudoku = '532197684961384572748562319693748125175623498824951763257419836386275941419836257'


    // let sudokuStr = '532197684961004572748562319693748125175623498824951763257419836386275941419006257'
    let sudokuStr = '532197684961384572748562319693748125175623498824951763257419836386275941419836257'

    sudoku = sudokuStringToArray(sudokuStr)

    console.log(sudoku)

    let puzzle
    puzzle = sudoku


    console.log(puzzle)



    puzzle = readyGrid(sudoku)
    puzzle = [].concat(...puzzle);




    return puzzle.join('');

}

function sudokuStringToArray(strSudoku) {

    let grid = [];

    for (let i = 0; i < 81; i++) {
        let row = Math.floor(i / 9);
        let col = i % 9;

        if (typeof grid[row] == 'undefined') {
            grid[row] = [];
        }
        grid[row][col] = Number(strSudoku[i]);
    }

    return grid

}

function range(start, count) {
    return Array.apply(0, Array(count))
        .map((element, index) => index + start);
}

function checkGrid(grid) {
    for (let row in range(0, 9)) {
        for (let col in range(0, 9)) {
            if (grid[row][col] === 0) {
                return false
            }
        }
    }
    return true;

}

let counter = 0;

function solveGrid(grid) {
    for (let i = 0; i < 81; i++) {
        let row = Math.floor(i / 9);
        let col = i % 9;
        if (grid[row][col] === 0) {
            for (let value in range(1, 9)) {
                //Check that this value has not already be used on this row
                if (!grid[row].includes(value)) {
                    let colvalues = [
                        grid[0][col], grid[1][col], grid[2][col],
                        grid[3][col], grid[4][col], grid[5][col],
                        grid[6][col], grid[7][col], grid[8][col]
                    ];
                    //Check that this value has not already be used on this column
                    if (!colvalues.includes(value)) {
                        //Identify which of the 9 squares we are working on
                        let square = []
                        if (row < 3) {
                            if (col < 3) {
                                for (i in range(0, 3)) {
                                    square.push(grid[i][0])
                                    square.push(grid[i][1])
                                    square.push(grid[i][2])
                                }
                            } else if (col < 6) {
                                for (i in range(0, 3)) {
                                    square.push(grid[i][3])
                                    square.push(grid[i][4])
                                    square.push(grid[i][5])
                                }
                            } else {
                                for (i in range(0, 3)) {
                                    square.push(grid[i][6])
                                    square.push(grid[i][7])
                                    square.push(grid[i][8])
                                }
                            }
                        } else if (row < 6) {
                            if (col < 3) {
                                for (i in range(3, 3)) {
                                    square.push(grid[i][0])
                                    square.push(grid[i][1])
                                    square.push(grid[i][2])
                                }
                            } else if (col < 6) {
                                for (i in range(3, 3)) {
                                    square.push(grid[i][3])
                                    square.push(grid[i][4])
                                    square.push(grid[i][5])
                                }
                            } else {
                                for (i in range(3, 3)) {
                                    square.push(grid[i][6])
                                    square.push(grid[i][7])
                                    square.push(grid[i][8])
                                }
                            }
                        } else {
                            if (col < 3) {
                                for (i in range(6, 3)) {
                                    square.push(grid[i][0])
                                    square.push(grid[i][1])
                                    square.push(grid[i][2])
                                }
                            } else if (col < 6) {
                                for (i in range(6, 3)) {
                                    square.push(grid[i][3])
                                    square.push(grid[i][4])
                                    square.push(grid[i][5])
                                }
                            } else {
                                for (i in range(6, 3)) {
                                    square.push(grid[i][6])
                                    square.push(grid[i][7])
                                    square.push(grid[i][8])
                                }
                            }
                        }
                        //Check that this value has not already be used on this 3x3 square
                        if (!square.includes(value)) {
                            grid[row][col] = value;
                            if (checkGrid(grid)) {
                                counter += 1
                                break
                            } else {
                                if (solveGrid(grid)) {
                                    return true;
                                }
                            }

                        }
                    }
                }
            }
            break;
        }
        // grid[row][col] = 0;
    }
    return grid
}

function randint(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function readyGrid(grid) {
    let attempts = 100
    counter = 1
    while (attempts > 0) {
        //Select a random cell that is not already empty
        let row = randint(0, 8)
        let col = randint(0, 8)

        while (grid[row][col] === 0) {
            row = randint(0, 8)
            col = randint(0, 8)
        }
        //Remember its cell value in case we need to put it back  
        let backup = grid[row][col]
        grid[row][col] = 0

        //Take a full copy of the grid
        let copyGrid = []
        for (let r in range(0, 9)) {
            copyGrid.push([])
            for (let c in range(0, 9)) {
                copyGrid[r].push(grid[r][c]);
            }
        }
        //Count the number of solutions that this grid has (using a backtracking approach implemented in the solveGrid() function)
        counter = 0
        solveGrid(copyGrid)
            //If the number of solution is different from 1 then we need to cancel the change by putting the value we took away back in the grid
        if (counter != 1) {
            grid[row][col] = backup
                //We could stop here, but we can also have another attempt with a different cell just to try to remove more numbers
            attempts -= 1
        }

    }

    return grid

}