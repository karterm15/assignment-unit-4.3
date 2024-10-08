console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

let basket = [];
const maxItems = 5;

function addItem  ( item ){
    if (isFull()){
        console.log( 'there is no room');
        return false;
    }
    console.log( 'addItem', item);
     basket.push( item );
     return true;
}

function listItems(){
    for (let i=0; i < basket.length; i++){
        console.log(basket[i]);
    }
    return true;
}

function empty(){
    console.log( 'empty');
    basket.length = 0;
}

function isFull(){
    if (basket.length < maxItems){
        return false;
    } else (basket.length >= maxItems)
        return true;
}





// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
