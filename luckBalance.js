function luckBalance(k, contests) {
    const importantContests = [];
    let totalLuck = 0;
    for( let i = 0; i < contests.length; i++ ){
        totalLuck += contests[i][0];
        if( contests[i][1] === 1 ) importantContests.push( contests[i][0] );
    }
    const sorted = importantContests.sort( (a,b) => a - b );
    for( let i = 0; i < ( sorted.length - k ); i++ ){
        totalLuck -= sorted[i]*2;
    }
    return totalLuck

}
