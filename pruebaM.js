
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

