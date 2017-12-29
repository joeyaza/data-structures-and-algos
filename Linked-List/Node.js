class Node {

    constructor(data) {

        this.data = data;
        this.nextNode = null;

    }

    remove(data, previousNode) {

        if (this.data === data) {

            previousNode.nextNode = this.nextNode;

        } else {

            if (this.nextNode) {

                this.nextNode.remove(data, this);

            }

        }

    }

}

module.exports = Node;