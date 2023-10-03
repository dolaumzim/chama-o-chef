import axios from 'axios';
import { backendRoutesApi } from '..';
import { frontEndRoutes } from '../../routes';

export const postRefreshToken = async () => {
  const token = localStorage.getItem('token');
  const refreshToken = localStorage.getItem("refresh_token");    

  try {
    const responseRefresh = await axios.post(`http://academy-react.rarolabs.com.br/api/v1${backendRoutesApi.refreshToken}`, {
      auth: {
        refresh_token : refreshToken
      }
    },
    { headers : {Authorization : `Bearer ${token}`} })
  
    localStorage.setItem('token', responseRefresh.data.access_token);
    localStorage.setItem('refresh_token', responseRefresh.data.refresh_token);
    const exp_date = new Date()
    exp_date.setMinutes(exp_date.getMinutes() + 55)
    localStorage.setItem('exp_date', exp_date.toString());
    
  } catch (error) {
    localStorage.clear()
    window.location.href = frontEndRoutes.login;
  }
};