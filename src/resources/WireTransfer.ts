import library from './library'

class WireTransfer extends library.Base {
  static define() {
    this.attributes('id', 'created_at', 'updated_at', 'reference', 'metadata')

    this.hasOne('order', {className: 'Order'})
  }
}

export default library.createResource(WireTransfer)
