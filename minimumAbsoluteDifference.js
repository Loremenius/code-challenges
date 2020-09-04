function minimumAbsoluteDifference(arr) {
    // initialize minimum value
    let min = null;
    // sort the array from smallest to largest
    const sortedArr = arr.sort( ( a,b ) => a-b );
    // loop through sorted array
    for ( let i = 0; i < sortedArr.length; i++ ){
        // get the absolute difference of an item and the item in front at specified index
        const absDiff = Math.abs( sortedArr[i+1] - sortedArr[i] );
        // if the difference is 0: return 0
        if ( absDiff === 0 ) return 0;
        // if the difference is smaller than the minimum or the minimum is null: set min to the absolute difference.
        if ( absDiff < min || min === null ) min = absDiff;
    }
    // returns smallest difference.
    return min;
}
