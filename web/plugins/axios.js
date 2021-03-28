export default ({ $axios, error }) => {
    $axios.onRequest(config => {
        config.timeout = 30 * 1000
        config.baseURL = process.env.BASE_URL
        config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json;chartset=utf-8'
    })

    $axios.onResponse(response => {
        return response
    })

    $axios.onError(err => {
        error({ err })
    })
}
