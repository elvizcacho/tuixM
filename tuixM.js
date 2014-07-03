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
//add to Array prototype a function to write the whole matrix
Array.prototype.writeM = function(){
 for(j=0;j<this.length;j++){
  for(i=0;i<this[j].length;i++){
    document.write(this[j][i]);
  }
  document.write('\n');
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

Array.prototype.transM = function(){//get the transpose of a matrix
    
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
