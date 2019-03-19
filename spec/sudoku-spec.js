import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', function() {
    var reusableSudoku;

    beforeEach(function(){
        reusableSudoku = new Sudoku();
    });

    it('should test if the board is created', function(){
        expect(reusableSudoku.board.length).toEqual(9);
    });

    it('arr is magic', function(){
        let arr = [7,3,5,6,1,4,8,9,2];
        expect(reusableSudoku.isMagic(arr)).toEqual(true);
    });   

    it('is valid', function() {

        reusableSudoku.board = 
        [[7,3,5,6,1,4,8,9,2],[8,4,2,9,7,3,5,6,1], [9,6,1,2,8,5,3,7,4],
         [2,8,6,3,4,9,1,5,7], [4,1,3,8,5,7,9,2,6], [5,7,9,1,2,6,4,3,8],
         [1,5,7,4,9,2,6,8,3], [6,9,4,7,3,8,2,1,5], [3,2,8,5,6,1,7,4,9]];

        let result = reusableSudoku.isValid();
        expect(result).toEqual(true);
    });
});