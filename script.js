function minCost(arr) {
    let totalCost = 0;

    // Continue until there is only one rope
    while (arr.length > 1) {
        arr.sort((a, b) => a - b);

        // Pick the two smallest ropes
        const first = arr.shift(); // Remove the smallest
        const second = arr.shift(); // Remove the second smallest

        const cost = first + second;
        totalCost += cost;

        arr.push(cost);
    }

    return totalCost;
}

module.exports=minCost;