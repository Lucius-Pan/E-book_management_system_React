let baseUrl ;

if (process.env.NODE_ENV === 'development') {
    baseUrl = ''
    // baseUrl = '/api/'
    // baseUrl = 'http://localhost:8080/'
} else if (process.env.NODE_ENV === 'production') {
    baseUrl ='http://139.196.228.54/api/'
}

export const baseURL = baseUrl;