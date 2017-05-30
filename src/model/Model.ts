import Item from './Item';
import ModelEvents from './ModelEvents';
import Join from './Join';
import SimpleEventDispatcher from '../SimpleEventDispatcher';

export default class Model extends SimpleEventDispatcher {

    items: Array<Item>;
    joins: Array<Join>;
    itemsByID: any;
    id:string;

    constructor() {
        super();
        this.clear();
        var rand:string = "MODEL" + Math.round(Math.random()*1000);
        console.log("Model Created!!!! " + rand);
        this.id = rand;
    }

    addItem(item: Item): Item {
        this.items.push(item);
        item.id = "item" + this.items.length;
        //Add for quick lookup
        this.itemsByID[item.id] = item;
        console.log("Item Added");
        item.addListener(ModelEvents.NODE_ADDED.type, this.nodeAddedHandler);
        this.emit(ModelEvents.ITEM_ADDED.type, item);
        return item;
    }

    getItemByID(id: string): Item {
        return this.itemsByID[id];
    }

    addJoin(join: Join): Join {
        this.joins.push(join);
        this.emit(ModelEvents.JOIN_ADDED.type, join);
        console.log("Model.dispatch JOIN_ADDED");
        return join;
    }

    
    Join(join: Join) {
        this.joins.splice(this.joins.indexOf(join), 1);
    }

    nodeAddedHandler() {
        console.log("Item heard a Node was added");
    }

    toJSON(): string {
        let arr: Array<string> = [];
        let json: string = "{";
        this.items.forEach((item: Item) => {
            arr.push(item.toJSON());
        });
        json += '"items":[' + arr.toString() + "],";
        arr = [];
        this.joins.forEach((join: Join) => {
            arr.push(join.toJSON());
        });
        json += '"joins":[' + arr.toString() + "]";
        json += "}";
        return json;
    }

    clear() {
        this.items = [];
        this.joins = [];
        this.itemsByID = {};
    }


}