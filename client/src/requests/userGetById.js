import axios from "axios";

const userGetById = async(id) => {
    return await axios({
        method: 'GET',
        url: process.env.REACT_APP_API + `/users/${id}`,
        headers: {
          'Content-Type': 'application/json'
        },
        json: true
      }).then(res => {
          console.log("userID:", res);
        return res.data;
      }).catch(e => {
        console.log("Error with authentication: ", e);
        return false;
      });
}

export default userGetById;