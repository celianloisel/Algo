L = [10, 50, 90, 0, 40, 60, 70, 20, 80, 30] 

function triBulle(){
    for (let i = 0; i < L.length - 1; i++) {
        for (let j = 0; j < L.length - 1 ; j++) {
            if (L[j + 1] < L[j]) {
                var tempo = L[j];
                L[j] = L[j + 1];
                L[j + 1] = tempo;
            } 
        }  
    }
    console.log(L)
}

triBulle()
