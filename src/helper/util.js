import config from '../config'

export function openWeixinAuthLink(hashPath, params) {
  let url = getUrl(hashPath, params)
  const result = `${location.protocol}//open.weixin.qq.com/connect/oauth2/authorize?appid=${config.appId}&redirect_uri=${encodeURIComponent(url)}&response_type=code&scope=snsapi_base&state=qqchongzhi`
  return result
}

export function queryParams() {
  let query = window.location.search.substring(1)
  let queryArr = query.split('&')
  let params = {}

  queryArr.forEach((item) => {
    let pairs = item.split('=')
    if (pairs.length === 2) {
      params[decodeURIComponent(pairs[0])] = decodeURIComponent(pairs[1])
    }
  })

  return params
}

export function getQuery(name) {
  let u = window.location.search || window.location.hash
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = u.substr(u.indexOf('?') + 1).match(reg)
  return r != null ? r[2] : ''
}

export function getCookie(name) {
  var reg = new RegExp('(^| )' + name + '(?:=([^;]*))?(;|$)')
  var val = document.cookie.match(reg)
  return val ? (val[2] ? decodeURIComponent(val[2]) : '') : ''
}

export function getUrl(hashPath, params = {}) {
  let baseUrl = window.location.protocol + '//' + window.location.host + window.location.pathname
  let defaultHash = location.hash
  let filterParams = ['code', 'state']
  let newQueryParams = Object.assign(queryParams(), params)

  let currentParamsKeys = Object.keys(newQueryParams).filter((item) => {
    return filterParams.indexOf(item) < 0
  })

  let paramsArr = []

  currentParamsKeys.forEach((item) => {
    paramsArr.push(`${item}=${encodeURIComponent(newQueryParams[item])}`)
  })

  if (paramsArr.length) {
    baseUrl += '?'
  }

  baseUrl += paramsArr.join('&')

  baseUrl += (hashPath || defaultHash)

  return baseUrl
}
