import _has from 'lodash/has'
import isEmpty from 'lodash/isEmpty'
import first from 'lodash/first'
import findKey from 'lodash/findKey'
import { JSONAPIRequest } from '#typings/Library'
import { forEach, isNumber, reverse, slice, snakeCase } from 'lodash'

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

export const normalize = (
  res: any,
  options?: { first?: number | boolean; last?: number | boolean }
) => {
  const data = res.data
  if (options?.first) {
    data.data =
      isNumber(options.first) && options.first > 1
        ? slice(data.data, 0, options.first)
        : first(data.data)
    return data
  }
  if (options?.last) {
    const dataReversed = reverse(data.data)
    data.data =
      isNumber(options.last) && options.last > 1
        ? slice(dataReversed, 0, options.last)
        : first(dataReversed)
    return data
  }
  return data
}

export const dataConverter = (
  data: Record<string, any>,
  resourceName: string,
  key?: string
) => {
  let newData: JSONAPIRequest = {
    data: {
      type: resourceName,
      attributes: {},
    },
  }
  if (key) newData.data.id = key
  forEach(data, (value, key) => {
    if (!value?.klass) {
      const special = key.startsWith('_', 0)
      const k = special ? `_${snakeCase(key)}` : snakeCase(key)
      newData.data.attributes[k] = value
    } else {
      const type = snakeCase(value.klass().queryName)
      const relationshipName = snakeCase(key)
      const id = value.id
      newData.data.relationships = {
        ...newData.data.relationships,
        [`${relationshipName}`]: {
          data: {
            id,
            type,
          },
        },
      }
    }
  })
  return newData
}
