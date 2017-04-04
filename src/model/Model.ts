import Item from './Item';
import { Event } from 'typescript.events';
import ModelEvents from './ModelEvents';
import Join from './Join';
export default class Model extends Event {

    items: Array<Item>;
    joins: Array<Join>;

    constructor() {
        super();
        this.items = [];
        this.joins = [];
    }

    addItem(item: Item): Item {
        this.items.push(item);
        console.log("Item Added");
        item.addListener(ModelEvents.NODE_ADDED.type, this.nodeAddedHandler);
        this.emit(ModelEvents.ITEM_ADDED.type);
        return item;
    }

    addJoin(join: Join): Join {
        this.joins.push(join);
        this.emit(ModelEvents.JOIN_ADDED.type);
        return join;
    }

    removeJoin(join:Join) {
        this.joins.splice(this.joins.indexOf(join), 1);
    }

    nodeAddedHandler() {
        console.log("Item heard a Node was added");
    }


}