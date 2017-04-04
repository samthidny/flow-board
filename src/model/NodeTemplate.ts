import Point from './Point';
import JoinType from './JoinType';
/**
 * Defines the type and poisition of a node within a shape template and join type for validation
 */
export default class NodeTemplate {

    point:Point;
    joinType:JoinType;

    constructor(point:Point, joinType:JoinType) {
        this.point = point;
        this.joinType = joinType;
    }

}