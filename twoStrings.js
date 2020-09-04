function twoStrings(s1, s2) {
    const seen = {};
    let short;
    let long;

    if ( s1.lenght < s2.length ){
        short = s1;
        long = s2;
    } else {
        short = s2;
        long = s1;
    }

    for( let i=0; i<short.length; i++ ){
        const char = short.charAt(i);
        if ( !seen[char] ) seen[char] = true;
    }

    for( let i=0; i<long.length; i++ ){
        const char = long.charAt(i);
        if ( seen[char] ) return 'YES';
    }

    return 'NO';

}
