export default class SimpleEventDispatcher {

    _listeners:any;

    constructor() {
        this._listeners = {};
    }

    addListener(type:string, callback:Function){
        if(!this._listeners[type]) {
            this._listeners[type] = [];
        }
        this._listeners[type].push(callback);
    }

    emit(type:string, payload?:any) {
        if(this._listeners[type]) {
            this._listeners[type].forEach((callback:Function) => {
                callback.call(this, payload);
            });
        }
    }

}