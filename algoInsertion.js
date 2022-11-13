function insertion() {
    list = [10, 50, 90, 0, 40, 60, 70, 20, 80, 30];
    var compteurEchange = 0;
    var compteurCompa = 0;
    var test, i, j;

    for (i = 1; i < list.length; i++) {
        test = list[i]
        j = i - 1

        while (j >= 0 && list[j] > test) {
            compteurCompa ++

            list[j + 1] = list[j]
            j--
        }

        list[j + 1] = test

        compteurEchange = compteurEchange + 3
    }
    console.log(`Insertion : ${list} | compteur : ${compteurEchange} & ${compteurCompa}`);
}

insertion()