var addTwoNumbers = function(l1, l2) {

    // variable to track if adding two numbers is 10 or higher
    let leftOver = false;
    // current node of first singly-linked list
    let currentNodeOne = l1;
    // current node of second singly-linked list
    let currentNodeTwo = l2;
    
    // first node of new sigly-linked list
    let newList = null;
    // current node of new singly-linked list
    let currentNodeNewList = null;
    
    // program runs until currentNodeOne, currentNodeTwo, and leftOver return false.
    while(!!currentNodeOne || !!currentNodeTwo || leftOver ) {
        
        //initialize the values for the two nodes.
        let nodeOneValue = 0;
        let nodeTwoValue = 0;
        
        // if currentNodeOne is null: value to 0. Else set value to value in node
        if ( !!currentNodeOne ) nodeOneValue =  currentNodeOne.val 
        else nodeOneValue = 0;
        
        // if currentNodeTwo is null: value to 0. Else set value to value in node
        if ( !!currentNodeTwo ) nodeTwoValue =  currentNodeTwo.val 
        else nodeTwoValue = 0;
        
        // add the two numbers together. If there was a value left over from the last node: add it to the total. 
        let total = nodeOneValue + nodeTwoValue + leftOver;
        
        // set leftOver to false to reset it. 
        leftOver = false;
        
        // if the total is greater than 9: set leftOver to true and subtract 10 from total.
        if ( total > 9 ) {
            leftOver = true;
            total = total - 10;
        }
        
        // create a new node with the value as the total. 
        const newNode = { val: total, next: null };
        
        // if newList is null: make the new node the head of the list.
        if (newList === null) newList = newNode;
        // otherwise, add the node to the currentNode
        else currentNodeNewList.next = newNode;
        
        // set the current node to the new node.
        currentNodeNewList = newNode;
        
        // if node one is not null: make the current node the next node.
        if ( !!currentNodeOne ) currentNodeOne = currentNodeOne.next;
        
        // if node two is not null: make the current node the next node.
        if ( !!currentNodeTwo ) currentNodeTwo = currentNodeTwo.next;
    }
    
    return newList;
};