list = [10, 50, 90, 0, 40, 60, 70, 20, 80, 30];

function triBulleOtpi() {
    for (let i = 0; i < list.length - 1; i++) {
        tableauTrie = true;
        for (let j = 0; j < list.length - 1 ; j++) {
            if (list[j + 1] < list[j]) {i
                var tempo = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tempo;
                console.log(list);
            } 
        }
    }
}

triBulleOtpi()