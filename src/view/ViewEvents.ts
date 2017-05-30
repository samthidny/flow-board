/**
 * Constants for Join Types - Can be LEFT, RIGHT or BOTH.
 */
export default class ViewEvents {

    type:string;

    static NODE_CLICKED:ViewEvents = new ViewEvents("NODE_CLICKED");

    constructor(type:string) {
        this.type = type;
    }
    
    
}