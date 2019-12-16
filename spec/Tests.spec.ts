import CLayer from '../src/resources'
import { writeFileSync, existsSync } from 'fs'
import { getToken } from '../helpers'
import template from './template/template'
import * as path from 'path'

const RECORD = process.env.RECORD === 'true'
console.log('RECORD ---> :', RECORD)
let xhrResponse: any = []
const fixturesPath = path.join(__dirname, 'fixtures', 'fixtures.json')
const checkPath = existsSync(fixturesPath)
if (checkPath && !RECORD) {
  xhrResponse = require(fixturesPath)
}

beforeAll(async () => {
  if (RECORD) {
    const {
      data: { access_token }
    } = await getToken()
    CLayer.init({
      accessToken: access_token,
      endpoint: 'https://the-blue-brand-2.commercelayer.co'
    })
  }
})
afterAll(() => {
  if (RECORD && xhrResponse.length > 0) {
    writeFileSync(fixturesPath, JSON.stringify(xhrResponse))
  }
})
template.map(async (d: any) => {
  describe(d.testName, () => {
    let cl: any = null
    let bTo: any = null
    let elId = ''
    beforeEach(async () => {
      if (RECORD) {
        const clName: any = d.className
        cl = await CLayer[clName].all()
        if (d.belongsToClass) {
          if (Array.isArray(d.belongsToClass)) {
            bTo = await Promise.all(
              d.belongsToClass.map(async (n: string) => {
                return await CLayer[n].first()
              })
            )
          } else {
            const cToName: any = d.belongsToClass
            bTo = await CLayer[cToName].first()
          }
        }
      }
    })
    afterAll(() => {
      if (RECORD) {
        const firstCl = cl.first()
        const data: any = {
          testName: d.testName,
          attributes: {},
          relationships: {}
        }
        data.attributes = firstCl.attributes()
        if (d.associations) {
          d.associations.map((a: any) => {
            data.relationships[a] = firstCl.association(a).__links
          })
        }
        xhrResponse.push(data)
      }
    })
    d.tests.map((t: any) => {
      test(t.type, async () => {
        if (!RECORD) {
          xhrResponse
            .filter((x: any) => x.testName === d.testName)
            .map((r: any) => {
              expect(Object.keys(r.attributes).length).toBeGreaterThanOrEqual(1)
              expect(Object.keys(r.relationships)).toEqual(
                expect.arrayContaining(d.associations)
              )
            })
          return true
        }
        switch (t.type) {
          case 'toArray':
            return expect(cl.toArray()).not.toBeNull()
          case 'size':
            return expect(cl.size()).toBeGreaterThanOrEqual(1)
          case 'associations':
            return d.associations.map((a: any) => {
              return expect(cl.first().association(a).reflection.name).toEqual(
                a
              )
            })
          case 'create':
            const attributes = {
              ...t.data
            }
            if (Array.isArray(bTo)) {
              bTo.map((b: any, k: number) => {
                attributes[t.relationship[k]] = b
              })
            } else {
              attributes[t.relationship] = bTo
            }
            const cBuild = await CLayer[d.className].create(attributes)
            console.log(`create ${d.className} :`, cBuild.id)
            elId = cBuild.id
            return expect(cBuild.id).toEqual(elId)
          case 'update':
            const cUpdate = await CLayer[d.className].find(elId)
            return cUpdate.update(t.data, async () => {
              console.log(`${d.className} updated!`)
              return await expect(true).toBe(true)
            })
          case 'delete':
            const cDestroy = await CLayer[d.className].find(elId)
            await cDestroy.destroy()
            console.log(`${d.className} destroyed!`)
            return expect(true).toBe(true)
          default:
            return null
        }
      })
    })
  })
})
