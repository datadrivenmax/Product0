import React from 'react'
import './Header.css'
import { Link , BrowserRouter, useNavigate} from "react-router-dom"
// import SearchIcon from '@mui/icons-material/Search';
// import LanguageIcon from "@material-ui/icons/Language";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import { Avatar } from "@material-ui/core";
// import SearchIcon from "@material-ui/icons/Search";
// import { Link } from "react-router-dom";

// // new code addition to header.js
// let navigate = useNavigate();
// const routeChange = () => {
//     let path = '/search';
//     navigate(path);
// }





function Header() {
    return (
        <div className='header'>

            {/* Link tag from react router 
            
            why is forcing me to refresh the page*/}
            <BrowserRouter>
                <Link to="/">
                    <img
                        className='header__icon'
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F1000marcas.net%2Fwp-content%2Fuploads%2F2020%2F03%2FLogo-UCLA-1280x667.png&f=1&nofb=1&ipt=dad7b5d3df5cce0ff5ef838026ac5854431b34911fbcf4a0f8f4ca9a49f85bcb&ipo=images"
                        alt=""
                    // onClick={routeChange}
                    />

                </Link>
            </BrowserRouter>
            <div className='header__center'>
                <input type="text" />
                {/* <SearchIcon/> */}
            </div>



            <div className='header__right'>
                <p>Become a host</p>
                {/* <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar /> */}
            </div>

        </div>

    )
}

export default Header