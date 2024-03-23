import LinkedList, { Node } from "../src";


let ls = new LinkedList<number>;

ls.add(4);
ls.add(2);
let third = new Node(3);
ls.add(third);
ls.add(5);

ls.add(new Node(6));
// ls.add(third);

console.log(ls.isCircularList());
// ls.breakCircular();
console.log("len", ls.length)
ls.printList();

ls.insert(7, 3);
console.log("len", ls.length)
ls.printList();

ls.remove(5);
console.log("len", ls.length)
ls.printList();

ls.sort(-1);

ls.printList();