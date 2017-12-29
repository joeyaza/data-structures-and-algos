const Node = require("./Node.js");

class LinkedList {

    constructor () {

        this.head = null;
        this.counter = 0;


    }

    traverseList() {

        let actualNode = this.head;

        while (actualNode) {

            console.log(actualNode.data);
            actualNode = actualNode.nextNode;

        }

    }

    insertStart(data) {

        this.counter++;

        let newNode = new Node(data);

        if (!this.head) {

            this.head = newNode;

        } else {

            newNode.nextNode = this.head;
            this.head = newNode;

        }

    }

    size() {

        return this.counter;

    }

    insertEnd(data) {

        if (!this.head) {

            this.insertStart(data);
            return;

        }

        this.counter++;

        let newNode = new Node(data);
        let actualNode = this.head;

        while (actualNode.nextNode) {

            actualNode = actualNode.nextNode;

        }

        actualNode.nextNode = newNode;

    }

    remove(data) {

        this.counter--;

        if (this.head) {

            if (data === this.head.data) {

                this.head = this.head.nextNode;

            } else {

                this.head.remove(data, this.head);


            }

        }

    }


}

module.exports = LinkedList;