import { createResourceLibrary } from 'active-resource'

const subdomain = 'static-commerce'

const library = createResourceLibrary(
  `https://${subdomain}.commercelayer.io/api/`
)

export default library
