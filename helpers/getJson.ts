import * as _ from 'lodash'
const getJson = (collection: any): string => {
	const arr: object[] = []
	collection.each((s: any) => {
		const obj: any = {}
		_.forEach(s, (val, key) => {
			if (key.search('__') === -1) {
				obj[key] = val
			}
		})
		arr.push(obj)
	})
	return JSON.stringify(arr)
}

export default getJson
