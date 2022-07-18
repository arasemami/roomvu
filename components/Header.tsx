import { useDispatch } from "react-redux";
import { SwitchTheme } from "./redux/actions/themes";
import { useEffect } from "react";
import useLocalStorage from "use-local-storage";

function Header() {
    let dispatch = useDispatch();
    const [themeOnLocal, setThemeOnLocal] = useLocalStorage("theme", "");
    const switchTheme = () => {
        const newTheme = themeOnLocal === 'light' ? 'dark' : 'light';
        dispatch(SwitchTheme(newTheme));
        setThemeOnLocal(newTheme);
    }

    useEffect(() => {
        dispatch(SwitchTheme(themeOnLocal));
    });

    return (
        <div className="header-text">
            <h2>Overreacted</h2>
            <div className="theme-change" onClick={switchTheme}>Change Theme</div>
        </div>
    )
}

export default Header
