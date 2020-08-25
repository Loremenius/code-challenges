// https://leetcode.com/problems/brick-wall/
var leastBricks = function(wall) {
    const seen = {};
    
    wall.forEach( ( row ) => {
        
        let total = 0;
        
        for( let i = 0; i < row.length-1; i++ ){
            
            total += row[i];
            
            if( seen[total] ) seen[total] += 1;
            else seen[total] = 1;
            
        }
    });
    
    const amountAlign = Object.values(seen);
    
    if( amountAlign.length > 0 ) return wall.length - Math.max( ...amountAlign );
    else return wall.length;
};
