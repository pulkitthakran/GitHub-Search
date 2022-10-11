import React, { useCallback, useEffect, useState } from "react";

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import styles from "../styles/searchBar.module.css";
import { useSearchParams } from "react-router-dom";
import ListItem from "../components/ListItem";
import UserCard from "./userCard";
import { getProfile, getSearchProfile } from "../api/profile";

const SearchBar = ({ setUserData, userData }) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [inputText, setInputText] = useState(searchParams.get("q"));

  const [flag, setFlag] = useState(false);
  const [userFlag, setUserFlag] = useState(false);
  const [userList, setUserList] = useState([]);

  // function debounce(func, timeout = 300) {
  //   let timer;
  //   return (...args) => {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       func.apply(this, args);
  //     }, timeout);
  //   };
  // }

  const getProfileData = useCallback(async (userName) => {
    try {
      console.log(userName);
      let a = await getProfile(userName);
      setUserData(a.data);
      setUserFlag(true);
    } catch (error) {
      console.log(error);
    }
  }, [setUserData]);

  const getProfileList = useCallback(async (userName) => {
      const response = await getSearchProfile(userName);
      setUserList(response.data.items);
    }, []
  );

  const handleChange = useCallback(
    (e) => {
      setFlag(true);
      setUserFlag(false);
      e.preventDefault();
      setInputText(e.target.value);
      getProfileList(e.target.value);

      // setSearchParams({ ...searchParams, q: e.target.value });
    },
    [getProfileList, searchParams, setSearchParams]
  );

  useEffect(() => {
    if (searchParams.get("q") && typeof searchParams.get("q") === "string")
      getProfileData(searchParams.get('q'));    
  }, [getProfileData, searchParams]);

  // useEffect(() => {
  //   if (inputText) {
  //     setSearchParams({ ...searchParams, q: inputText });
  //   }
  // }, [inputText, searchParams, setSearchParams]);

  // useEffect(() => {
  //   ((e) => {
  //     searchParams.get("status") === "true" && getProfileData(searchParams.get('q'));
  //   })();
  // }, [getProfileData, searchParams]);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setInputText(e.target.value);
      const searchValue = e.target.value
        ? e.target.value
        : searchParams.get("q");

      try {
        console.log(searchValue);
        let a = await getProfile(searchValue);
        setUserData(a.data);
        setUserList([]);
        setFlag(false);
        setUserFlag(true);
        setSearchParams({ ...searchParams, q: e.target.value });

      } catch (e) {
        console.log(e);
      }
    },
    [searchParams, setSearchParams, setUserData]
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
