class Fetcher {
    constructor (props) {
        this.url = ( props && props.url ) ? props.url : ( ( window && window.location ) ? window.location.href : '' )
        this.query = ( props && props.query ) ? props.query : null
        this.params = ( props && props.params ) ? props.params : null
        this.headers = ( props && props.headers ) ? props.headers : null
        this.body = ( props && props.body ) ? props.body : null
        this.mode = ( props && props.mode ) ? props.mode : null
        this.cache = ( props && props.cache ) ? props.cache : null
        this.type = ( props && props.type ) ? props.type : 'json'
        this.contentType = ( props && props.contentType ) ? props.contentType : 'application/json'
    }

    async fetch (method = 'GET', props, body = false) {
        let url = this.url

        let query = null

        if (props && props.query) query = props.query
        else if (this.query) query = this.query

        if (query) {
            if (!url.endsWith('/')) url += '/'
            url += query
        }

        let params = null

        if (this.params && Object.keys(this.params).length > 0) {
            params = { ...this.params }
        }

        if (props && props.params && Object.keys(props.params).length > 0) {
            params = { ...params, ...props.params }
        }

        if (params && Object.keys(params).length > 0) {
            url += `?${new URLSearchParams(params)}`
        }

        let options = { method }

        let headers = {}

        if (this.headers && Object.keys(this.headers).length > 0) {
            headers = { ...this.headers }
        }

        if (props && props.headers && Object.keys(props.headers).length > 0) {
            headers = { ...headers, ...props.headers }
        }

        if (Object.keys(headers).length > 0) {
            options.headers = headers
        }

        if (body) {
            let requestBody = {}

            if (this.body && Object.keys(this.body).length > 0) {
                requestBody = { ...this.body }
            }

            if (body && Object.keys(body).length > 0) {
                requestBody = { ...requestBody, ...body }
            }

            if (requestBody && Object.keys(requestBody).length > 0) {
                let contentType = null

                if (props && props.contentType) query = props.contentType
                else if (this.contentType) contentType = this.contentType

                if (options.headers && options.headers['Content-Type']) {
                    contentType = options.headers['Content-Type']
                }

                if (contentType) {
                    if (contentType == 'multipart/form-data') {
                        options.body = new FormData(requestBody)

                        Object.entries(requestBody).forEach(([key, value]) =>
                            options.body.append(key, value)
                        )
                    } else if (contentType == 'application/x-www-form-urlencoded') {
                        options.body = new URLSearchParams(Object.entries(requestBody)).toString();
                    } else {
                        options.body = JSON.stringify(requestBody)
                    }
                } else {
                    options.body = JSON.stringify(requestBody)
                }
            }
        }

        if (props && props.mode) options.mode = props.mode
        else if (this.mode) options.mode = this.mode

        if (props && props.cache) options.cache = props.cache
        else if (this.cache) options.cache = this.cache

        const response = await fetch(url, options)

        if (!response.ok) throw new Error(response.statusText)

        let type = null

        if (props && props.type) type = props.type
        else if (this.type) type = this.type

        if (type) return await response[type]()

        return response
    }

    async get (props) {
        return await this.fetch('GET', props)
    }

    async post (props) {
        return await this.fetch('POST', props, true)
    }

    async put (props) {
        return await this.fetch('PUT', props, true)
    }

    async delete (props) {
        return await this.fetch('DELETE', props)
    }
}

function fetcher (props) {
    return new Fetcher(props)
}

module.exports = fetcher