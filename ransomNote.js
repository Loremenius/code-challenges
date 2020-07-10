// function takes in two arrays. The function takes words in magazine array and checks to see if they can match all the words in the note array.
// see https://www.hackerrank.com/challenges/ctci-ransom-note/problem for original problem.
function checkMagazine(magazine, note) {
    // creates empty hash table to hold unused words from magazine array.
    const seenWords = {};
    // loops through magazine array. Loop ends if loop hits end of magazine array or if there are no words left in Note array.
    for( let i = 0; i < magazine.length && note.length > 0; i++ ){
        // grabs word at i in magazine array.
        const word = magazine[i];
        // if word is the first word in note array: remove first word in Note array.
        if( word === note[0] ) note.shift();
        // otherwise add the word from magazine to seen words. If it is already in the hash table, increase the amount seen by 1.
        else if( word in seenWords === false ) seenWords[word] = 1;
        else seenWords[word] += 1;
        // While loop to check if the first word in note array is in the hash table.
        while( note[0] in seenWords ) {
            // if the amount in hash table is more than 1: decrease by 1
            if ( seenWords[note[0]] > 1 ) seenWords[note[0]] -= 1;
            // if the amount in hash table is 1: remove key and value from hash table.
            else delete seenWords[note[0]]; 
            // remove the word from note array.
            note.shift();
        }
    }
    // if there are still words in the Note array after loop: print 'No'.
    if( note.length > 0 ) console.log('No');
    // otherwise all words for note have been fulfilled and print 'Yes'.
    else console.log('Yes');


}