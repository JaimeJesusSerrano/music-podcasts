import axios from 'config/axios'

const ENDPOINT = 'examples'

export const create = async (data: any) => {
  return axios
    .post(`${process.env.REACT_APP_SERVICE_URL}/${ENDPOINT}`, data)
    .then(result => result?.data)
    .catch(e => {
      console.error(e)
      return { data: [], error: true }
    })
}

export const getAll = async () => {
  return axios
    .get(`${process.env.REACT_APP_SERVICE_URL}/${ENDPOINT}`)
    .then(result => result?.data)
    .catch(e => {
      console.error(e)
      return { data: [], error: true }
    })
}

export default { create, getAll }
