function minimumBribes(q) {
    let totalBribes = 0

    for(let i=0;i<q.length; i++){
        const position = i+1
        if (q[i] - position > 0){
            if (q[i]-position > 2){
                return 'too chaotic'
            }
            totalBribes += (q[i]-position);
        }
    }
    return totalBribes

}