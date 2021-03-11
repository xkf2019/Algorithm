/**
 * 304. 二维区域和检索 - 矩阵不可变
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  let row = matrix.length
  if (row > 0) {
      let col = matrix[0].length
      this.sum = new Array(row + 1).fill(0).map(item => new Array(col + 1).fill(0))
      for (let i = 0; i < row; i++) {
          for (let j = 0; j < col; j++) {
              this.sum[i + 1][j + 1] = matrix[i][j] + this.sum[i][j + 1] + this.sum[i + 1][j] - this.sum[i][j]
          }
      }
  }
};

/** 
* @param {number} row1 
* @param {number} col1 
* @param {number} row2 
* @param {number} col2
* @return {number}
*/
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  return this.sum[row2 + 1][col2 + 1] + this.sum[row1][col1] - this.sum[row2 + 1][col1] - this.sum[row1][col2 + 1]
};

/**
* Your NumMatrix object will be instantiated and called as such:
* var obj = new NumMatrix(matrix)
* var param_1 = obj.sumRegion(row1,col1,row2,col2)
*/