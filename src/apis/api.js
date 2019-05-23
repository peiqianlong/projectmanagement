// api.js
import { httpGet, httpPost ,httpDelete , httpPut} from '../units/http'
export const getorglist = (params = {}) => httpGet({ url: '/admin', params })

export const save = (data) => {
  return httpPut({
    url: 'save',
    data
  })
}
