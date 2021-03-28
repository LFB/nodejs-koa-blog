import service from '@/request/request'

export function get(config) {
    const { url = '', data = {}, ...opt } = config
    return service
        .get(url, {
            params: data,
            ...opt
        })
        .then(res => {
            return [null, res]
        })
        .catch(err => {
            return [err, null]
        })
}

export function post(config) {
    const { url = '', data = {}, ...opt } = config
    return service
        .post(url, data, opt)
        .then(res => {
            return [null, res]
        })
        .catch(err => {
            return [err, null]
        })
}
