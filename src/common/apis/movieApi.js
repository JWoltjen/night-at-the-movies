import axios from 'axios'; 

const baseUrl = process.env.API_KEY; 

export default axios.create({
    baseURL
})


