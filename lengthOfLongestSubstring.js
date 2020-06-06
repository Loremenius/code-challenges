var lengthOfLongestSubstring = function(s) {
    
    let used = {};
    let longest = 0;
    let currentIndex = 0;
    
    for ( let i = 0; i < s.length; i++ ){
        const char = s.charAt(i);
        if ( char in used  && used[char] >= currentIndex) currentIndex = used[char] + 1;
        
        used[char] = i;
        
        const current = i - currentIndex + 1;
        if ( current > longest ) longest = current;
    }
    
    
    return longest;
};