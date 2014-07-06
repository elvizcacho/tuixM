//vector constructor
var Vector = function(l){
 var i;
  document.writeln(typeof l);
  if(typeof l === 'number'){
    for(i=0;i<l;i++){
      this[i]=0;
    }
    this.length=l;
  }
  else if(typeof l === 'object'){
    for(i=0;i<l.length;i++){
      this[i]=l[i];
    }
    this.length=l.length;
  }
};
Vector.prototype = new Array;

/////////////////////////////////////MATRIXES///////////////////////
//matrix constructor
var Matrix = function(row,col){
  var i;
  var j;
  var a=[];

    this.getNumberOfRows=function(){
      if(typeof row === 'number' && typeof col === 'number'){
        return row;
      }
      else{
        return row.length;
      }
    }
  
    this.getNumberOfColums=function(){
      if(typeof row === 'number' && typeof col === 'number'){
        return col;
      }
      else{
        return row[0].length;
      }
    }

  if(typeof row === 'number' && typeof col === 'number'){
    for(j=0;j<row;j++){
      a=[];
      for(i=0;i<col;i++){
        a[i]=0;
      }
      this[j]=a;
      this[j].length=a.length;
    }
    this.length=row;
  }
  else if(typeof row === 'object'){
   for(j=0;j<row.length;j++){
      a=[];
      for(i=0;i<row[0].length;i++){
        a[i]=row[j][i];
      }
      this[j]=a;
      this[j].length=row[j].length;
    }
    this.length=row.length;
  }
};
Matrix.prototype = new Array;


//writes the whole matrix in the document.
Matrix.prototype.writeM = function(){
 for(j=0;j<this.getNumberOfRows();j++){
  for(i=0;i<this.getNumberOfColums();i++){
    document.write(this[j][i]+' ');
  }
  document.write('\n\n');
 }
}

Matrix.prototype.copy = function(matriz){//copies 'matriz' to Matrix
  var i;
  var j;
  for(j=0;j<this.getNumberOfRows();j++){
    for(i=0;i<this.getNumberOfColums();i++){
      this[j][i]=matriz[j][i];
    }
  }
}
////////////////////////////////MATRIX MATH////////////////////////////////
var Mmath = {
    
  transM:function(matrix){//returns the matrix transpose of matrix.
    var result = new Matrix(matrix.getNumberOfRows(),matrix.getNumberOfColums());
    var i,j;
    for(i=0;i<matrix.length;i++){
      for(j=0;j<matrix[i].length;j++){
       result[i][j] = matrix[j][i];
      }
    }
    return result;
  },
  toEach:function(matrix,f){//applies f to each matrix cell
    var result = new Matrix(matrix.getNumberOfRows(),matrix.getNumberOfColums());
    var i,j;
    for(j=0;j<matrix.length;j++){
      for(i=0;i<matrix[j].length;i++){
        result[j][i] = f(matrix[j][i]);
      }
    }
    return result;
  },
  fbM:function(matrix1,matrix2,f){//does f between the cells of matrix1 and matrix2
    var result = new Matrix(matrix1.getNumberOfRows(),matrix1.getNumberOfColums());
    var i,j;
    for(j=0;j<matrix1.length;j++){
      for(i=0;i<matrix1[j].length;i++){
        result[j][i] = f(matrix1[j][i],matrix2[j][i]);
      }
    }
    return result;   
  },
  sum:function(matrix1,matrix2){//matrix addition
    return this.fbM(matrix1,matrix2,function(num1,num2){
             return num1 + num2;
           });
  },
  mult:function(matrix1,matrix2){//matrix multiplication
    var result = new Matrix(matrix1.getNumberOfRows(),matrix1.getNumberOfColums());
    var i,j;
    var m;
    for(j=0;j<matrix1.length;j++){
      for(i=0;i<matrix1[j].length;i++){
        for(m=0;m<matrix1.length;m++){
         result[i][j]+=matrix1[i][m]*matrix2[m][j];
        }
      }
    }
    return result;
  }
}
