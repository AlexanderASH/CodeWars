
export function riverSizes(matrix: number[][]) {
	let stack: number[][] = [];
	let visited: boolean[][] = matrix.map((row: number[]) => row.map((column: number) => false));
	let results: number[] = [];

	for (let row = 0; row < matrix.length; row++) {
		for (let column = 0; column < matrix[row].length; column++) {
			if (matrix[row][column] === 1 && visited[row][column] === false) {
				visited[row][column] = true;
				results.push(check(stack, row, column, visited, matrix));
			}
		}
	}

	return results;
}

function check(stack: number[][], row: number, column: number, visited: boolean[][], matrix: number[][]) {
    stack.push([row, column]);
	getAdyacents(row, column, stack, visited, matrix);	
	let amount = 0;

	while (stack.length > 0) {
		[row, column] = stack.pop()!;
		getAdyacents(row, column, stack, visited, matrix);
		amount++;
	}

	return amount;
}

function getAdyacents(row: number, column: number, stack: number[][], visited: boolean[][], matrix: number[][]) {
	if (row - 1 >= 0 && visited[row - 1][column] === false && matrix[row - 1][column] === 1) {
		visited[row - 1][column] = true;
		stack.push([row - 1, column]);
	}
	if (column + 1 < matrix[row].length && visited[row][column + 1] === false && matrix[row][column + 1] === 1) {
		visited[row][column + 1] = true;
		stack.push([row, column + 1]);
	}
	if (row + 1 < matrix.length && visited[row + 1][column] === false && matrix[row + 1][column] === 1) {
		visited[row + 1][column] = true;
		stack.push([row + 1, column]);
	}
	if (column - 1 >= 0 && visited[row][column - 1] === false && matrix[row][column - 1] === 1) {
		visited[row][column - 1] = true;
		stack.push([row, column - 1]);
	}
}
