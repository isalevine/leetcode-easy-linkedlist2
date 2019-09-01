// source: https://leetcode.com/explore/interview/card/top-interview-questions-easy/93/linked-list/603/



// Given a linked list, remove the n-th node from the end of list and return its head.

// Example:

// Given linked list: 1->2->3->4->5, and n = 2.

// After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:

// Given n will always be valid.

// Follow up:

// Could you do this in one pass?





// NOTE: NOT CURRENTLY SOLVED!!

// /**
//  * Definition for singly-linked list.
//  * function ListNode(val) {
//  *     this.val = val;
//  *     this.next = null;
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
var removeNthFromEnd = function(head, n) {
    let prevNode = null;

    if (recursiveCheck(head, n)) {          // true
        return head.next;
        
    } else {                                // false
        prevNode = head;
        let nextNode = removeNthFromEnd(head.next, n);
        prevNode.next = nextNode;
    };
    
    return prevNode;
};


function recursiveCheck(head, n) {
    let matchFound = false;
    
    if (n > 1) {                                        // continue iterating down n, and check next node
        matchFound = recursiveCheck(head.next, n - 1);
        
    } else if (n == 1 && head.next == null) {           // originally-called head is correct!
        return true
        
    } else if (n == 1 && head.next) {                   // originally-called head is wrong...
        return false
    };
    
    return matchFound;
}
