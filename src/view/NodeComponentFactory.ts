import NodeComponent from './NodeComponent';
export default class NodeComponentFactory {

    constructor() {

    }

    create():NodeComponent {
        var nodeComponent = new NodeComponent();
        //nodeComponent.view = this.drawNodeComponent();
        //nodeComponent.node
        return nodeComponent;
    }

    drawNodeComponent():any {
        //Draws the SVG node button
        return {};
    }

}