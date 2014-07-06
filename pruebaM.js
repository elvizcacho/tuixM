
/*var vector = [];
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
matrix3.writeM();*/

var v1 = new Vector([1,2,3,4,5,6,7,8,9]);
document.writeln(v1[0]);
document.writeln('longitud de v1 '+v1.length);
var i;
for(i=0;i<v1.length;i++){
  document.write(v1[i]);
}

var m1 = new Matrix(10.0,5);
var m2 = new Matrix([[1,2,3],[4,5,6],[7,8,9]]);
document.writeln('\nfilas de m1 ' + m1.getNumberOfRows());
document.writeln('\nfilas de m2 ' + m2.getNumberOfRows());
m1.writeM();
document.writeln();
m2.writeM();
document.writeln('m1[0][0] vale: '+m1[0][0]);
var m3 = Mmath.transM(m2);
m3.writeM();
var m4 = Mmath.toEach(m3,function(num){
  return num+=2;
});
document.writeln('m1[0][0] vale: '+m1[0][0]);
m4.writeM();
document.writeln('////////fbM//////');
var m5 = Mmath.sum(m3,m4);
m5.writeM();
var m6 = Mmath.mult(m3,m4);
document.writeln('////////fbM//////');
m6.copy(m2);
m6.writeM();

