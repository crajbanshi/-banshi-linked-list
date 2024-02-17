import { Node } from ".";

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

    sortedMerge(a: Node<T> | null | undefined, b: Node<T> | null | undefined, order: number) {
        var result: Node<T> | null | undefined = null;
        /* Base cases */
        if (a == null)
            return b;
        if (b == null)
            return a;

        switch (order) {
            case -1: {
                if (<T>a?.val <= <T>b?.val) {
                    result = b;
                    result.next = this.sortedMerge(a, b?.next, order);
                } else {
                    result = a;
                    result.next = this.sortedMerge(a?.next, b, order);
                }
                break;
            }
            default: {
                if (<T>a?.val <= <T>b?.val) {
                    result = a;
                    result.next = this.sortedMerge(a?.next, b, order);
                } else {
                    result = b;
                    result.next = this.sortedMerge(a, b?.next, order);
                }
            }
        }
        /* Pick either a or b, and recur */
        // if (parseFloat("" + a?.val) <= parseFloat("" + b?.val)) {

        return result;
    }

    mergeSort(h: Node<T> | null | undefined, order: number = 1) {
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
        var left: Node<T> | null | undefined = this.mergeSort(h, order);

        // Apply mergeSort on right list
        var right: Node<T> | null | undefined = this.mergeSort(nextofmiddle, order);

        // Merge the left and right lists
        var sortedlist = this.sortedMerge(left, right, order);
        return sortedlist;
    }
}