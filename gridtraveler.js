const gridTraveler = (m,n, memo={}) => {
    const key = m + ',' + n;
    //are the args in the memo

    if( key in memo) return memo[key];
    if(m === 1 && n === 1) return 1;
    if(m === 0 && n === 0) return 0;

    //if((m-1 + ',' + n) in memo) {

    //}

    memo[key] = gridTraveler(m-1, n) + gridTraveler(m, n-1);

    //memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1);
    return memo[key];
    //memo[key] = gridTraveler(m-1, n, memo)
    //return gridTraveler(m-1, n) + gridTraveler(m, n-1);
};

console.log(gridTraveler(1,1)); //1
console.log(gridTraveler(2,3)); //3
console.log(gridTraveler(3,2)); //3
console.log(gridTraveler(3,3)); //6
console.log(gridTraveler(18,18)); //2333606220

