function triBulleOtpi() {
    list = [10, 50, 90, 0, 40, 60, 70, 20, 80, 30];
    var compteurEchange = 0;
    var compteurCompa = 0;

    for (let i = 0; i < list.length - 1; i++) {
        tableauTrie = true;
        for (let j = 0; j < list.length - 1; j++) {
            compteurCompa ++

            if (list[j + 1] < list[j]) {
                var tempo = list[j];
                list[j] = list[j + 1];
                list[j + 1] = tempo;

                compteurEchange = compteurEchange + 3

                tableauTrie = false;
            }
        }
        if (tableauTrie) {
            break;
        }
    }
    console.log(`Bull Opti : ${list} | compteur : ${compteurEchange} & ${compteurCompa}`);
}

triBulleOtpi()