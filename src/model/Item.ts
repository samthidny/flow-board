import Node from './Node';
import ModelEvents from './ModelEvents';
import LayoutData from './LayoutData';
import ShapeTemplate from './ShapeTemplate';
import SimpleEventDispatcher from '../SimpleEventDispatcher';
/**
 * Represents an item on the drawing board - an item contains nodes that can join to other item nodes.
 */

export default class Item extends SimpleEventDispatcher {

    id:string;
    nodes:Array<Node>;
    nodesByID:any;
    private _shapeTemplate:ShapeTemplate;
    layout:LayoutData;


    constructor(shapeTemplate:ShapeTemplate) {
        super();
        this.nodes = [];
        this.nodesByID = {};
        this.shapeTemplate = shapeTemplate;
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

        //Nodes are created when the shapeTemplate is set.
        this._shapeTemplate.nodes.forEach(() => {
            var node = new Node();
            this.addNode(node);
        });

    }

    addNode(node:Node):Node {
        node.parent = this;
        this.nodes.push(node);
        node.id = "node" + this.nodes.length;
        this.nodesByID[node.id] = node;
        console.log("Node added");
        return node;
    }

    getNodeByID(id:string):Node {
        return this.nodesByID[id];
    }

    getNodeAt(index:number):Node {
        return this.nodes[index];
    }

    clearShape() : void {
        // Nice to have - For dynamically changing shapes, this will clear all data and try to keep joins (if possible) and position the same

    }

    toJSON() : string {
        var nodeList:Array<object> = [];
        var obj = {type:"Item", id:this.id, x: this.layout.x, y: this.layout.y,  shapeTemplate: this.shapeTemplate.name, nodes:nodeList};
        
        this.nodes.forEach(function(node, index){
            var nodeObj:object = {type:"Node", id:node.id, x:node.layout.x, y:node.layout.y};
            nodeList.push(nodeObj);
     });
        
        //obj.nodes = nodeList;

        return JSON.stringify(obj);
    }

}