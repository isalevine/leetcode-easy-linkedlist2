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
var removeNthFromEnd = function(head, n) {      // NEED TO CHANGE HOW COUNTER IS COUNTING THE # OF NODES FROM TAIL!!
    //     if (n == 1 && head.next == null) {
    //         head = null;
    //         return head
    //     };
        
    //     if (n == 1 && head.next.next == null) {
    //         head.next = null;
    //         return head
    //     };
        
        let counter = 0;
        if (checkNthNode(head, n, counter)) {
            deleteNode(head);
        } else {
            removeNthFromEnd(head.next, n)
        };
        return head
    };
    
    
    function checkNthNode(node, n, counter) {    
        if (counter < n) {
            counter++;
            if (node.next) {
               checkNthNode(node.next, n, counter) 
            } else {
                return true
            } 
        };
        
        if (counter == n && node.next) {         
            return false
        } else {   
            return true
        };
    }
        
    
    function deleteNode(node) {
        if (node.next == null) {
            node.val = null;    
        } else if (node.next.next) {
            deleteNode(node.next)
        } else {
            node.val = node.next.val;
            node.next = null;
        };
    }