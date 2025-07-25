const rollDie = function (n) {
    return Array.from({length: n}, () => Math.floor(Math.random() * 6 + 1));
};

const isWinner = function (arr, target) {
    return arr.reduce((acc, curr) => acc + curr, 0) === target 
};

export {rollDie, isWinner};