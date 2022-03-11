/* eslint-disable operator-linebreak */
import { testDataType } from '../types/types'

const countryApi = async (country: string): Promise<testDataType[]> => {
  const memory: testDataType[] = []
  const options = {
    method: 'GET',
  }
  const url =
    'https://newsapi.org/v2/top-headlines?' +
    `country=${country}&` +
    'apiKey=f1a22ede52574494bd6efba4dc31cd2e'
  const response = await fetch(url, options)
  const responseJSON = await response.text()
  const responseObject = await JSON.parse(responseJSON)
  responseObject.articles.forEach((article: any, id: number) => {
    memory.push({
      index: id,
      text: article.description,
      title: article.title,
      imgSrc: article.urlToImage,
      publishedAt: article.publishedAt,
      author: article.author,
      url: article.url,
    })
  })

  return memory
}
export default countryApi
