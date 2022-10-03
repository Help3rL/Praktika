import axios from 'axios'

const instance = axios.create ({
    baseURL: 'https://burger-app-12de6-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default instance;