1)
//какой метод используется для сортировки массива?
sort() и compareNum()
2)
//отсортируйте массив ниже
let arr = [5, 7, 4, 1];
arr.sort()
3)
//отсортируйте массив ниже и отразите его [1,3,2] -> [1,2,3] -> [3,2,1]
let arr = [5, 7, 4, 1];
arr.sort(function (a, b) { return a - b });
4)
//создайте функцию compareNum чтобы отсортировать список ниже правильно
let arr = [5, 47, 4, 1];
function.compareNum(a, b) {
    return a - b
}
a.sort(compareNum)
5)
//отсортируйте массив в случайном порядке с помощью функции randomCompareNum
let arr = [5, 47, 4, 1];
arr.randomCompareNum()
6)
//Используйте метод Math.max.apply чтобы вывести в консоли наибольшее число из массива ниже
let arr = [5, 47, 4, 1];
function myArrayMax(arr) {
    return Math.max.apply(null, arr)
}
7)
//Используйте метод Math.min.apply чтобы вывести в консоли наименьшее число из массива ниже
let arr = [5, 47, 4, 1];
function myArrayMin(arr) {
    return Math.min.apply(null, arr)
}
8)
//создайте массив с 3мя обьектами
let arr = [1, 2, 3];
