/**
 * Constants for Join Types - Can be LEFT, RIGHT or BOTH.
 */
export default class ModelEvents {

    type:string;

    static ITEM_ADDED:ModelEvents = new ModelEvents("ITEM_ADDED");
    static NODE_ADDED:ModelEvents = new ModelEvents("NODE_ADDED");
    static JOIN_ADDED:ModelEvents = new ModelEvents("JOIN_ADDED");

    constructor(type:string) {
        this.type = type;
    }
    
    
}