let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    
    function multiplyNumeric(menu) {
      for (let num in menu) {
        if (typeof menu[num] == 'number') {
         menu[num] *= 2;
        }
      }
    }
    multiplyNumeric(menu);
    
    console.log(menu);