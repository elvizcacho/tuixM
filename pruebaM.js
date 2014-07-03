
var vector = [];
var i;
vector.init(10,0);
document.writeln();
document.writeln('vector functions\n');
for(i=0;i<vector.length;i++){
  document.write(vector[i]);
}
document.writeln();
document.writeln('\nmatrix functions\n');
document.writeln('initM(fil,col,initNum); creates a matrix\ne.g:matrix1.initM(10,10,0);\nIf you wanna write the matrix in the document, you can use: writeM(); \ne.g:matrix1.writeM(); you can see the result below.\n');
var matrix1 = [];
matrix1.initM(10,10,0);
matrix1.writeM();
var matrix2 = [[1,2,3,4,5,6,7,8,9,0],
[1,2,3,4,5,6,7,8,9,0],
[1,2,3,4,5,6,7,8,9,0],
[1,2,3,4,5,6,7,8,9,0],
[1,2,3,4,5,6,7,8,9,0],
[1,2,3,4,5,6,7,8,9,0],
[1,2,3,4,5,6,7,8,9,0],
[1,2,3,4,5,6,7,8,9,0],
[1,2,3,4,5,6,7,8,9,0],
[1,2,3,4,5,6,7,8,9,0]];
document.writeln();
matrix2.writeM();
document.writeln();
matrix2.transM();
matrix2.writeM();

