class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let map = new Map()
        for(let i=0; i< numbers.length; i++){
            const reminder = target - numbers[i]
            if(map.has(reminder)){
                return [map.get(reminder), i+1]
            }else{
                map.set(numbers[i], i+1)
            }
        }
    }
}
