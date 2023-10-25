// You should implement your task here.

module.exports = function towelSort(matrix = []) {
  return matrix.flatMap((item, ind) => (ind % 2 === 0 ? item : [...item].reverse()));
};
