import { Sku } from './src/resources'

async function f() {
  let skus = await Sku.all()
  console.log(skus);
}

f();
