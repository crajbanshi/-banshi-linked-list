
import LinkedList, { Node } from "../src/linkedlist";

var ls = new LinkedList<number>;
ls.add(4);
ls.add(2);
var third = new Node(3);
ls.add(third);
ls.add(5);


describe('placeholder Suite', () => {
	//0. Sample Test Case
	test('linked list test', () => {
		ls.add(new Node(6));
		expect(ls.getTail().val).toEqual(6)
	});

	test('linked list isCircularList test', () => {
		ls.add(third);
		expect(ls.isCircularList()).toEqual(true);
	});

	test('break CircularList test', () => {
		ls.breakCircular();
		expect(ls.isCircularList()).toEqual(false);
	});

	test('Linked list Sorting test', () => {
		ls.sort();
		expect(ls.printList()).toEqual("2 -> 3 -> 4 -> 5 -> 6 -> NULL");
	});


})

