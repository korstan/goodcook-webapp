import axios from 'axios';

const baseURL = 'http://141.101.196.113:8001';

export default axios.create({ baseURL });
