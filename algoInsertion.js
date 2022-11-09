list = [10, 50, 90, 0, 40, 60, 70, 20, 80, 30];
var test, i, j;
function insertion() {
    for (i = 1; i < list.length; i++){
        test = list[i]
        j = i - 1
        while (j >= 0 && list[j] > test){
            list[j + 1] = list[j]
            j--
        }
        list[j + 1] = test
    }
    return list
}

insertion()
console.log(list);