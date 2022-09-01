import react, { useState } from "react";
import moon from '../images/icon-moon.svg';
import sun from '../images/icon-sun.svg';


const INITIAL_THEME = {hint: 'dark', icon: moon};
const CHECK_THEME = document.body.classList;

export default function Header() {
    const [toggleTheme, setToggle] = useState(INITIAL_THEME)

    function handleToggle() {
        if (CHECK_THEME.contains('dark-theme')) {
            CHECK_THEME.remove('dark-theme')
            setToggle(INITIAL_THEME)
        } else {
            CHECK_THEME.add('dark-theme')
            setToggle({hint: 'light', icon: sun})

        }
    }

    return (
        <header className="header container">
            <h1>DevFinder</h1>
            <button onClick={handleToggle} className="toggleIcon">
                <span>{toggleTheme.hint}</span>
                <img src={toggleTheme.icon} alt=""/>
            </button>
        </header>
    )
}   