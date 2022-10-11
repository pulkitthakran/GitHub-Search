import axios from "axios";

export const getProfile = async (userName) => {
    const url = `https://api.github.com/users/${userName}`;
    try{
      return await axios.get(url);
    } catch(error) {
        console.log(error);
    }
}

export const getSearchProfile = async (userName) => {
    console.log('user',userName);
    const url = `https://api.github.com/search/users?q=${userName}&per_page=10`;
    try{
      return await axios.get(url);
    } catch(error) {
        console.log(error);
    }
}
