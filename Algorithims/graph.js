class Graph {
    constructor() {
       this.edges = {};
       this.nodes = [];
    }
 
    addNode(node) {
       this.nodes.push(node);
       this.edges[node] = [];
    }
 
    addEdge(node1, node2, weight = 1) {
       this.edges[node1].push({ node: node2, weight: weight });
    }

    display() {
        let graph = "";
        this.nodes.forEach(node => {
           graph += node + "->" + this.edges[node].map(n => n.node).join(", ") + "\n";
        });
        console.log(graph);
     }

    // BFS(node) {
    //     let q = new Queue(this.nodes.length);
    //     let explored = new Set();
    //     q.enqueue(node);
    //     explored.add(node);
    //     while (!q.isEmpty()) {
    //        let t = q.dequeue();
    //        console.log(t);
    //        this.edges[t].filter(n => !explored.has(n)).forEach(n => {
    //           explored.add(n);
    //           q.enqueue(n);
    //        });
    //     }
    //  }

    BFS(node){
        let queue = [];
        let explored = new Set();
        queue.push(node)
        explored.add(node)
        while( queue.length !== 0){
            let t = queue.shift();
            console.log(t);
            this.edges[t].filter(n => !explored.has(n)).forEach(n => {
                              explored.add(n.node);
              queue.push(n.node);
            })
            //            this.edges[t].filter(n => !explored.has(n)).forEach(n => {
            //   explored.add(n);
            //   queue.push(n);
        //    });
        }
    }

    DFS(node){
        let queue = [];
        let explored = new Set();
        queue.push(node)
        explored.add(node)
        while( queue.length !== 0){
            let t = queue.pop();
            console.log(t);
            this.edges[t].filter(n => !explored.has(n)).forEach(n => {
                              explored.add(n.node);
              queue.push(n.node);
            })
            //            this.edges[t].filter(n => !explored.has(n)).forEach(n => {
            //   explored.add(n);
            //   queue.push(n);
        //    });
        }

    }
  
}

const graph = new Graph()
graph.addNode(1)
graph.addNode(2)
graph.addNode(3)
graph.addNode(4)
graph.addEdge(1,4)
graph.addEdge(1,2)
graph.addEdge(2,3)
// graph.display()
graph.BFS(1)
