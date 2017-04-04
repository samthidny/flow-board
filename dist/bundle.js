/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Event = (function () {
    function Event() {
        this._listeners = [];
        this._maxListeners = null;
    }
    Event.prototype.addListener = function (event, listener) {
        return this.on(event, listener);
    };
    Event.prototype.emit = function (event) {
        var a = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            a[_i - 1] = arguments[_i];
        }
        var listeners = this._listeners.filter(function (item) { return item.event === event; });
        /* istanbul ignore next */
        listeners.forEach(function (item) { return item.listener.apply({}, a || []); });
        this._listeners = listeners.filter(function (item) { return !item.once; });
        return listeners.length !== 0 ? true : false;
    };
    Event.prototype.getMaxListeners = function () {
        return this._maxListeners === null ? Event.defaultMaxListeners : this._maxListeners;
    };
    Event.prototype.listenerCount = function (event) {
        return this._listeners.filter(function (item) { return item.event === event; })
            .length;
    };
    Event.prototype.listeners = function (event) {
        return this._filterMatchingEvents(event)
            .map(function (item) { return item.listener; })
            .reverse();
    };
    Event.prototype.on = function (event, listener) {
        this._register(event, listener, false);
        return this;
    };
    Event.prototype.once = function (event, listener) {
        this._register(event, listener, true);
        return this;
    };
    Event.prototype.removeAllListeners = function (event) {
        this._listeners = this._filterNonMatchingEvents(event);
        return this;
    };
    Event.prototype.removeListener = function (event, listener) {
        this._listeners = this._listeners.filter(function (item) {
            return !((item.event === event) && (item.listener === listener));
        });
        return this;
    };
    Event.prototype.setMaxListeners = function (thresshold) {
        this._maxListeners = thresshold;
        return this;
    };
    Event.prototype._filterMatchingEvents = function (event) {
        return this._listeners.filter(function (item) { return item.event === event; });
    };
    Event.prototype._filterNonMatchingEvents = function (event) {
        return this._listeners.filter(function (item) { return item.event !== event; });
    };
    Event.prototype._register = function (event, listener, once) {
        !this._checkListenerLimitReached(event) && this._listeners.unshift({ event: event, listener: listener, once: once });
        return;
    };
    Event.prototype._returnListenerLimit = function () {
        return this._maxListeners === null ? Event.defaultMaxListeners : this._maxListeners;
    };
    Event.prototype._checkListenerLimitReached = function (event) {
        var limitReached = this.listenerCount(event) === this._returnListenerLimit() ? true : false;
        limitReached && console.log("Listener Limit Reached");
        return limitReached;
    };
    Event.defaultMaxListeners = 10;
    return Event;
}());
exports.Event = Event;

//# sourceMappingURL=typescript.events.js.map


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constants for Join Types - Can be LEFT, RIGHT or BOTH.
 */
var ModelEvents = (function () {
    function ModelEvents(type) {
        this.type = type;
    }
    return ModelEvents;
}());
ModelEvents.ITEM_ADDED = new ModelEvents("ITEM_ADDED");
ModelEvents.NODE_ADDED = new ModelEvents("NODE_ADDED");
ModelEvents.JOIN_ADDED = new ModelEvents("JOIN_ADDED");
exports.default = ModelEvents;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.default = Point;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Constants for Join Types - Can be LEFT, RIGHT or BOTH.
 */
var JoinType = (function () {
    function JoinType(type) {
        this.type = type;
    }
    return JoinType;
}());
JoinType.RIGHT = new JoinType("RIGHT");
JoinType.LEFT = new JoinType("LEFT");
JoinType.BOTH = new JoinType("BOTH");
exports.default = JoinType;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_events_1 = __webpack_require__(0);
var LayoutData = (function (_super) {
    __extends(LayoutData, _super);
    function LayoutData() {
        var _this = _super.call(this) || this;
        _this.x = 0;
        _this.y = 0;
        _this.width = 0;
        _this.height = 0;
        return _this;
    }
    LayoutData.prototype.updated = function () {
        this.emit("CHANGE");
    };
    Object.defineProperty(LayoutData.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            this._x = value;
            this.updated();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutData.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            this._y = value;
            this.updated();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutData.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LayoutData.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (value) {
            this._height = value;
        },
        enumerable: true,
        configurable: true
    });
    return LayoutData;
}(typescript_events_1.Event));
exports.default = LayoutData;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ModelEvents_1 = __webpack_require__(1);
var Join_1 = __webpack_require__(9);
var Model_1 = __webpack_require__(10);
var BoardView_1 = __webpack_require__(13);
var ItemComponentFactory_1 = __webpack_require__(15);
var JoinComponent_1 = __webpack_require__(18);
/**
 * The core API used to access and control the diagram
 */
