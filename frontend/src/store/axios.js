import axios from 'axios';


const instance = axios.create({
    baseURL: "https://toupgradeonlineapi.prekshaeyeyoga.com:8080/api"
})


export default instance