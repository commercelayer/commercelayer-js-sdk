import library from './library';

class Sku extends library.Base {
  static define() {
    this.attributes('code');
  }
}

export default library.createResource(Sku);
