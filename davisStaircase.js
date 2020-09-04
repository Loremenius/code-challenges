function stepPerms( n, cache = { 1:1, 2:2, 3:4 } ){
    let totalPaths = 0;
    if ( cache[n] ) return cache[n];
    totalPaths = stepPerms( n-1, cache ) + stepPerms( n-2, cache ) + stepPerms ( n-3, cache );
    cache[n] = totalPaths;
    return totalPaths;
}
