import axios from 'axios';


const instance = axios.create({
    baseURL: "http://toupgradeonlineapi.prekshaeyeyoga.com:8080/api"
})


export default instance