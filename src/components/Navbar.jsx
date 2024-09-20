import { useContext } from "react";
import { UserContext } from "../App";
import { handleNavDetails } from "../utils/handleFuncLogic";
import { useLocation } from "react-router-dom";

export const Navbar = () => {
    const { isAuthenticated } = useContext(UserContext);
    const pathArr = useLocation().pathname.split('/');
    const path = pathArr.find(el => el !== '');
    const { text, paraText, headtextSize } = handleNavDetails(path, isAuthenticated);
    return (
        <div className='navDiv'>
            <p className={`navFirstP ${headtextSize ? `text-${headtextSize}` : ''}`}>
                {text}
            </p>
            {paraText &&
                <p className='navSecondP'>
                    {paraText}
                </p>
            }
        </div>
    )
}