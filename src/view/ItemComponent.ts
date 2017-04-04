import NodeComponent from './NodeComponent';
import Point from '../model/Point';
import Item from '../model/Item';
export default class ItemComponent {

    //The SVG component
    private _view:any;
    private _model:Item;
    private _nodes:Array<NodeComponent>;
    private _position:Point;

    constructor() {
        this._position = new Point(0, 0);
    }

    set x(value:number){
        console.log("--- Set this component x to " + value);
        this._position.x = value;
        this.updateView();
    }

    get x():number {
        return this._position.x;
    }

    set y(value:number){
        this._position.y = value;
        this.updateView();
    }

    get y():number {
        return this._position.y;
    }

    public get view(): any {
		return this._view;
	}

	public set view(value: any) {
		this._view = value;

        //Set up listeners for drag drop etc

        
        //this._view.drag((dx:number, dy:number, posx:number, posy:number) => { this.moveHandler(dx, dy, posx, posy); }, this.startDragHandler, this.stopDragHandler);
        
        var component = this;

        var move = function(dx:number,dy:number) {
            console.log("Drag");
            this.attr({
                        transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                    });
        }

        var start = function() {
                this.data('origTransform', this.transform().local );
        }
        var stop = function() {
                var box = this.getBBox();
                console.log('Finished dragging ' + box);
                component.model.layout.x = box.x;
                component.model.layout.y = box.y;
               
        }

        this._view.drag(move, start, stop);

	}

    public get model(): Item {
		return this._model;
	}

	public set model(value: Item) {
		console.log("Add Listener on Model");
        this._model = value;
        this._model.layout.addListener("CHANGE", () => {
            console.log("Component Heard Model Change");
            this.x = this.model.layout.x;
            this.y = this.model.layout.y;
            
        });
	}


    public addNode(node:NodeComponent):void {
        this._nodes.push(node);
    }

    updateView() {
        this.view.attr({transform: "t" + this._position.x + "," + this._position.y + "s"});
    }

    moveHandler(dx:number, dy:number, posx:number, posy:number) :void
    {
        console.log("MOVE!!!!");
        //this.x = posx;
        //this.y = posy
        this._view.attr( { cx: posx , cy: posy } ); // basic drag, you would want to adjust to take care of where you grab etc.
    }

    startDragHandler() :void
    {
        console.log("START DRAG");
    }

    stopDragHandler() :void
    {
        console.log("STOP DRAG");
    }

    

}