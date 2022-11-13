function triBulle(L) {
    var compteurEchange = 0;
    var compteurCompa = 0;

    for (let i = 0; i < L.length - 1; i++) {
        for (let j = 0; j < L.length - 1; j++) {
            compteurCompa++

            if (L[j + 1] < L[j]) {
                var tempo = L[j];
                L[j] = L[j + 1];
                L[j + 1] = tempo;

                compteurEchange = compteurEchange + 3
            }
        }
    }
    return compteurCompa + compteurEchange;
}

function triBulleOpti(list) {
    var compteurEchange = 0;
    var compteurCompa = 0;

    for (let i = 0; i < list.length - 1; i++) {
        tableauTrie = true;
        for (let j = 0; j < list.length - 1; j++) {
            compteurCompa++

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
    return compteurCompa + compteurEchange;
}

function insertion(list) {
    var compteurEchange = 0;
    var compteurCompa = 0;
    var test, i, j;

    for (i = 1; i < list.length; i++) {
        test = list[i]
        j = i - 1

        while (j >= 0 && list[j] > test) {
            compteurCompa++

            list[j + 1] = list[j]
            j--
        }

        list[j + 1] = test

        compteurEchange = compteurEchange + 3
    }
    return compteurCompa + compteurEchange;
}

function selection(list) {
    var compteurEchange = 0;
    var compteurCompa = 0;

    for (var i = 0; i < tab.length; i++) {
        for (var j = i + 1; j < tab.length; j++) {

            compteurCompa++
            if (tab[j] < tab[i]) {
                var tmp = tab[i];
                tab[i] = tab[j];
                tab[j] = tmp;
                compteurEchange = compteurEchange + 3
            }
        }
    }
    return compteurCompa + compteurEchange;
};

function stat(min, max, step, nbr) {
    for (let i = min; i <= max; i = i + step) {
        var tempStat = 0;
        for (let j = 0; j < nbr; j++) {
            var tbl = [];
            for (let k = 0; k < i; k++) {
                tbl.push(Math.floor(Math.random() * 100))
            }
            tempStat += triBulleOpti(tbl)
        }
        console.log(`${i} : ${tempStat / i}`);
    }
}

var min = 10;
var max = 20;
var step = 5;
var nbr = 10;
stat(min, max, step, nbr)