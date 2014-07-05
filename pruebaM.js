
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
var matrix1 = [[5,3,8],
[6,2,4],[5,2,7]];
var matrix2 = [[3,2,5],
[8,2,1],
[0,9,10]];
matrix1.writeM();
document.writeln();
matrix2.writeM();
matrix3 = [];
matrix3.initM(3,3,0);

matrix3.multM(matrix1,matrix2);
document.writeln();
matrix3.writeM();
