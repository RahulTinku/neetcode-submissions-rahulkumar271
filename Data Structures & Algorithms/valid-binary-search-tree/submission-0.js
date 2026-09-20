/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isValidBST(root) {
        const helper = (node, min, max) => {
            if(!node) return true
            if(node.val <= min || node.val >= max) return false

            let left = helper(node.left, min, node.val)
            let right = helper(node.right, node.val, max)

            return (left && right)
        }

        return helper(root, -Infinity, Infinity)
    }
}
