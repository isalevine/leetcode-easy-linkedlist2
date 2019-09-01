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
    // console.log("head: ", head)
    // console.log("")
    
    if (n == 1 && head.next == null) {
        return false
    
    } else if (n > 1) {
        n--;
        if (!removeNthFromEnd(head.next, n)) {   // call recursively until returns true
            return head.next
            
        } else {
            n++;
        };

        let prevNode = head;
        let nextNode = removeNthFromEnd(head.next, n);
        console.log("hi")
        prevNode.next = nextNode;
        
        
    } else if (n == 1 && head.next) {
        return true  
    };
    
    return head
};