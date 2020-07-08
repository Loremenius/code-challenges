// brute force successful code. Does not work on longer queries.
function arrayManipulation(n, queries) {
    // create an array with length n that have values of 0;
    const arr = Array( n ).fill( 0 );
    // create a variable to track highest value;
    let highest = 0;
    // creates a function to run a query given in the queries array.
    function runQuery( firstIndex, lastIndex, summand ){
        // creates a loop starting with first index given and ends with last index given;
        for(let i = firstIndex -1; i < lastIndex; i++){
            // take number at index and adds the summand to that number.
            const total = arr[i] + summand;
            // takes new total and replaces old value in array at index i; 
            arr[i] = total;
            // if the total is higher then the highest tracked number: make total new                   highest.
            if ( total > highest ) highest = total;
        }
    }
    // runs through array of queries and runs each query through the runQuery function.
    queries.forEach(( query )=>{
        // grabs the starting index designated by query.
        const firstIndex = query[0];
        // grabs the ending index designated by query.
        const lastIndex = query[1];
        // grabs the summand designated by query.
        const summand = query[2];
        // runs the query through the runQuery function.
        runQuery( firstIndex, lastIndex, summand );
    });
    // returns the highest number after all queries are completed.
    return highest;
}