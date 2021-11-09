import axios from 'axios'

const config = {
  baseURL: process.env.NEXT_PUBLIC_API_URL
  //headers: { 'X-API-KEY': process.env.REACT_APP_API_KEY }
  //timeout: 30000,
}

axios.defaults.withCredentials = true

export const get = (url, query = undefined) =>
  axios.create(config).get(url, query ? { params: query } : undefined)
export const post = (url, data, options = undefined) =>
  axios.create(config).post(url, data, options)
export const put = (url, data) => axios.create(config).put(url, data)
export const patch = (url, data) => axios.create(config).patch(url, data)
export const del = (url, data) => axios.create(config).delete(url, data)
