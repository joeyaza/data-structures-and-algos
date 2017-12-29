class Heap {

    constructor() {

        this.heapSize = 10;
        this.heap = [];
        this.currentPosition = -1;

    }

    insert(item) {

        if (this.isFull()) {

            return console.log("heap is full!");

        }

        this.currentPosition = this.currentPosition + 1;
        this.heap[this.currentPosition] = item;
        console.log("current>>>", this.currentPosition);
        this.fixUp(this.currentPosition);

    }

    fixUp(index) {

        let parentIndex = (index-1) - 1/2;

        while (parentIndex >= 0 && this.heap[parentIndex] < this.heap[index]) {

            let temp = this.heap[index];
            this.heap[index] = this.heap[parentIndex];
            this.heap[parentIndex] = temp;
            index = parentIndex;
            parentIndex = index-1/2;

        }

    }

    getMax() {


        let result = this.heap[0];
        this.currentPosition = this.currentPosition -1;
        this.heap[0] = this.heap[this.currentPosition];
        this.fixDown(0,-1);
        console.log(result);
        return result;

    }

    fixDown(index, upto) {

        if (upto < 0) {

            upto = this.currentPosition;

        }

        while (index <= upto) {

            let leftChild = 2*index+1;
            let rightChild = 2*index+2;

            if (leftChild <= upto) {

                let childToSwep = null;

                if (rightChild > upto) {

                    childToSwep = leftChild;

                } else {

                    if (this.heap[leftChild] > this.heap[rightChild]) {

                        childToSwep = leftChild;


                    } else {

                        childToSwep = rightChild;

                    }


                }

                if (this.heap[index] < this.heap[childToSwep]) {

                    let temp = this.heap[index];
                    this.heap[index] = this.heap[childToSwep];
                    this.heap[childToSwep] = temp;


                } else {

                    break;

                }

                index = childToSwep;

            } else {

                break;

            }

        }

    }

    heapSort() {

        for (let i=0;i<this.currentPosition+1;i++) {

            let temp = this.heap[0];
            console.log(">>>", temp);
            this.heap[0] = this.heap[this.currentPosition-i];
            this.heap[this.currentPosition-i] = temp;
            this.fixDown(0, this.currentPosition-i-1);

        }

    }

    isFull() {

        if (this.currentPosition === this.heapSize) {

            return true;

        }

        return false;

    }

}

module.exports = Heap;