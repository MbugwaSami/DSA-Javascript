
class Node {
    constructor(item){
        this.key = item;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(key){
        this.root = new Node(key);
    }

    insert(startNode, key){
        if(startNode=== null){
            this.root = new Node(key)
            return
        }
        const queue = [];
        queue.push(startNode)
        while(queue.length){
            startNode = queue.shift();
            if(startNode.left == null){
                startNode.left = new Node(key)
                break;
            }
            else{
                queue.push(startNode.left )
            }
            if(startNode.right == null){
                startNode.right = new Node(key)
                break;
            }
            else{
                queue.push(startNode.right )
            }
        }
    }

    inOderTraverse(startNode){
        if(startNode === null)
        return;
        this.inOderTraverse(startNode.left);
        console.log(startNode.key)
        this.inOderTraverse(startNode.right);
    }

    levelOrderTraverse(startNode){
        if(startNode === null){
            return
        }
        const queue = []
        queue.push(startNode);
        while(queue.length !== 0){
            const tempNode = queue.shift()
            console.log(tempNode.key)
            if(tempNode.left !== null){
                queue.push(tempNode.left)
            }
            if(tempNode.left !== null){
                queue.push(tempNode.right)
            }
        }
    }

    getHeight(rootNode){
        if(rootNode === null){
            return 0
        }
        else{
            const lHeight = this.getHeight(rootNode.left)
            const rHeight = this.getHeight(rootNode.right)
            if(lHeight> rHeight){
                return(lHeight + 1)
            }
            else{
                return(rHeight + 1)
            }
        }

    }

    currentLevel(startNode, level){
        if(startNode === null){
            return
        }
        if(level === 1){
            console.log(startNode.key)
        }
        else if(level> 1){
            this.currentLevel(startNode.left, level-1)
            this.currentLevel(startNode.right, level -1)
        }
    }

    printLevelORder(){
        for(let x=1; x <= this.getHeight(this.root); x++){
            this.currentLevel(this.root, x)
        }
    }

}

function callTree (){
const tree = new BinaryTree(1);
tree.root.left = new Node(2);
tree.root.right = new Node(3)
tree.root.left.left = new Node(4)
tree.root.left.right = new Node(5)
// tree.inOderTraverse(tree.root)
// tree.insert(tree.root.left, 6)
// tree.inOderTraverse(tree.root)
// tree.levelOrderTraverse(tree.root)
console.log('====================')
// tree.printLevel(tree.root)
// console.log(tree.getHeight(tree.root))
// tree.currentLevel(tree.root,3)
tree.printLevelORder()
}

callTree.apply()