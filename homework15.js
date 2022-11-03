let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  
  const salaryValues = Object.values(salaries);
  
  const sum = salaryValues.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0);
  
  
  
  console.log(sum);
  