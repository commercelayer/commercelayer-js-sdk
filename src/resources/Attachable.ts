import library from './library'
import BaseClass from '#utils/BaseClass'

export class AttachableCollection extends BaseClass {
  static className = 'Attachable'
  static define() {
    this.attributes()
  }
}

const Attachable = library.createResource<AttachableCollection>(
  AttachableCollection
)

export default Attachable