var FlowBoard = (function () {
    function FlowBoard() {
        console.log("FlowBoard 1.0");
        this.model = new Model_1.default();
        this.view = new BoardView_1.default();
        this.model.addListener(ModelEvents_1.default.ITEM_ADDED.type, this.itemAddedHandler);
    }
    FlowBoard.prototype.itemAddedHandler = function (event) {
        console.log("FlowBoard Heard an Item has been added");
    };
    FlowBoard.prototype.nodeAddedHandler = function (event) {
        console.log("FlowBoard Heard an Node has been added");
    };
    FlowBoard.prototype.join = function (node1, node2, joinType) {
        var join = new Join_1.default(node1, node2, joinType);
        this.model.addJoin(join);
    };
    FlowBoard.prototype.draw = function () {
        var _this = this;
        console.log("");
        console.log("--- DRAW ---");
        console.log("");
        // For Each Item create an ItemComponent
        this.model.items.forEach(function (item) {
            var factory = new ItemComponentFactory_1.default();
            var itemComponent = factory.create(item);
            itemComponent.model = item;
            _this.view.add(itemComponent);
            itemComponent.x = item.layout.x;
            itemComponent.y = item.layout.y;
            console.log("Position Item at " + item.layout.x + " " + item.layout.y);
            console.log("Size Item at " + item.layout.width + " " + item.layout.height);
            console.log("Draw the Item based on its shape  " + item.shapeTemplate.points);
        });
        //Join the items
        this.model.joins.forEach(function (join) {
            var joinComponent = new JoinComponent_1.default();
            joinComponent.model = join;
        });
    };
    return FlowBoard;
}());
exports.default = FlowBoard;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_events_1 = __webpack_require__(0);
var LayoutData_1 = __webpack_require__(4);
var ShapeTemplate_1 = __webpack_require__(12);
/**
 * Represents an item on the drawing board - an item contains nodes that can join to other item nodes.
 */
var Item = (function (_super) {
    __extends(Item, _super);
    function Item() {
        var _this = _super.call(this) || this;
        _this.nodes = [];
        _this._shapeTemplate = new ShapeTemplate_1.default();
        _this.layout = new LayoutData_1.default();
        return _this;
    }
    Object.defineProperty(Item.prototype, "shapeTemplate", {
        get: function () {
            return this._shapeTemplate;
        },
        set: function (value) {
            //For now only allow a shape to be defined once, in future they can be swapped
            if (this._shapeTemplate) {
                throw new Error("Shape Template already set, this feature isnt supported yet!");
            }
            this.clearShape();
            this._shapeTemplate = value;
        },
        enumerable: true,
        configurable: true
    });
    Item.prototype.addNode = function (node) {
        node.parent = this;
        this.nodes.push(node);
        console.log("Node added");
        return node;
    };
    Item.prototype.getNodeAt = function (index) {
        return this.nodes[index];
    };
    Item.prototype.clearShape = function () {
        // Nice to have - For dynamically changing shapes, this will clear all data and try to keep joins (if possible) and position the same
    };
    return Item;
}(typescript_events_1.Event));
exports.default = Item;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_events_1 = __webpack_require__(0);
var ModelEvents_1 = __webpack_require__(1);
var LayoutData_1 = __webpack_require__(4);
/**
 * An instance of a Node in the diagram that can be joined to other Nodes via a Join
 */
