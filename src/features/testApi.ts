/* eslint-disable operator-linebreak */
const testApi = async (): Promise<any> => {
  const options = {
    method: 'GET',
  }
  const url =
    'https://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=f1a22ede52574494bd6efba4dc31cd2e'
  const response = await fetch(url, options)
  const responseJSON = await response.text()
  const responseObject = await JSON.parse(responseJSON)
  return responseObject
}
export default testApi
