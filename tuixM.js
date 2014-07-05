//adds a vector initialization function to the Array prototype.
Array.prototype.init=function(longitud,initNum){
  var i;
  for(i=0;i<longitud;i++){
    this[i]=initNum;
   }
}

//adds to Array prototype an matrix initializing function =)
Array.prototype.initM = function(m,n,initNum){
  var i;
  var j;
  var a=[];
  for(j=0;j<m;j++){
    a=[];
    for(i=0;i<n;i++){
      a[i]=initNum;
    }
    this[j]=a;
  }
}
//adds to Array prototype a function to write the whole matrix
Array.prototype.writeM = function(){
 for(j=0;j<this.length;j++){
  for(i=0;i<this[j].length;i++){
    document.write(this[j][i]+' ');
  }
  document.write('\n\n');
 }
}

Array.prototype.copy = function(matriz){//copies 'matriz' to this
  var i;
  var j;
  for(j=0;j<this.length;j++){
    for(i=0;i<this[j].length;i++){
      this[j][i]=matriz[j][i];
    }
  }
}

Array.prototype.transM = function(){//gets the transpose of a matrix
    
  if(this.length > 0){
    if(this[0].length > 1){
      var auxMatrix = [];
      auxMatrix.initM(this.length,this[0].length,0);
      var i,j;
      for(i=0;i<this.length;i++){
        for(j=0;j<this[i].length;j++){
         auxMatrix[i][j] = this[j][i];
        }
      }
      this.copy(auxMatrix);
    }
    else{
      throw 'matrix dimensions are not appropiated.';   
    }
  }
  else{
    throw 'matrix is not initialized';
  }
}

Array.prototype.toEach = function(f){//applies f to each matrix cell
  var i;
  var j;
  for(j=0;j<this.length;j++){
    for(i=0;i<this[j].length;i++){
      this[j][i] = f(this[j][i]);
    }
  }
}

Array.prototype.fbM = function(f,matrix){//does f between  matrix and this cells
  var i;
  var j;
  for(j=0;j<this.length;j++){
    for(i=0;i<this[j].length;i++){
      this[j][i] = f(this[j][i],matrix[j][i]);
    }
  }
}

Array.prototype.sumM = function(matrix){//matrix addition
  this.fbM(function(num1,num2){
  return num1 + num2;
  },matrix);
}

Array.prototype.multM = function(matrix1,matrix2){//matrix multiplication
  var i;
  var j;
  var m;
  for(j=0;j<matrix1.length;j++){
    for(i=0;i<matrix1[j].length;i++){
      for(m=0;m<matrix1.length;m++){
       this[i][j]+=matrix1[i][m]*matrix2[m][j];
      }
    }
  }
}
