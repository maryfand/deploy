import axios from 'axios';

export default function getUserInfo(){
  return axios.get(`https://api.github.com/users/maryfand`)
    .then((xx) => (
      { gitInfo: xx.data }
  ))
}
