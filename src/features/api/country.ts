/* eslint-disable operator-linebreak */
const countryApi = async (country: string): Promise<any> => {
  const options = {
    method: 'GET',
  }
  const url =
    'https://newsapi.org/v2/top-headlines?' +
    `country=${country}&` +
    'apiKey=f1a22ede52574494bd6efba4dc31cd2e'
  const response = await fetch(url, options)
  const responseJSON = await response.text()
  return JSON.parse(responseJSON)
}
export default countryApi
