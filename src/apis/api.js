// api.js
import { httpGet, httpPost } from '../units/http'
export const getorglist = (params = {}) => httpGet({ url: '/admin', params })

export const save = (data) => {
  return httpPost({
    url: 'admin',
    data
  })
}
