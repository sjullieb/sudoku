export function Sudoku() {
    this.board = new Array(boardSize);
}

var boardSize = 9;


Sudoku.prototype.intializeBoard = function() {
    for(let i = 0; i < boardSize; i++) {
        this.board[i] = new Array(boardSize);
    }
};

Sudoku.prototype.isMagic = function(arr){
    arr.sort();
    for(let i=0; i < boardSize; i++) {
        if(arr[i] != i+1){
            return false;
        }
    }
    return true;
};

Sudoku.prototype.fillIn = function(){
    for(let i = 0; i < boardSize; i++)
        for(let j = 0; j < boardSize; j++)
            this.board[i][j] = 0;
};

Sudoku.prototype.isValid = function() {
    let arr = new Array(boardSize);

    for(let j = 0; j < boardSize; j++)
    {
        for(let i = 0; i < boardSize; i++)
            arr[i] = this.board[j][i];
        let result = this.isMagic(arr);
        if (result === false)
            return false;
    }

    for(let i = 0; i < boardSize; i++)
    {
        
        for(let j = 0; j < boardSize; j++)
            arr[j] = this.board[j][i];
        let result = this.isMagic(arr);
        if (result === false)
            return false;
    }

    var squareSize = 3;
    for(let k = 0; k < squareSize; k++)
        for(let n = 0; n < squareSize; n++)
        {
            let index = 0;
            for (let i = k * squareSize; i < k * (squareSize + 1); i++)
                for(let j = n * squareSize; j < n * (squareSize + 1); j++){
                    arr[index] = this.board[i][j];
                    index++;
                }
            console.log(k, n);  
            console.log(arr);
            if(!(this.isMagic(arr)))
            {
                return false;
            }
        }       
                
    return true;
};