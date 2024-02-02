import { color, replaceLastLine } from "@banshi/cli-art";
import Sort from "./sort";

export class Node<T> {
    val: T | undefined;
    next: Node<T> | null | undefined = null;
    constructor(v: T) {
        this.val = v;
    }
}

export default class LinkedList<T> {
    public length = 0;
    private head!: Node<T> | null | undefined;
    private last!: Node<T>;
    private currentNode!: Node<T> | null | undefined;

    private createNode(value: T | Node<T>) {
        let node = null;
        if (value instanceof Node) {
            node = value;
        } else {
            node = new Node(value);
        }
        return node;
    }

    /**
     * Add new not to last
     * 
     * @param value 
     */
    public add(value: T | Node<T>) {
        var node: Node<T> = this.createNode(value);
        this.length++;
        if (!this.head) {
            this.last = this.head = node;
        } else if (this.last) {
            this.last.next = node;
            this.last = node;
        }
        this.currentNode = this.last;
    }


    /**
     * Append new node to last
     * Aleas of add method
     * 
     * @param value 
     */
    public append(value: T | Node<T>) {
        this.add(value);
    }

    /**
     * Add new head
     * 
     * @param value 
     */
    public prepend(value: T | Node<T>) {
        var node: Node<T> | null = this.createNode(value);
        node.next = this.head;
        this.length++;
        this.head = node;
        this.currentNode = this.head;
    }

    /**
     * Insert a node at given position
     * 
     * @param value 
     * @param index 
     * @returns 
     */
    public insert(value: T | Node<T>, index: number) {
        if (index == 0) {
            return this.prepend(value);
        }
        var node: Node<T> = this.createNode(value);
        var prev;
        let temp: Node<T> | null | undefined = this.head;
        let currentIndex = 0;
        while (temp) {
            if (currentIndex == index) {
                node.next = temp;
                if (prev)
                    prev.next = node;

                this.currentNode = node;
                break;
            }
            prev = temp;
            temp = temp.next;
            currentIndex++;
        }
        return index;

    }

    /**
     * Get Index
     * 
     * @param value 
     * @returns number
     */
    public indexOf(value: T) {
        let index = -1;
        let node: Node<T> | null | undefined = this.head;
        while (node) {
            index++;
            if (node.val == value) {
                this.currentNode = node;
                break;
            }
            node = node.next;
        }
        return index;
    }

    /**
     * Get First Element
     * 
     * @returns 
     */
    public getHead() {
        return this.head;
    }

    /**
     * Get Last element
     * 
     * @returns 
     */
    public getTail() {
        return this.last;
    }

    /**
     * Get Next element value
     * 
     * @returns 
     */
    public next() {
        this.currentNode = this.currentNode?.next;
        return this.currentNode?.val;
    }

    /**
     * Check if circular linked list
     * @returns boolean
     */
    public isCircularList() {
        if (!this.head) {
            return false;
        }
        if (!this.head.next) {
            return false;
        }
        let fast: Node<T> | null | undefined = this.head.next;
        let slow: Node<T> | null | undefined = this.head;
        let last: Node<T> | null | undefined = fast;
        while (slow != fast) {
            slow = slow?.next;
            if (fast?.next && !fast?.next.next) {
                break;
                return false
            }
            last = fast?.next;
            fast = fast?.next?.next;
        }
        this.currentNode = last;
        return fast == slow;
    }


    /**
     * Sorting
     */
    public sort() {
        let s = new Sort<T>();
        // Apply merge Sort
        this.head = s.mergeSort(this.head);
    }


    /**
     * Break
     */
    public breakCircular() {
        if (this.isCircularList() && this.currentNode?.next) {
            this.currentNode.next = null;
        }
    }

    /**
     * Print list
     * 
     * @returns String
     */
    public printList() {
        var temp: Node<T> | null | undefined = this.head;
        var out = "";
        var print = "";
        while (temp != null) {
            print += color.green(temp.val) + color.red(" -> ");
            out += temp.val + " -> ";

            temp = temp.next;
        }
        console.log(print + "NULL");
        return out + "NULL";
    }
}