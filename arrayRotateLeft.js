function rotLeft(a, d) {
    const end = a.slice(0,d);
    const start = a.slice(d, a.length);
    return [...start, ...end]

}