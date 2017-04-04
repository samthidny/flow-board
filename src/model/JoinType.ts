/**
 * Constants for Join Types - Can be LEFT, RIGHT or BOTH.
 */
export default class JoinType {

    type:string;

    static RIGHT:JoinType = new JoinType("RIGHT");
    static LEFT:JoinType = new JoinType("LEFT");
    static BOTH:JoinType = new JoinType("BOTH");

    constructor(type:string) {
        this.type = type;
    }
    
    
}