import LinkedList, { Node } from "../src";


let ls = new LinkedList<String>;

ls.add("E");
ls.add("CHANDNI");
let third = new Node("F");
ls.add(third);
ls.add("CHANCHAL");

ls.add(new Node("A"));
// ls.add(third);

console.log(ls.isCircularList());
// ls.breakCircular();
console.log("len", ls.length)
ls.printList();

ls.insert("BEAUTY", 3);
console.log("len", ls.length)
ls.printList();

ls.remove(5);
console.log("len", ls.length)
ls.printList();

ls.sort(-1);

ls.printList();
