import axios from 'axios';


export default class API {
  
  getData = () => axios.get('http://localhost:5000/data', { headers: { "Access-Control-Allow-Origin": "*" } })
    .then(({ data }) => {
      return data
    })
  
  getImg = () => axios.get('https://picsum.photos/290/290', { responseType: "blob" })
    .then(img => img)
    
}