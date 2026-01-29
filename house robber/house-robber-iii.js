/** The thief has found himself a new place for his thievery again. There is only one entrance to this area, called root.

Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that all houses in this place form a binary tree. It will automatically contact the police if two directly-linked houses were broken into on the same night.

Given the root of the binary tree, return the maximum amount of money the thief can rob without alerting the police.

 

Example 1:


Input: root = [3,2,3,null,3,null,1]
Output: 7
Explanation: Maximum amount of money the thief can rob = 3 + 3 + 1 = 7.
Example 2:


Input: root = [3,4,5,1,3,null,1]
Output: 9
Explanation: Maximum amount of money the thief can rob = 4 + 5 = 9.
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
0 <= Node.val <= 104
**/
var rob = function(root) {
    const dfs = (node) => {
        if (!node) return [0, 0];

        const [leftRob, leftSkip] = dfs(node.left);
        const [rightRob, rightSkip] = dfs(node.right);

        const robCurrent =
            node.val + leftSkip + rightSkip;

        const skipCurrent =
            Math.max(leftRob, leftSkip) +
            Math.max(rightRob, rightSkip);

        return [robCurrent, skipCurrent];
    };

    const [robRoot, skipRoot] = dfs(root);
    return Math.max(robRoot, skipRoot);
};


/**
  For each node, I track two values:
    rob → max money if I rob this node
    skip → max money if I do NOT rob this node

For each node, return:
  [rob, skip]

Where:
rob = node.val + left.skip + right.skip
skip = max(left.rob, left.skip) + max(right.rob, right.skip)

Why this works:
If I rob this node, children must be skipped
If I skip this node, children choose best option

Time: O(n) — each node visited once
Space: O(h) — recursion stack (h = tree height)
  Worst case O(n)
  Balanced tree O(log n)

**** We go bottom-up. ***

THIS IS DFS (SPecifically POSTORDER DFS), because 
  Go all the way down to children
  Compute their results
  Only then compute the current node


That’s exactly postorder.
We must process children first because:
  The decision at the current node depends on children’s DP states
  Parent can’t be computed until children are done
**/


/**
 * Definition for a binary tree node.
 */
class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(
        val: number,
        left: TreeNode | null = null,
        right: TreeNode | null = null
    ) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Returns the maximum amount of money that can be robbed
 * from a binary tree without robbing two directly-linked houses.
 *
 * @param root - Root of the binary tree
 * @returns Maximum amount of money that can be robbed
 */
function rob(root: TreeNode | null): number {
    /**
     * DFS returns a tuple:
     * [robCurrent, skipCurrent]
     *
     * robCurrent  = max money if we rob this node
     * skipCurrent = max money if we skip this node
     */
    const dfs = (node: TreeNode | null): [number, number] => {
        if (!node) {
            return [0, 0];
        }

        const [leftRob, leftSkip] = dfs(node.left);
        const [rightRob, rightSkip] = dfs(node.right);

        // If we rob this node, we must skip both children
        const robCurrent =
            node.val + leftSkip + rightSkip;

        // If we skip this node, children can be robbed or skipped independently
        const skipCurrent =
            Math.max(leftRob, leftSkip) +
            Math.max(rightRob, rightSkip);

        return [robCurrent, skipCurrent];
    };

    const [robRoot, skipRoot] = dfs(root);
    return Math.max(robRoot, skipRoot);
}
