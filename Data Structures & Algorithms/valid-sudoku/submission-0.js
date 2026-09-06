class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const seen = new Set()

        for(let r =0; r<9; r++){
            for(let c = 0; c<9; c++){
                const val = board[r][c]

                if(val === '.') continue

                const rowTag = `row ${r} has value ${val}`
                const colTag = `col ${c} has value ${val}`
                const boxTag = `box ${Math.floor(r/3)} - ${Math.floor(c/3)} has val ${val}`
                if(seen.has(rowTag) || seen.has(colTag) || seen.has(boxTag)){
                    return false
                }

                seen.add(rowTag)
                seen.add(colTag)
                seen.add(boxTag)
            }
        }
        return true
    }
}
