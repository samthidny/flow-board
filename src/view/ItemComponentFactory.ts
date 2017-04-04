import ItemComponent from './ItemComponent';
import Item from '../model/Item';
import ShapeTemplate from '../model/ShapeTemplate';
import NodeTemplate from '../model/NodeTemplate';
import NodeComponent from './NodeComponent';
import NodeComponentFactory from './NodeComponentFactory';
import Point from '../model/Point';

export default class ShapeFactory {

    constructor() {

    }

    create(item: Item): ItemComponent {
        var component = new ItemComponent();
        component.view = this.drawShape(item.shapeTemplate);

        //Add the Node Buttons
        item.shapeTemplate.nodes.forEach(function (nodeData: NodeTemplate, index: number) {
            //Create a NodeComponent Button and position it within the group
            var nodeComponentFactory: NodeComponentFactory = new NodeComponentFactory();
            var nodeComponent: NodeComponent = nodeComponentFactory.create();
            nodeComponent.view = component.view.rect(-5, -5, 10, 10);
            //Bind the node to the Node model
            nodeComponent.model = item.getNodeAt(index);
            //This ItemComponentFactory is responsible for putting the node buttons in place within the Item Component group
            nodeComponent.x = nodeData.point.x * item.shapeTemplate.width;
            nodeComponent.y = nodeData.point.y * item.shapeTemplate.height;
        });

        return component;
    }

    /**
     * Converts an array of points into a flat array of [x, y, x, y ... ]
     */
    flattenPoints(points: Array<Point>, width: number, height: number): any[] {
        var flat: any[] = [];
        points.forEach((point: Point) => {
            flat.push(point.x * width);
            flat.push(point.y * height);
        });
        return flat;
    }

    /**
     * 
     * @param shapeTemplate Builds the shape SVG
     */
    drawShape(shapeTemplate: ShapeTemplate): Object {
        var s = Snap("#svg");
        var shape = s.polyline(this.flattenPoints(shapeTemplate.points, shapeTemplate.width, shapeTemplate.height));
        var group = s.group(shape);
        shape.attr({ id: "shape", fill: '#FF0000' });
        return group;
    }

}