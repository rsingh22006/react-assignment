import { useContext } from "react";
import { UserContext } from "../App";
import { handleNavDetails } from "../utils/handleFuncLogic";

export const Navbar = ({path}) => {
    const {isAuthenticated} = useContext(UserContext);
    const {text,paraText,headtextSize} = handleNavDetails(path,isAuthenticated);
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