var Node = (function (_super) {
    __extends(Node, _super);
    function Node() {
        var _this = _super.call(this) || this;
        _this.layout = new LayoutData_1.default();
        return _this;
    }
    Object.defineProperty(Node.prototype, "join", {
        get: function () {
            return this._join;
        },
        set: function (value) {
            this._join = value;
            this.emit(ModelEvents_1.default.JOIN_ADDED.type);
        },
        enumerable: true,
        configurable: true
    });
    return Node;
}(typescript_events_1.Event));
exports.default = Node;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var FlowBoard_1 = __webpack_require__(5);
var Item_1 = __webpack_require__(6);
var Node_1 = __webpack_require__(7);
var JoinType_1 = __webpack_require__(3);
var board = new FlowBoard_1.default();
var item1 = new Item_1.default();
var item2 = new Item_1.default();
var item3 = new Item_1.default();
var item4 = new Item_1.default();
var item5 = new Item_1.default();
var item6 = new Item_1.default();
//Position them
item1.layout.x = 100;
item1.layout.y = 100;
item2.layout.x = 300;
item2.layout.y = 100;
item3.layout.x = 300;
item3.layout.y = 300;
item4.layout.x = 100;
item4.layout.y = 300;
item5.layout.x = 500;
item5.layout.y = 100;
item6.layout.x = 500;
item6.layout.y = 300;
//Add some dummy nodes to each
addNodes(item1);
addNodes(item2);
addNodes(item3);
addNodes(item4);
addNodes(item5);
addNodes(item6);
//Add them to the board
board.model.addItem(item1);
board.model.addItem(item2);
board.model.addItem(item3);
board.model.addItem(item4);
board.model.addItem(item5);
board.model.addItem(item6);
//Join box 1 to 2 like this:
board.join(item1.getNodeAt(1), item2.getNodeAt(3), JoinType_1.default.RIGHT);
board.join(item2.getNodeAt(2), item3.getNodeAt(0), JoinType_1.default.RIGHT);
board.join(item2.getNodeAt(1), item5.getNodeAt(3), JoinType_1.default.RIGHT);
board.join(item5.getNodeAt(2), item6.getNodeAt(0), JoinType_1.default.RIGHT);
board.join(item6.getNodeAt(3), item3.getNodeAt(1), JoinType_1.default.RIGHT);
board.join(item3.getNodeAt(3), item4.getNodeAt(1), JoinType_1.default.RIGHT);
board.draw();
//Adds dummy node data to the model Item - these will later be bound to a node component
function addNodes(item) {
    for (var i = 0; i < 4; i++) {
        var node = new Node_1.default();
        item.addNode(node);
    }
}
window.document.getElementById("test-button").addEventListener("click", function () {
    console.log("Clicked");
    item1.layout.x = 500;
    item1.layout.y = 200;
});


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents the joining of 2 nodes, handles direction etc so Nodes don't need to
 */
var Join = (function () {
    function Join(node1, node2, joinType) {
        this.node1 = node1;
        this.node2 = node2;
        this.node1.join = this;
        this.node2.join = this;
        console.log("Joined nodes");
    }
    return Join;
}());
exports.default = Join;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_events_1 = __webpack_require__(0);
var ModelEvents_1 = __webpack_require__(1);
var Model = (function (_super) {
    __extends(Model, _super);
    function Model() {
        var _this = _super.call(this) || this;
        _this.items = [];
        _this.joins = [];
        return _this;
    }
    Model.prototype.addItem = function (item) {
        this.items.push(item);
        console.log("Item Added");
        item.addListener(ModelEvents_1.default.NODE_ADDED.type, this.nodeAddedHandler);
        this.emit(ModelEvents_1.default.ITEM_ADDED.type);
        return item;
    };
    Model.prototype.addJoin = function (join) {
        this.joins.push(join);
        this.emit(ModelEvents_1.default.JOIN_ADDED.type);
        return join;
    };
    Model.prototype.removeJoin = function (join) {
        this.joins.splice(this.joins.indexOf(join), 1);
    };
    Model.prototype.nodeAddedHandler = function () {
        console.log("Item heard a Node was added");
    };
    return Model;
}(typescript_events_1.Event));
exports.default = Model;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Defines the type and poisition of a node within a shape template and join type for validation
 */
var NodeTemplate = (function () {
    function NodeTemplate(point, joinType) {
        this.point = point;
        this.joinType = joinType;
    }
    return NodeTemplate;
}());
exports.default = NodeTemplate;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(2);
var JoinType_1 = __webpack_require__(3);
var NodeTemplate_1 = __webpack_require__(11);
/**
 * Contains the data of how this shape should be drawn
 */
