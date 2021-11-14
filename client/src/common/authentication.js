import axios from 'axios';

const isAuthenticated = async (token) => {
  // try{
  //   let response = axios
  // }catch(e){
  //   console.log(e)
  // }

  return await axios({
    method: 'GET',
    url: process.env.REACT_APP_API + "/auth/verify",
    headers: {
      'Content-Type': 'application/json',
      'token': `${token}`
    },
    json: true
  }).then(res => {
    return res.data;
  }).catch(e => {
    console.log("Error with authentication: ", e);
    return false;
  });
}

export default isAuthenticated;