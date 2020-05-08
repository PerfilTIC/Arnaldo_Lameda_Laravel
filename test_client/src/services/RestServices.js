import axios from 'axios'
var url = process.env.NODE_ENV === 'production'
   ? 'http://www.tests.com'
   : 'http://localhost:8000/api/v1/'

let token = JSON.parse(localStorage.getItem('user-token'))

let config = JSON.stringify({
 
})

const RestService = axios.create({
  baseURL: url,
  headers: {
   'token': 'ebf8ebbc77b700ed77d14afc03467335',
   'session': token ? token.session : ''
  }
})

export default RestService