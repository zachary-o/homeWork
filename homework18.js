const getData = url => 
 new Promise((resolve, reject) =>
  fetch(url)
   .then(response => response.json())
   .then(json => resolve(json))
   .catch(error => reject(error))
 )
   
getData('https://jsonplaceholder.typicode.com/posts')
 .then(data => {
  const result = data.filter(obj => obj.userId === 1);
  console.log(result);
 })
 .catch(error => console.log(error.message))