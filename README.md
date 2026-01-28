🧠 Staff Frontend DSA Cheat Sheet
------------------------------------

How to choose the right algorithm (Big Tech)

🎯 How interviewers expect you to think

Recognize the pattern, choose the tool, explain why.

You’re not expected to memorize tricks — just make good decisions and communicate them clearly.


1️⃣ Sliding Window
-------------------
Use when:
 - Contiguous subarray or substring
 - Longest / shortest / at most / at least
 - Window moves forward only
   
Keywords:
 - “subarray”
 - “substring”
 - “window”
 - “consecutive”
   
Examples:
 - Longest substring without repeating characters
 - Max sum subarray of size k
 - Minimum window substring
   
Staff one-liner:
 - “Because the window expands and contracts monotonically, we can do this in O(n).”
   


2️⃣ Two Pointers
----------------
Use when:
 - Input is sorted
 - Looking for pairs / triplets
 - Can shrink search space from both ends
   
Keywords:
 - “sorted”
 - “pair”
 - “closest”
 - “sum equals”
   
Examples:
 - Two Sum (sorted)
 - Container With Most Water
 - 3Sum
   
Staff signal:
 - “Sorted input allows deterministic pointer movement.”



3️⃣ Hash Map / Set
-------------------
Use when:
 - Need fast lookup
 - Counting frequency
 - Checking existence / uniqueness
   
Keywords:
 - “count”
 - “frequency”
 - “unique”
 - “exists”
   
Examples:
 - Two Sum (unsorted)
 - Group Anagrams
 - First non-repeating character
   
Staff note:
 - Always mention the space–time tradeoff.


4️⃣ Recursion (General)
------------------------
Use when:
 - Problem breaks into smaller subproblems
 - Structure is naturally nested
   
Keywords:
 - “nested”
 - “divide”
 - “tree-like”
   
Examples:
 - Tree traversal
 - DFS
 - Parsing expressions
   
Staff one-liner:
 - “The recursive structure mirrors the input structure.”


5️⃣ DFS (Depth-First Search)
-----------------------------
Use when:
 - You must explore all paths
 - Tree or graph traversal
 - Parent decision depends on children
   
Keywords:
 - “all paths”
 - “connected components”
 - “tree”
   
Examples:
 - Tree traversals
 - Number of Islands
 - House Robber III
   
Staff insight:
 - “DFS is ideal when child results are required before the parent.”


6️⃣ BFS (Breadth-First Search)
------------------------------
Use when:
 - Shortest path
 - Minimum steps
 - Level-by-level processing
   
Keywords:
 - “minimum”
 - “shortest”
 - “levels”
 - “steps”
   
Examples:
 - Level Order Traversal
 - Minimum Depth of Binary Tree
 - Shortest path in a grid
 - Word Ladder
   
Staff one-liner:
 - “Uniform edge costs make BFS optimal.”


7️⃣ Backtracking
----------------
Use when:
 - Generate all valid possibilities
 - Choose → explore → undo
   
Keywords:
 - “all”
 - “generate”
 - “combinations” 
 - “permutations”
   
Examples:
 - Subsets
 - Permutations
 - N-Queens
 - Sudoku
   
Staff signal:
 - “This is a constrained search with reversible decisions.”

** Here combination is generating combination. For counting combinations like Coint Change 2 (where sequence is not required, just count of combimation is required, go for DP Approach)


8️⃣ Dynamic Programming (DP)
-----------------------------
Use when:
 - Overlapping subproblems
 - Optimal substructure
 - Max / min / count ways
   
Keywords:
 - “maximum”
 - “minimum”
 - “number of ways”
 - “optimal”
   
Examples:
 - House Robber I / II / III
 - Climbing Stairs
 - Coin Change
   
Staff insight:
 - “Each state depends on optimal solutions of smaller states.”


9️⃣ Greedy
-----------

Use when:
 - Local optimal choice leads to global optimal
 - Problem has provable monotonic behavior
   
Keywords:
 - “earliest”
 - “minimum intervals”
 - “optimal at each step”
   
Examples:
 - Interval Scheduling
 - Jump Game
 - Gas Station
   
Staff caution ⚠️
 - Only use greedy if you can explain why it works.


🔟 Union Find
--------------
Use when:
 - Dynamic connectivity
 - Merging sets / components
   
Keywords:
 - “connected”
 - “group”
 - “merge”
   
Examples:
 - Number of Provinces
 - Graph connectivity




🧭 Quick Decision Table
-------------------------
Problem asks for        
-----------------
 - Shortest path              - BFS
 - All paths                  - DFS
 - Contiguous range           - Sliding Window
 - Optimal value              - DP
 - All combinations           - Backtracking
 - Sorted pairs               - Two Pointers
 - Tree hierarchy             - DFS
 - Level order                - BFS


🧠 Staff-Level Safety Line (use this if unsure)
------------------------------------------------
“This looks like a state-exploration problem. I’ll start with DFS and adjust if we need shortest-path guarantees.”

That line alone signals senior judgment.

🎯 Final reality check (important)
---------------------------------
For Frontend Staff, you don’t need to be fancy — you need to be:
 - Correct
 - Clear
 - Calm
 - Able to explain why
 - You’re already thinking at the right level.

