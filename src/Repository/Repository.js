import axios from 'axios'
const baseDomain = 'http://128.199.82.172:3000/';
const baseURL = `${baseDomain}api/`
export default axios.create({
  baseURL,
  headers: {'Content-Type' : 'application/json'  }
});
