function solution(A) {
    var dominator = 0;
    var dominatorTemp = 0;
    var numberDominator, indexArray;
    
    for(var i = 0; i < A.length; i++){
        
       for(var x = 0; x < A.length; x++){
            if(A[i]==A[x]){
                dominatorTemp++;
                numberDominator = A[x];
            }
        } 
        
        if(dominatorTemp > dominator){
            dominator = dominatorTemp;
            for(var z = 0; z < A.length; z++){
                if(numberDominator==A[z]){
                    indexArray = z;
                }
            }
        }else{
            dominator = dominator;
            indexArray = indexArray;
        }
        dominatorTemp = 0;
    }
    
    dominator==0 ? indexArray = -1 : indexArray = indexArray;
    return indexArray;
}
