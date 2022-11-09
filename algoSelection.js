function sort(tableau){
    for(var i = 0; i < tab.length; i++){
      //stocker l'index de l'élément minimum
      var min = i; 
      for(var j = i+1; j < tab.length; j++){

        if(tab[j] < tab[min]){
         // mettre à jour l'index de l'élément minimum
         min = j; 
        }
      }
      var tmp = tab[i];
      tab[i] = tab[min];
      tab[min] = tmp;
    }
    return tab;
  };
  var tab = [10, 50, 90, 0, 40, 60, 70, 20, 80, 30];
  sort(tab);
  console.log(tab);
