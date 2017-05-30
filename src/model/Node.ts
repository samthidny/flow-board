import Item from './Item';
import Join from './Join';
import ModelEvents from './ModelEvents';
import LayoutData from './LayoutData';
import SimpleEventDispatcher from '../SimpleEventDispatcher';

/**
 * An instance of a Node in the diagram that can be joined to other Nodes via a Join
 */
export default class Node extends SimpleEventDispatcher {

    id:string;
    type:String;
    private _join:Join;
    parent:Item;
    layout:LayoutData;

    constructor() {
        super();
        this.layout = new LayoutData();
    }


    set join(value:Join) {
        this._join = value;
        this.emit(ModelEvents.JOIN_ADDED.type);
    }

    get join() : Join {
        return this._join;
    }


}