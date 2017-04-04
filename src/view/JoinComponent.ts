import { Event } from 'typescript.events';
import Join from '../model/Join';

export default class JoinComponent extends Event {

    private _model:Join;
    private _view:any;

    constructor() {
        super();
        
    }

    drawLine():Object {
        if(this._view) {
            this._view.clear();
        }
        
        var s = Snap("#svg");
        
        // Local to Global coords
        var x1:number = this._model.node1.parent.layout.x + this._model.node1.layout.x;
        var y1:number = this._model.node1.parent.layout.y + this._model.node1.layout.y;
        var x2:number = this._model.node2.parent.layout.x + this._model.node2.layout.x;
        var y2:number = this._model.node2.parent.layout.y + this._model.node2.layout.y;
        
        //var line = s.line(this._model.node1.parent.layout.x, this._model.node1.parent.layout.y, this._model.node2.parent.layout.x, this._model.node2.parent.layout.y);
        var line = s.line(x1, y1, x2, y2);
        var group = s.group(line);

        line.attr({
            stroke: "#1f2c39",
            strokeWidth: 3
        });
        
        this._view = group;
        
        return group;
    }

    layoutChangeHandler() {
        console.log("LAYOUT CHANGED, REDRAW JOIN");
        this.drawLine();
    }

    public get model(): Join {
		return this._model;
	}

	public set model(value: Join) {
		this._model = value;
        this.view = this.drawLine();
        this._model.node1.parent.layout.addListener("CHANGE", () => { this.layoutChangeHandler() });
        this._model.node2.parent.layout.addListener("CHANGE", () => { this.layoutChangeHandler() });
        
	}

    public get view(): any {
		return this._view;
	}

	public set view(value: any) {
		this._view = value;
	}

}