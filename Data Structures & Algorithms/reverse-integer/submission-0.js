class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    reverse(x) {
        let isNegative = false
        if(x<0) {
            x =x*-1
            isNegative = true;
        }
        let str = x + ' ';
        let reverse = parseInt([...str].reverse().join(''))

        if((reverse | 0) === reverse){
            return isNegative ? reverse* -1 : reverse
        }else{
            return 0
        }
    }
}
