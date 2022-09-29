import React from "react";
import styles from "../styles/listItem.module.css";

const ListItem = ({ data, handleSubmit }) => {
  return (
    <div className={styles.box}>
      {data &&
        data.length !== 0 &&
        data.map((val, index) => {
          return (
            <>
              <ul>
                <li key={val.id}>
                  <button
                    type="submit"
                    className={styles.btn}
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    value={val.login}
                  >
                    {val.login}
                  </button>
                </li>
              </ul>
            </>
          );
        })}
    </div>
  );
};

export default ListItem;
