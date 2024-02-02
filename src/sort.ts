import { Node } from "./linkedlist";

/**
 * 
 * Merge Sort of linked List
 * 
 * Time Complexity: O(n*log n)
 * Auxiliary Space: O(n)
 */
export default class Sort<T> {


    // Utility function to get the middle 
    // of the linked list
    getMiddle(head: Node<T> | null) {
        if (head == null)
            return head;

        var slow: Node<T> | null | undefined = head,
            fast: Node<T> = head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow?.next;
            fast = fast.next.next;
        }
        return slow;
    }

    sortedMerge(a: Node<T> | null | undefined, b: Node<T> | null | undefined) {
        var result: Node<T> | null | undefined = null;
        /* Base cases */
        if (a == null)
            return b;
        if (b == null)
            return a;

        /* Pick either a or b, and recur */
        if (parseFloat("" + a?.val) <= parseFloat("" + b?.val)) {
            result = a;
            result.next = this.sortedMerge(a?.next, b);
        } else {
            result = b;
            result.next = this.sortedMerge(a, b?.next);
        }
        return result;
    }

    mergeSort(h: Node<T> | null | undefined) {
        // Base case : if head is null
        if (h == null || h.next == null) {
            return h;
        }

        // get the middle of the list
        var middle: Node<T> | null | undefined = this.getMiddle(h);
        var nextofmiddle: Node<T> | null | undefined = middle?.next;

        // set the next of middle node to null
        if (middle)
            middle.next = null;

        // Apply mergeSort on left list
        var left: Node<T> | null | undefined = this.mergeSort(h);

        // Apply mergeSort on right list
        var right: Node<T> | null | undefined = this.mergeSort(nextofmiddle);

        // Merge the left and right lists
        var sortedlist = this.sortedMerge(left, right);
        return sortedlist;
    }


}