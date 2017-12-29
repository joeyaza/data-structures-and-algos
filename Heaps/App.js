const Heap = require("./Heap.js");

const heap = new Heap();

heap.insert(12);
heap.insert(-3);
heap.insert(23);
heap.insert(4);



heap.heapSort();
// heap.getMax();