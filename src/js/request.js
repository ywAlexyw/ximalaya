import axios from 'axios'
const baseUrl = 'https://www.easy-mock.com/mock/5be3dba0c1e781069a93431c/'

export const getFooter = (params) => axios.get(baseUrl + 'getFooter', params)
export const getCategory = (params) => axios.get(baseUrl + 'getCategory', params)
export const getTopNav = (parmes) => axios.get(baseUrl + 'getTopNav', parmes)
export const getAlbums = (parmes) => axios.get(baseUrl + 'getAlbums', parmes)
export const getClass = (parmes) => axios.get(baseUrl + 'getClass', parmes)
export const getSection = (parmes) => axios.get(baseUrl + 'getSection', parmes)
export const getImage = (parmes) => axios.get(baseUrl + 'getImage', parmes)

export const login = (payload) => axios.post(baseUrl + 'login', payload)
export const register = (payload) => axios.post(baseUrl + 'login', payload)