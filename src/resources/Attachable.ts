import library from './library'

export class AttachableCollection extends library.Base {
  static className = 'Attachable'
  static define() {
    this.attributes()
  }
}

const Attachable = library.createResource<AttachableCollection>(
  AttachableCollection
)

export default Attachable
