import './App.css';
import Header from "./component/header";
import {useEffect, useState} from "react";
import axios from "axios";
import Search from './component/seachBar';
import Info from './component/info';

function App() {
    const [user, setUser] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetchUserData('pulkitthakran')
    },[])
    function handleSearch(username) {
        setLoading(true)
        setUser('')
        fetchUserData(username)
        
    }

    function fetchUserData(username) {
        axios.get(  `https://api.github.com/users/${username}`)
            .then((res) => {
                setLoading(false)
                setError(false)
                setUser(res.data)
            })
            .catch(() => {
                setLoading(false)
                setError(true)
            })
    }
   
    
  
    return (
        <>
            <Header/>         
            <Search handleSearch={handleSearch} hasError={error} hasLoading= {loading}/>
            <Info userData={user} hasError={error} hasLoading={loading}/>
        </>
    );
}

export default App;