var ShapeTemplate = (function () {
    function ShapeTemplate() {
        this.width = 100;
        this.height = 50;
        // Hardcoded a simple rectangle for now
        this.points = [new Point_1.default(0.5, 0), new Point_1.default(1, 0.5), new Point_1.default(0.5, 1), new Point_1.default(0, 0.5)];
        this.nodes = [new NodeTemplate_1.default(new Point_1.default(0.5, 0), JoinType_1.default.BOTH), new NodeTemplate_1.default(new Point_1.default(1, 0.5), JoinType_1.default.BOTH), new NodeTemplate_1.default(new Point_1.default(0.5, 1), JoinType_1.default.BOTH), new NodeTemplate_1.default(new Point_1.default(0, 0.5), JoinType_1.default.BOTH)];
    }
    return ShapeTemplate;
}());
exports.default = ShapeTemplate;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * The View Mediator for the main drawing board that contains Items
 */
var BoardView = (function () {
    function BoardView() {
    }
    BoardView.prototype.add = function (item) {
        //Adds the group to the SVG canvas
    };
    return BoardView;
}());
exports.default = BoardView;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(2);
var ItemComponent = (function () {
    function ItemComponent() {
        this._position = new Point_1.default(0, 0);
    }
    Object.defineProperty(ItemComponent.prototype, "x", {
        get: function () {
            return this._position.x;
        },
        set: function (value) {
            console.log("--- Set this component x to " + value);
            this._position.x = value;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "y", {
        get: function () {
            return this._position.y;
        },
        set: function (value) {
            this._position.y = value;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "view", {
        get: function () {
            return this._view;
        },
        set: function (value) {
            this._view = value;
            //Set up listeners for drag drop etc
            //this._view.drag((dx:number, dy:number, posx:number, posy:number) => { this.moveHandler(dx, dy, posx, posy); }, this.startDragHandler, this.stopDragHandler);
            var component = this;
            var move = function (dx, dy) {
                console.log("Drag");
                this.attr({
                    transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [dx, dy]
                });
            };
            var start = function () {
                this.data('origTransform', this.transform().local);
            };
            var stop = function () {
                var box = this.getBBox();
                console.log('Finished dragging ' + box);
                component.model.layout.x = box.x;
                component.model.layout.y = box.y;
            };
            this._view.drag(move, start, stop);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ItemComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            var _this = this;
            console.log("Add Listener on Model");
            this._model = value;
            this._model.layout.addListener("CHANGE", function () {
                console.log("Component Heard Model Change");
                _this.x = _this.model.layout.x;
                _this.y = _this.model.layout.y;
            });
        },
        enumerable: true,
        configurable: true
    });
    ItemComponent.prototype.addNode = function (node) {
        this._nodes.push(node);
    };
    ItemComponent.prototype.updateView = function () {
        this.view.attr({ transform: "t" + this._position.x + "," + this._position.y + "s" });
    };
    ItemComponent.prototype.moveHandler = function (dx, dy, posx, posy) {
        console.log("MOVE!!!!");
        //this.x = posx;
        //this.y = posy
        this._view.attr({ cx: posx, cy: posy }); // basic drag, you would want to adjust to take care of where you grab etc.
    };
    ItemComponent.prototype.startDragHandler = function () {
        console.log("START DRAG");
    };
    ItemComponent.prototype.stopDragHandler = function () {
        console.log("STOP DRAG");
    };
    return ItemComponent;
}());
exports.default = ItemComponent;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemComponent_1 = __webpack_require__(14);
var NodeComponentFactory_1 = __webpack_require__(17);
var ShapeFactory = (function () {
    function ShapeFactory() {
    }
    ShapeFactory.prototype.create = function (item) {
        var component = new ItemComponent_1.default();
        component.view = this.drawShape(item.shapeTemplate);
        //Add the Node Buttons
        item.shapeTemplate.nodes.forEach(function (nodeData, index) {
            //Create a NodeComponent Button and position it within the group
            var nodeComponentFactory = new NodeComponentFactory_1.default();
            var nodeComponent = nodeComponentFactory.create();
            nodeComponent.view = component.view.rect(-5, -5, 10, 10);
            //Bind the node to the Node model
            nodeComponent.model = item.getNodeAt(index);
            //This ItemComponentFactory is responsible for putting the node buttons in place within the Item Component group
            nodeComponent.x = nodeData.point.x * item.shapeTemplate.width;
            nodeComponent.y = nodeData.point.y * item.shapeTemplate.height;
        });
        return component;
    };
    /**
     * Converts an array of points into a flat array of [x, y, x, y ... ]
     */
    ShapeFactory.prototype.flattenPoints = function (points, width, height) {
        var flat = [];
        points.forEach(function (point) {
            flat.push(point.x * width);
            flat.push(point.y * height);
        });
        return flat;
    };
    /**
     *
     * @param shapeTemplate Builds the shape SVG
     */
    ShapeFactory.prototype.drawShape = function (shapeTemplate) {
        var s = Snap("#svg");
        var shape = s.polyline(this.flattenPoints(shapeTemplate.points, shapeTemplate.width, shapeTemplate.height));
        var group = s.group(shape);
        shape.attr({ id: "shape", fill: '#FF0000' });
        return group;
    };
    return ShapeFactory;
}());
exports.default = ShapeFactory;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NodeComponent = (function () {
    function NodeComponent() {
    }
    Object.defineProperty(NodeComponent.prototype, "x", {
        get: function () {
            return this.model.layout.x;
        },
        set: function (value) {
            this.model.layout.x = value;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeComponent.prototype, "y", {
        get: function () {
            return this.model.layout.y;
        },
        set: function (value) {
            this.model.layout.y = value;
            this.updateView();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NodeComponent.prototype, "view", {
        get: function () {
            return this._view;
        },
        set: function (value) {
            this._view = value;
            //Set up listeners for drag drop etc
            this._view.drag();
        },
        enumerable: true,
        configurable: true
    });
    NodeComponent.prototype.updateView = function () {
        this.view.attr({ transform: "t" + this.model.layout.x + "," + this.model.layout.y + "s" });
    };
    return NodeComponent;
}());
exports.default = NodeComponent;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NodeComponent_1 = __webpack_require__(16);
var NodeComponentFactory = (function () {
    function NodeComponentFactory() {
    }
    NodeComponentFactory.prototype.create = function () {
        var nodeComponent = new NodeComponent_1.default();
        //nodeComponent.view = this.drawNodeComponent();
        //nodeComponent.node
        return nodeComponent;
    };
    NodeComponentFactory.prototype.drawNodeComponent = function () {
        //Draws the SVG node button
        return {};
    };
    return NodeComponentFactory;
}());
exports.default = NodeComponentFactory;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var typescript_events_1 = __webpack_require__(0);
var JoinComponent = (function (_super) {
    __extends(JoinComponent, _super);
    function JoinComponent() {
        return _super.call(this) || this;
    }
    JoinComponent.prototype.drawLine = function () {
        if (this._view) {
            this._view.clear();
        }
        var s = Snap("#svg");
        // Local to Global coords
        var x1 = this._model.node1.parent.layout.x + this._model.node1.layout.x;
        var y1 = this._model.node1.parent.layout.y + this._model.node1.layout.y;
        var x2 = this._model.node2.parent.layout.x + this._model.node2.layout.x;
        var y2 = this._model.node2.parent.layout.y + this._model.node2.layout.y;
        //var line = s.line(this._model.node1.parent.layout.x, this._model.node1.parent.layout.y, this._model.node2.parent.layout.x, this._model.node2.parent.layout.y);
        var line = s.line(x1, y1, x2, y2);
        var group = s.group(line);
        line.attr({
            stroke: "#1f2c39",
            strokeWidth: 3
        });
        this._view = group;
        return group;
    };
    JoinComponent.prototype.layoutChangeHandler = function () {
        console.log("LAYOUT CHANGED, REDRAW JOIN");
        this.drawLine();
    };
    Object.defineProperty(JoinComponent.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            var _this = this;
            this._model = value;
            this.view = this.drawLine();
            this._model.node1.parent.layout.addListener("CHANGE", function () { _this.layoutChangeHandler(); });
            this._model.node2.parent.layout.addListener("CHANGE", function () { _this.layoutChangeHandler(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JoinComponent.prototype, "view", {
        get: function () {
            return this._view;
        },
        set: function (value) {
            this._view = value;
        },
        enumerable: true,
        configurable: true
    });
    return JoinComponent;
}(typescript_events_1.Event));
exports.default = JoinComponent;


/***/ })
/******/ ]);