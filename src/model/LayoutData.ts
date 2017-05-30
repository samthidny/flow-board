import SimpleEventDispatcher from '../SimpleEventDispatcher';

export default class LayoutData extends SimpleEventDispatcher {

    private _x:number;
    private _y:number;
    private _width:number;
    private _height:number;

    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.width = 0;
        this.height = 0;
    }

    updated() {
        this.emit("CHANGE");
    }

	public get x(): number {
		return this._x;
	}

	public set x(value: number) {
		this._x = value;
        this.updated();
	}

	public get y(): number {
		return this._y;
	}

	public set y(value: number) {
		this._y = value;
        this.updated();
	}

	public get width(): number {
		return this._width;
	}

	public set width(value: number) {
		this._width = value;
	}

	public get height(): number {
		return this._height;
	}

	public set height(value: number) {
		this._height = value;
	}

    

}