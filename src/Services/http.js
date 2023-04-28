import Axios from 'axios'
import {BASE_URL, FALLBACK_URL} from '../Utils/const'
import authService from './AuthService'

export class Http {
  static _getHeader() {
    return {
      Authorization: `Bearer ${authService.getToken()}`,
    }
  }

  static async _check() {
    Axios.defaults.timeout = 500
    let check
    try {
      await Axios.get(BASE_URL + 'status')
      check = true
    } catch {
      check = false
    }
    Axios.defaults.timeout = null
    return check
  }

  static get = async (endPoint, params) => {
    const options = {
      headers: this._getHeader(),
    }
    if (params && Object.keys(params).length) {
      options.params = params
    }
    const check = await this._check()
    let apiUrl = BASE_URL
    if (!check) apiUrl = FALLBACK_URL
    return Axios.get(apiUrl + endPoint, options)
  }

  static post = (endPoint, payload) => {
    return Axios.post(BASE_URL + endPoint, payload, {
      headers: this._getHeader(),
    })
  }

  static put = (endPoint, payload) => {
    return Axios.put(BASE_URL + endPoint, payload, {
      headers: this._getHeader(),
    })
  }

  static patch = (endPoint, payload) => {
    return Axios.patch(BASE_URL + endPoint, payload, {
      headers: this._getHeader(),
    })
  }

  static delete = (endPoint, id) => {
    return Axios.delete(BASE_URL + endPoint + '/' + id, {
      headers: this._getHeader(),
    })
  }
}
