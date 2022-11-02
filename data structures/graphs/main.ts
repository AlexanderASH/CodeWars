import { Graph } from "./graph";
import { GraphTraverser } from "./graph_traverser";

const main = () => {
    const graph = new Graph<number>(false, true);

    const vertext1 = graph.addVertext(5);
    const vertext2 = graph.addVertext(6);
    const vertext3 = graph.addVertext(10);
    const vertext4 = graph.addVertext(7);
    const vertext5 = graph.addVertext(8);

    graph.addEdge(vertext1, vertext2);
    graph.addEdge(vertext2, vertext3);
    graph.addEdge(vertext3, vertext1);
    graph.addEdge(vertext1, vertext4);
    graph.addEdge(vertext1, vertext5);

    console.log(graph.printGraph());

    const traverser = new GraphTraverser();

    traverser.depthFirstSearch(vertext1, [vertext1]);
    traverser.breadthFirstSearch(vertext1, [vertext1]);
}



main();