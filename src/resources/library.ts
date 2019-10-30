import { createResourceLibrary } from 'active-resource'
import { Library } from '../@types/Library/index'

const subdomain = 'static-commerce'

const library: Library = createResourceLibrary(
	`https://${subdomain}.commercelayer.io/api/`
)

export default library
