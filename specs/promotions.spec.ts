import CLayer, {
  CouponCodesPromotionRule,
  Coupon,
  ExternalPromotion,
  FixedAmountPromotion,
  FreeShippingPromotion,
  OrderAmountPromotionRule,
  PercentageDiscountPromotion,
  PromotionRule,
  Promotion,
  SkuListPromotionRule,
} from '../src'

it('Exists promotions resources export by CLayer', () => {
  expect.assertions(10)
  expect(CLayer.CouponCodesPromotionRule).not.toBeUndefined()
  expect(CLayer.Coupon).not.toBeUndefined()
  expect(CLayer.ExternalPromotion).not.toBeUndefined()
  expect(CLayer.FixedAmountPromotion).not.toBeUndefined()
  expect(CLayer.FreeShippingPromotion).not.toBeUndefined()
  expect(CLayer.OrderAmountPromotionRule).not.toBeUndefined()
  expect(CLayer.PercentageDiscountPromotion).not.toBeUndefined()
  expect(CLayer.PromotionRule).not.toBeUndefined()
  expect(CLayer.Promotion).not.toBeUndefined()
  expect(CLayer.SkuListPromotionRule).not.toBeUndefined()
})

it('Exists promotions resources export by direct export', () => {
  expect.assertions(10)
  expect(CouponCodesPromotionRule).not.toBeUndefined()
  expect(Coupon).not.toBeUndefined()
  expect(ExternalPromotion).not.toBeUndefined()
  expect(FixedAmountPromotion).not.toBeUndefined()
  expect(FreeShippingPromotion).not.toBeUndefined()
  expect(OrderAmountPromotionRule).not.toBeUndefined()
  expect(PercentageDiscountPromotion).not.toBeUndefined()
  expect(PromotionRule).not.toBeUndefined()
  expect(Promotion).not.toBeUndefined()
  expect(SkuListPromotionRule).not.toBeUndefined()
})
