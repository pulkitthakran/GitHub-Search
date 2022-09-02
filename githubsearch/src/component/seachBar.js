import React, {useState} from 'react';
import searchIcon from '../images/search.svg';

export default function Search({handleSearch, hasError, hasLoading}) {
    const [username, setUsername] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        handleSearch(username)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Type the User Name" value={username}
                   onChange={e => (setUsername(e.target.value))} className="form-control"/>

            <img src={searchIcon} alt="" className="search-icon"/>
            {hasError && <span className="noResult">no result found</span>}
            <button className="disableSearch" disabled={hasLoading}>
                {hasLoading ? 'searching' : 'search'}
            </button>
        </form>
    )
}