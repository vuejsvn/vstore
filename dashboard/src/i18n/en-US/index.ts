// This is just an example,
// so you can safely delete all default props below
import { enUSErrorNotFound } from 'pages/errorNotFound'
import { enUSHome } from 'pages/home'

export default {
  failed: 'Action failed',
  success: 'Action was successful',
  ...enUSHome,
  ...enUSErrorNotFound,
}
