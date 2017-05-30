import FlowBoard from './FlowBoard';
import Item from './model/Item';
import Node from './model/Node';
import JoinType from './model/JoinType';
import Join from './model/Join';
import ViewEvents from './view/ViewEvents';
import NodeComponent from './view/NodeComponent';
import * as $ from 'jquery';
import ShapeTemplate from './model/ShapeTemplate';

export default class App {

    board: FlowBoard;
    nodes: Array<NodeComponent>;

    constructor() {
        console.log("App");
        this.nodes = [];
        this.board = new FlowBoard();
        this.board.addListener(ViewEvents.NODE_CLICKED.type, this.nodeClickedHandler.bind(this));


        window.document.getElementById("manual-button").addEventListener("click", () => {
            this.makeDiagram();
        });

        window.document.getElementById("load-button").addEventListener("click", () => {
            this.board.clear();
            this.loadDiagram();
        });

        window.document.getElementById("save-local-button").addEventListener("click", () => {
            var data = this.board.model.toJSON();
            console.log(data);
            localStorage.setItem("diagram", data);
        });

        window.document.getElementById("load-local-button").addEventListener("click", () => {
            this.board.clear();
            var data = localStorage.getItem("diagram");
            this.makeDiagramFromJSON(JSON.parse(data));
        });


        window.document.getElementById("add-decision-button").addEventListener("click", () => {
            this.addShape("Decision");
        });

        window.document.getElementById("add-state-button").addEventListener("click", () => {
            this.addShape("State");
        });

        window.document.getElementById("clear-button").addEventListener("click", () => {
            this.board.clear();
        });

    }


    loadDiagram() {
        //Load TEST.JSON
        $.getJSON("test.json", (data) => {
            console.log("JSON Loaded: " + data);
            this.makeDiagramFromJSON(data);
        });
    }

    makeDiagramFromJSON(data: any) {
        //Create the Items
        data.items.forEach((itemObj: any) => {
            var item: Item = new Item(new ShapeTemplate(itemObj.shapeTemplate));
            item.layout.x = itemObj.x;
            item.layout.y = itemObj.y;
            this.board.model.addItem(item);
        });


        data.joins.forEach((join: any) => {
            var fromItem: Item = this.board.model.getItemByID(join.fromItem);
            var fromNode: Node = fromItem.getNodeByID(join.fromNode);
            var toItem: Item = this.board.model.getItemByID(join.toItem);
            var toNode: Node = toItem.getNodeByID(join.toNode);
            this.board.join(fromNode, toNode, JoinType.RIGHT);
        });

    }


    makeDiagram() {
        var shapeTemplate: ShapeTemplate = new ShapeTemplate("rectangle");
        var item1: Item = new Item(shapeTemplate);
        var item2: Item = new Item(shapeTemplate);
        var item3: Item = new Item(shapeTemplate);
        var item4: Item = new Item(shapeTemplate);
        var item5: Item = new Item(shapeTemplate);
        var item6: Item = new Item(shapeTemplate);

        //Position them
        item1.layout.x = 100;
        item1.layout.y = 100;
        item2.layout.x = 300;
        item2.layout.y = 100;
        item3.layout.x = 300;
        item3.layout.y = 300;
        item4.layout.x = 100;
        item4.layout.y = 300;
        item5.layout.x = 500;
        item5.layout.y = 100;
        item6.layout.x = 500;
        item6.layout.y = 300;

        //Add some dummy nodes to each
        addNodes(item1);
        addNodes(item2);
        addNodes(item3);
        addNodes(item4);
        addNodes(item5);
        addNodes(item6);

        //Add them to the this.board
        this.board.model.addItem(item1);
        this.board.model.addItem(item2);
        this.board.model.addItem(item3);
        this.board.model.addItem(item4);
        this.board.model.addItem(item5);
        this.board.model.addItem(item6);

        //Join box 1 to 2 like this:
        this.board.join(item1.getNodeAt(1), item2.getNodeAt(3), JoinType.RIGHT);
        this.board.join(item2.getNodeAt(2), item3.getNodeAt(0), JoinType.RIGHT);
        this.board.join(item2.getNodeAt(1), item5.getNodeAt(3), JoinType.RIGHT);
        this.board.join(item5.getNodeAt(2), item6.getNodeAt(0), JoinType.RIGHT);
        this.board.join(item6.getNodeAt(3), item3.getNodeAt(1), JoinType.RIGHT);
        this.board.join(item3.getNodeAt(3), item4.getNodeAt(1), JoinType.RIGHT);

        //this.board.draw();

        //Adds dummy node data to the model Item - these will later be bound to a node component
        function addNodes(item: Item) {
            for (var i = 0; i < 4; i++) {
                var node = new Node();
                item.addNode(node);
            }
        }
    }


    nodeClickedHandler(node: NodeComponent) {
        console.log("NODE_CLICKED " + node);
        this.nodes.push(node);
        console.log("Node Count " + this.nodes.length);
        //Join them
        if (this.nodes.length == 2) {
            if (this.nodes[0].model.join || this.nodes[1].model.join) {
                console.log("Error, Implementation level will not attempt to join these, they already have joins")
            } else {
                this.board.join(this.nodes[0].model, this.nodes[1].model, JoinType.RIGHT);
                //this.board.draw();
            }
            this.nodes = [];
        }
    }


    addShape(type: string) {
        var shapeTemplate = new ShapeTemplate(type);
        var item: Item = new Item(shapeTemplate);
        this.board.model.addItem(item);
        //this.board.draw();
    }


}