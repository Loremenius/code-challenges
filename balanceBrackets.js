function isBalanced(s) {
    const known = { '{':'}', '(':')', '[':']' };
    const stack = [];
    for ( let i = 0; i < s.length; i++){
        const char = s.charAt(i);
        if( known[char] ) stack.push(char);
        else {
            const stackChar = stack.pop();
            if( known[stackChar] !== char ) return 'NO'
        } 
    }
    if( stack.length > 0 ) return 'NO';
    return 'YES';
}
