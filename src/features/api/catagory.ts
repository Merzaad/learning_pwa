/* eslint-disable operator-linebreak */
const catagoryApi = async (catagory: string): Promise<any> => {
  const options = {
    method: 'GET',
  }
  const url =
    'https://newsapi.org/v2/top-headlines/sources?' +
    `category=${catagory}&` +
    'apiKey=f1a22ede52574494bd6efba4dc31cd2e'
  const response = await fetch(url, options)
  const responseJSON = await response.text()
  return JSON.parse(responseJSON)
}
export default catagoryApi
