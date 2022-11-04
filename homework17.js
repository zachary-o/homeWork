let arr = [
    { name: "User1", age: 50},
    { name: "User2", age: 30},
    { name: "User3", age: 28 }
    ];
    
    function sortByAge(users) {
     arr.sort((a, b) => a.age > b.age ? 1 : -1);
    }
    
    sortByAge(arr);
    console.log(arr);