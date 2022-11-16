const url = 'https://jsonplaceholder.typicode.com/posts'

const getData = async (url) => {
  try {
    const response = await fetch(url)
    const result = await response.json()
    const finalResult = result.filter(obj => obj.userId === 1);
    console.log(finalResult);
  } catch (error) {
    console.error();
  }
}

getData(url);