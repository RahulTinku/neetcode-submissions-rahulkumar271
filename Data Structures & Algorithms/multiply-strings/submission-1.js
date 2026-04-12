class Solution {
    /**
     * @param {string} num1
     * @param {string} num2
     * @return {string}
     */
    multiply(num1, num2) {
        if(num1 === '0' || num2 === '0') return '0'
       
        const len = num1.length + num2.length
        let res = new Array(len).fill(0);

        for(let i = num1.length - 1; i >= 0; i--){
            for(let j = num2.length - 1; j >= 0; j--){
                const digit = parseInt(num1[i])*parseInt(num2[j])
                const p1 = i + j, p2 = i + j + 1;
                let sum = digit + res[p2];
                res[p2] = sum % 10;
                res[p1] += Math.floor(sum / 10);
            }
        }

        let i=0;
        while(i<res.length && res[i] === 0){
            i++
        }

        return res.slice(i).join('')
    }
}
