let arr = ["HTML", "JavaScript", "CSS"];

const copySort = (arr) => arr.slice().sort();
copySort(arr);

const sorted = copySort(arr);

alert(arr);
alert(sorted);