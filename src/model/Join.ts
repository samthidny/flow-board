import JoinType from './JoinType';
import Node from './Node';
/**
 * Represents the joining of 2 nodes, handles direction etc so Nodes don't need to
 */
export default class Join {

    id: string;
    node1: Node;
    node2: Node;
    joinType: JoinType;

    constructor(node1: Node, node2: Node, joinType: JoinType) {

        this.node1 = node1;
        this.node2 = node2;

        this.node1.join = this;
        this.node2.join = this;

        this.joinType = joinType;

        this.id = this.generateID();

    }

    toJSON() {
        var obj = { type: "Join", fromItem: this.node1.parent.id, fromNode: this.node1.id, toItem: this.node2.parent.id, toNode: this.node2.id, joinType: this.joinType };
        return JSON.stringify(obj);
    }

    generateID(): string {
        return this.node1.parent.id + "-" + this.node1.id + "-" + this.node2.parent.id + "-" + this.node2.id;
    }

}