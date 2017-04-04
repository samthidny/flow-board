import Diagram from './model/Model';
import ModelEvents from './model/ModelEvents';
import Join from './model/Join';
import Node from './model/Node';
import JoinType from './model/JoinType';
import Item from './model/Item';
import Model from './model/Model';
import BoardView from './view/BoardView';
import ItemComponent from './view/ItemComponent';
import ItemComponentFactory from './view/ItemComponentFactory';
import JoinComponent from './view/JoinComponent';

/**
 * The core API used to access and control the diagram
 */

export default class FlowBoard {

    model:Model;
    view:BoardView;

    constructor() {
        console.log("FlowBoard 1.0");
        this.model = new Model();
        this.view = new BoardView();
        this.model.addListener(ModelEvents.ITEM_ADDED.type, this.itemAddedHandler);
    }

    itemAddedHandler(event:Event) {
        console.log("FlowBoard Heard an Item has been added");
    }
    
    nodeAddedHandler(event:Event) {
        console.log("FlowBoard Heard an Node has been added");
    }

    join(node1:Node, node2:Node, joinType:JoinType) {
        var join:Join = new Join(node1, node2, joinType);
        this.model.addJoin(join);
    }

    draw() {
        
        console.log("");
        console.log("--- DRAW ---");
        console.log("");
        
        // For Each Item create an ItemComponent
        this.model.items.forEach((item:Item) => {
            
            var factory:ItemComponentFactory = new ItemComponentFactory();
            var itemComponent:ItemComponent = factory.create(item);

            itemComponent.model = item;

            this.view.add(itemComponent);
            itemComponent.x = item.layout.x;
            itemComponent.y = item.layout.y;


            console.log("Position Item at " + item.layout.x + " " + item.layout.y);
            console.log("Size Item at " + item.layout.width + " " + item.layout.height);
            console.log("Draw the Item based on its shape  " + item.shapeTemplate.points);
        });

        //Join the items
        this.model.joins.forEach((join:Join) => {

            var joinComponent:JoinComponent = new JoinComponent();
            joinComponent.model = join;

        });

    }

}