function sort() {
  var tab = [10, 50, 90, 0, 40, 60, 70, 20, 80, 30];
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
  console.log(`Selection : ${tab} | compteur : ${compteurEchange} & ${compteurCompa}`);
};

sort();