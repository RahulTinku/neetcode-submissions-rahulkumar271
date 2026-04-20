class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const len = heights.length
        let left = 0, right = len - 1;
        let max = -1;

       while(left < right){
        let area = 1;
        if(heights[left] < heights[right]){
            area = heights[left] * (right - left)
            left++
        }else{
            area = heights[right] * (right - left)
            right--
        }

        max = Math.max(area, max)
       }

       return max
    }
}
