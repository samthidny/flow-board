import JoinType from './JoinType';
import Node from './Node';
/**
 * Represents the joining of 2 nodes, handles direction etc so Nodes don't need to
 */
export default class Join {

    node1:Node;
    node2:Node;

    constructor(node1:Node, node2:Node, joinType:JoinType) {
        
        this.node1 = node1;
        this.node2 = node2;

        this.node1.join = this;
        this.node2.join = this;

        console.log("Joined nodes");
        
    }

}