const SIDE_PER_DIE = 6;

const rollDie = function (n) {
    return Array.from({length: n}, () => Math.floor(Math.random() * SIDE_PER_DIE + 1));
};

const isWinner = function (arr, target) {
    return arr.reduce((acc, curr) => acc + curr, 0) === target 
};

export {rollDie, isWinner, SIDE_PER_DIE};