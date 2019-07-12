import { Sku } from './src/resources'

async function f() {

  let sku = await Sku.includes("prices").select('code,name', {prices: 'formatted_amount'}).find("AZbpjSkARB")
  console.log(sku);
  console.log(sku.prices().toArray());

}

f();
