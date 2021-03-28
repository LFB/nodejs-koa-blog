import { setClient } from '@/request/request'

export default ({ app }) => {
    setClient(app.$axios)
}
