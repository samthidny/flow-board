import FlowBoard from './FlowBoard';
import Item from './model/Item';
import Node from './model/Node';
import JoinType from './model/JoinType';
import Join from './model/Join';

var board = new FlowBoard();
var item1:Item = new Item();
var item2:Item = new Item();
var item3:Item = new Item();
var item4:Item = new Item();
var item5:Item = new Item();
var item6:Item = new Item();


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

board.join(item1.getNodeAt(1), item2.getNodeAt(3), JoinType.RIGHT);
board.join(item2.getNodeAt(2), item3.getNodeAt(0), JoinType.RIGHT);
board.join(item2.getNodeAt(1), item5.getNodeAt(3), JoinType.RIGHT);
board.join(item5.getNodeAt(2), item6.getNodeAt(0), JoinType.RIGHT);
board.join(item6.getNodeAt(3), item3.getNodeAt(1), JoinType.RIGHT);
board.join(item3.getNodeAt(3), item4.getNodeAt(1), JoinType.RIGHT);




board.draw();

//Adds dummy node data to the model Item - these will later be bound to a node component
function addNodes(item:Item) {
    for(var i=0; i<4; i++) {
        var node = new Node();
        item.addNode(node);
    }
}

window.document.getElementById("test-button").addEventListener("click", () => {
    console.log("Clicked")
    item1.layout.x = 500;
    item1.layout.y = 200;
    
});

