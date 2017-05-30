import SimpleEventDispatcher from '../SimpleEventDispatcher';


export default class TestEvent extends SimpleEventDispatcher {

    constructor() {
        super();
    }

    test(event:string) {
        this.emit(event);
    } 

}