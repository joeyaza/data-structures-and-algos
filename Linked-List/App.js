const LinkedList = require("./LinkedList.js");

const linkedList = new LinkedList();

linkedList.insertEnd(12);
linkedList.insertEnd(122);
linkedList.insertEnd(3);
linkedList.insertStart(31);

linkedList.traverseList();

linkedList.remove(12);

linkedList.traverseList();
