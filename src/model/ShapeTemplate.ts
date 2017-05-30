import Point from './Point';
import JoinType from './JoinType';
import NodeTemplate from './NodeTemplate';
/**
 * Contains the data of how this shape should be drawn
 */

export default class ShapeTemplate {

    points: Array<Point>;
    nodes: Array<NodeTemplate>;
    width: number = 100;
    height: number = 50;
    name:string;
    
    //For now this will handle several simple shapes until API is fully defined then refactor into separate templates
    constructor(type: string) {
        if (type == "Decision") {
            // Hardcoded a simple rectangle for now
            this.name = "Decision";
            this.points = [new Point(0.5, 0), new Point(1, 0.5), new Point(0.5, 1), new Point(0, 0.5)];
            this.nodes = [new NodeTemplate(new Point(0.5, 0), JoinType.BOTH), new NodeTemplate(new Point(1, 0.5), JoinType.BOTH), new NodeTemplate(new Point(0.5, 1), JoinType.BOTH), new NodeTemplate(new Point(0, 0.5), JoinType.BOTH)];
        } else {
            this.name = "State";
            this.points = [new Point(0, 0), new Point(1, 0), new Point(1, 1), new Point(0, 1)];
            this.nodes = [new NodeTemplate(new Point(0.5, 0), JoinType.BOTH), new NodeTemplate(new Point(1, 0.5), JoinType.BOTH), new NodeTemplate(new Point(0.5, 1), JoinType.BOTH), new NodeTemplate(new Point(0, 0.5), JoinType.BOTH)];
        }
    }

}