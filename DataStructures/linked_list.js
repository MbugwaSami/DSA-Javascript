class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkList {
  constructor(headData) {
    this.head = new Node(headData);
  }

    //Time complexity is O(1)
  addNodeAfter(prevNode, newData) {
    if (prevNode === null) {
      console.log("The given previous node cannot be null");
      return false;
    }
    const newNode = new Node(newData);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  //Time complexity is O(n)
  addNodeAtEnd(headNode, newData) {
    if (headNode === null) {
      this.head = new Node(newData);
    } else {
      let lastNode = headNode;
      while (lastNode.next !== null) {
        lastNode = lastNode.next;
      }
      lastNode.next = new Node(newData);
    }
  }

    //Time complexity is O(1)
  addNodeAtStart(headNode, newData) {
    if (headNode === null) {
      this.head = new Node(newData);
    } else {
      const newNode = new Node(newData);
      newNode.next = headNode;
      this.head = newNode
    }
  }

  printAllNodes(head) {
    let current = head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  reverseList(headNode){
      let prev = null;
      let current = headNode;
      let next = null
      while(current !==null){
          next = current.next;
          current.next = prev;
          prev = current
          current = next
      }

      headNode = prev;
      return headNode;
  }
}

const linkedList = new LinkList(2);
linkedList.addNodeAfter(linkedList.head, 3);
linkedList.addNodeAtStart(linkedList.head, 4);
linkedList.printAllNodes(linkedList.head)
// linkedList.printAllNodes(linkedList.head)
// linkedList.printAllNodes(linkedList.head);
const head = linkedList.reverseList(linkedList.head);
linkedList.printAllNodes(head);
