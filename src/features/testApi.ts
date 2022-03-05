const testApi = async () => {
  const options = {
    method: 'GET',
  }
  const url = 'https://newsapi.org/v2/top-headlines?'
    + 'q=russia&'
    + 'from=2022-03-03&'
    + 'sortBy=popularity&'
    + 'apiKey=f1a22ede52574494bd6efba4dc31cd2e'
  const response = await fetch(url, options)
  console.log('GET request sent')
  const responseJSON = await response.text()
  console.log('data retrieved')
  const responseObject = await JSON.parse(responseJSON)
  console.log('json parsed')
  return responseObject
}
export default testApi
