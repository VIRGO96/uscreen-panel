import axios from 'axios'

const baseDomain = 'http://128.199.82.172:3000/';
const baseURL = `${baseDomain}api/`
export default axios.create({
  baseURL,
  headers: {'Content-Type' : 'application/json' , 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFkbWluQGZhZHYuY29tIiwiVXNlck5hbWUiOiJhZG1pbiIsIlVzZXJSb2xlSWQiOjEsImV4cCI6MTU5MTU0MjYzMywiaWF0IjoxNTg2MzU4NjMzfQ.cuwyqU1oUPvBUamXNsTjTMfvwA5blGPyV0U1rDS2Kow` }
});
