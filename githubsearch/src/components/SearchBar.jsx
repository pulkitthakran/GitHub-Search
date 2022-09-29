import React, { useCallback, useEffect, useState } from "react";

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styles from "../styles/searchBar.module.css";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import ListItem from "../components/ListItem";
import UserCard from "./userCard";

const SearchBar = ({ setUserData, userData }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [inputText, setInputText] = useState(searchParams.get("q"));

  const [flag, setFlag] = useState(false);
  const [userFlag, setUserFlag] = useState(false);
  const [userList, setUserList] = useState([]);

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }
  

  const apiCall = useCallback(
    debounce(async (searchParams) => {
      const url = `https://api.github.com/search/users?q=${searchParams.get(
        "q"
      )}&per_page=10`;

      const response = await fetch(url).catch((err) => console.log(err));
      

      const user = await response.json();

      setUserList(user.items);
      
    }, 1000),
    [userList, userFlag]
  );

  useEffect(() => {
    if (searchParams.get("q") && typeof searchParams.get("q") === "string")
      apiCall(searchParams);
    
  }, [searchParams]);

  const handleChange = useCallback(
    (e) => {
      setFlag(true);
      setUserFlag(false);
      e.preventDefault();
      setInputText(e.target.value);
      setSearchParams({ ...searchParams, q: e.target.value });
    },
    [inputText, flag, searchParams]
  );
  useEffect(() => {
    if (inputText) {
      setSearchParams({ ...searchParams, q: inputText });
    }
  }, [inputText]);

  const getData = useCallback(async () => {
    try {
      let a = await axios.get(
        `https://api.github.com/users/${searchParams.get("q")}`
      );
      console.log(a.data);
      setUserData(a.data);
      setFlag(false);
      setUserFlag(true);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    ((e) => {
      searchParams.get("status") === "true" && getData();
    })();
  }, [getData, searchParams]);

  const handleSubmit = useCallback(
    async (e) => {
      console.log(e.target.value);
      e.preventDefault();
      setInputText(e.target.value);
      const searchValue = e.target.value
        ? e.target.value
        : searchParams.get("q");

      try {
        let a = await axios.get(`https://api.github.com/users/${searchValue}`);
        console.log(a.data);
        setUserData(a.data);
        setUserList([]);
        console.log(e.target.value);
        setFlag(false);
        setUserFlag(true);
      } catch (e) {
        console.log(e);
      }
    },
    [searchParams, userFlag, flag, inputText]
  );

  

  return (
    <>
      <form className={styles.mainSearchBar}>
        <div className={styles.userSearchBar}>
          <SearchRoundedIcon
            sx={{
              color: "#2c58fe",
              marginRight: "1vw",
              marginTop: "6px",
              marginLeft: "1vw",
            }}
          />
          <input
            className={styles.userInput}
            value={inputText}
            onChange={(e) => handleChange(e)}
            type="text"
            id="inputID"
            placeholder="Search GitHub Username..."
            maxLength={39}
          />
          <button
            onClick={(e) => {
              handleSubmit(e);
              const nsp = new URLSearchParams(searchParams);
              nsp.set("status", "true");
              setSearchParams(nsp);
            }}
            className={styles.userSearchButton}
            type="submit"
          >
            Search
          </button>
        </div>
        
      </form>
      {flag && <ListItem data={userList} handleSubmit={handleSubmit} />}

      {userFlag && <UserCard data={userData} />}
    </>
  );
};

export default SearchBar;
