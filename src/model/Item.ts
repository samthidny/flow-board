import Node from './Node';
import {Event} from 'typescript.events';
import ModelEvents from './ModelEvents';
import LayoutData from './LayoutData';
import ShapeTemplate from './ShapeTemplate';
/**
 * Represents an item on the drawing board - an item contains nodes that can join to other item nodes.
 */

export default class Item extends Event {

    nodes:Array<Node>;
    private _shapeTemplate:ShapeTemplate;
    layout:LayoutData;


    constructor() {
        super();
        this.nodes = [];
        this._shapeTemplate = new ShapeTemplate();
        this.layout = new LayoutData();
    }


    get shapeTemplate():ShapeTemplate {
        return this._shapeTemplate;
    }

    set shapeTemplate(value:ShapeTemplate) {
        //For now only allow a shape to be defined once, in future they can be swapped
        if(this._shapeTemplate) {
            throw new Error("Shape Template already set, this feature isnt supported yet!");
        }
        this.clearShape();
        this._shapeTemplate = value;

    }

    addNode(node:Node):Node {
        node.parent = this;
        this.nodes.push(node);
        console.log("Node added");
        return node;
    }

    getNodeAt(index:number):Node {
        return this.nodes[index];
    }

    clearShape() : void {
        // Nice to have - For dynamically changing shapes, this will clear all data and try to keep joins (if possible) and position the same

    }

}