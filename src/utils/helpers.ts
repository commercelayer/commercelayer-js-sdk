import _has from 'lodash/has'
import isEmpty from 'lodash/isEmpty'
import first from 'lodash/first'
import findKey from 'lodash/findKey'
import isArray from 'lodash/isArray'

export const cleanUrl = (url: string) => {
  const lastSlash = url.lastIndexOf('/') + 1
  if (lastSlash === url.length) {
    return url.substring(0, url.length - 1)
  }
  return url
}

type FilterParams = Partial<{
  filter: {
    q: object
  }
  fields: object
  include: string
  page: {
    size: number
    number: number
  }
}>

export const parserParams = <P extends FilterParams>(params: P): P => {
  if (!isEmpty(params.filter) && !_has(params.filter, 'q')) {
    params.filter = {
      q: params.filter,
    }
  }
  if (!isEmpty(params.fields) && !isEmpty(params.include)) {
    const expInclude = params.include.split(',')
    const includeKey = findKey(params.fields, (v: string) => {
      return !isEmpty(params.include) && v.search(params.include) !== -1
        ? true
        : false
    })
    const expFields = params.fields[includeKey].split(',')
    const fields = expFields
      .map((field) => {
        return expInclude.includes(field) ? first(field.split('.')) : field
      })
      .join(',')
    params.fields[includeKey] = fields
  }
  return params
}

export const normalize = (res: any) => {
  return res.data
}
