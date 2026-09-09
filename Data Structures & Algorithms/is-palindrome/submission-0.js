class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");

        // const isPal =  clean === clean.split('').reverse().join('')
        // return isPal

        const cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
const isPal = cleanStr === cleanStr.split('').reverse().join('');
return isPal
    }
}
