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
import ViewEvents from './view/ViewEvents';
import NodeComponent from './view/NodeComponent';
import SimpleEventDispatcher from './SimpleEventDispatcher';

/**
 * The core API used to access and control the diagram
 */

export default class FlowBoard extends SimpleEventDispatcher {

    model: Model;
    view: BoardView;
    itemComponentsByID: any;
    joinComponentsByID: any;

    constructor() {
        super();
        console.log("FlowBoard 1.0");
        this.itemComponentsByID = {};
        this.joinComponentsByID = {};
        this.model = new Model();
        this.view = new BoardView();

        this.model.addListener("JOIN_ADDED", (join:Join) => { this.joinAddedHandler(join) });
        this.model.addListener("ITEM_ADDED", (item:Item) => { this.itemAddedHandler(item) });

    }

    //MODEL EVENTS
    itemAddedHandler(item: Item) {
        console.log("FlowBoard Heard an Item has been added and has added listeners");
        this.addItemComponent(item);
    }

    nodeAddedHandler(event: Event) {
        console.log("FlowBoard Heard an Node has been added");
    }

    joinAddedHandler(join: Join) {
        console.log("***** FlowBoard Heard a join has been created");
        var joinComponent: JoinComponent = new JoinComponent();
        joinComponent.model = join;
        this.joinComponentsByID[join.id] = joinComponent;
    }

    // Client API to join 2 nodes
    join(node1: Node, node2: Node, joinType: JoinType) {
        console.log("FlowBoard.join");
        //TODO - Decide where validation should Position
        if (node1.join || node2.join) {
            console.log("Invalid!!! This Node already has a Join");
            return;
        }

        var join: Join = new Join(node1, node2, joinType);
        this.model.addJoin(join);


    }


    addItemComponent(item: Item) {
        var factory: ItemComponentFactory = new ItemComponentFactory();
        var itemComponent: ItemComponent = factory.create(item);

        itemComponent.model = item;

        this.view.add(itemComponent);
        itemComponent.x = item.layout.x;
        itemComponent.y = item.layout.y;

        this.itemComponentsByID[item.id] = itemComponent;

        console.log("FlowBoard is adding click handlers etc");

        // Bubble NODE_CLICKED Events
        itemComponent.addListener(ViewEvents.NODE_CLICKED.type, (nodeComponent: NodeComponent) => { console.log("FlowBoard heard NODE click"); this.emit(ViewEvents.NODE_CLICKED.type, nodeComponent) });
    }

    /*draw() {

        console.log("");
        console.log("--- DRAW ---");
        console.log("");

        // For Each Item create an ItemComponent
        this.model.items.forEach((item: Item) => {

            //this.addItemComponent(item);

        });

        //Join the items
        this.model.joins.forEach((join: Join) => {
 
             var joinComponent: JoinComponent = new JoinComponent();
             joinComponent.model = join;
             this.joinComponentsByID[join.id] = joinComponent;
         });

        console.log("JSON = " + this.model.toJSON());

    }*/

    clear() {
        // For Each Item create an ItemComponent
        this.model.items.forEach((item: Item) => {

            let itemComponent: ItemComponent = this.getItemComponentByID(item.id);
            itemComponent.clear();
        });

        this.model.joins.forEach((join: Join) => {
            let joinComponent: JoinComponent = this.getJoinComponentByID(join.id);
            joinComponent.clear();
        });

        this.model.clear();
        this.view.clear();

    }


    getItemComponentByID(id: string): ItemComponent {
        return this.itemComponentsByID[id];
    }

    getJoinComponentByID(id: string): JoinComponent {
        return this.joinComponentsByID[id];
    }



}