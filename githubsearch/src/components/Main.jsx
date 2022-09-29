import React from "react";
import { useState } from "react";
import SearchBar from "./SearchBar";


function Main(props) {
  const [userData, setUserData] = useState();
  console.log(userData);
  return (
    <main>
      <SearchBar setUserData={setUserData} userData={userData} />
    </main>
  );
}

export default Main;
