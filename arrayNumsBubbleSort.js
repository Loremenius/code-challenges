var sortArray = function(nums) {
    let swap = true;
    while( swap ){
        
        swap = false;
        
        for( let i=1; i < nums.length; i++ ){
            
            const currentNum = nums[i];
            
            if( currentNum < nums[i-1] ){
                
                nums[i] = nums[i-1];
                nums[i-1] = currentNum;
                swap = true;
                
            }
        }
    }
    return nums;
};
