import _ from 'lodash'

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
  if (!_.isEmpty(params.filter) && !_.has(params.filter, 'q')) {
    params.filter = {
      q: params.filter,
    }
  }
  if (!_.isEmpty(params.fields) && !_.isEmpty(params.include)) {
    const expInclude = params.include.split(',')
    const includeKey = _.findKey(params.fields, (v: string) => {
      return !_.isEmpty(params.include) && v.search(params.include) !== -1
        ? true
        : false
    })
    const expFields = params.fields[includeKey].split(',')
    const fields = expFields
      .map((field) => {
        return expInclude.includes(field) ? _.first(field.split('.')) : field
      })
      .join(',')
    params.fields[includeKey] = fields
  }
  return params
}
