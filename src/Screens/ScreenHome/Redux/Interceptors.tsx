import axios from 'axios'

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => {
    console.log('This is your response data', response.data);
    return response},
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('Error')
   
    }
    return Promise.reject(error)
  },
)

export const makeGetRequest =  async (url: string) => axiosInstance.get(url);

export default axiosInstance