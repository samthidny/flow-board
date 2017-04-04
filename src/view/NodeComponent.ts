import Point from '../model/Point';
import Node from '../model/Node';
export default class NodeComponent {

    //The SVG shape
    private _view:any;
    model:Node;

    constructor() {
       
    }

    set x(value:number){
        this.model.layout.x = value;
        this.updateView();
    }

    get x():number {
        return this.model.layout.x;
    }

    set y(value:number){
        this.model.layout.y = value;
        this.updateView();
    }

    get y():number {
        return this.model.layout.y;
    }

    public get view(): any {
		return this._view;
	}

	public set view(value: any) {
		this._view = value;

        //Set up listeners for drag drop etc
        this._view.drag();

	}

    updateView() {
        this.view.attr({transform: "t" + this.model.layout.x + "," + this.model.layout.y + "s"});
    }

}