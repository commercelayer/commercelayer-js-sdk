import CLayer, {
  InventoryStockLocation,
  Return,
  ReturnLineItem,
  ShipmentLineItem,
} from '../src'

it('Exists returns resources export by CLayer', () => {
  expect.assertions(4)
  expect(CLayer.InventoryStockLocation).not.toBeUndefined()
  expect(CLayer.Return).not.toBeUndefined()
  expect(CLayer.ReturnLineItem).not.toBeUndefined()
  expect(CLayer.ShipmentLineItem).not.toBeUndefined()
})

it('Exists returns resources export by direct export', () => {
  expect.assertions(4)
  expect(InventoryStockLocation).not.toBeUndefined()
  expect(Return).not.toBeUndefined()
  expect(ReturnLineItem).not.toBeUndefined()
  expect(ShipmentLineItem).not.toBeUndefined()
})
