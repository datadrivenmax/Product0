import React, { useState } from 'react'
import { BrowserRouter, Link } from 'react-router-dom';
import './Banner.css'
import Search from './Search.js'


function Banner() {
    
    // // history
    //     const history = useHistory();

        // write state of search button
        const [showSearch, setShowSearch] = useState
        (false);


        // declare showSearch above
        // below if showSearch is true then render out search component

        return (
        <div className='banner'>

            <div className='banner__search'>

                {showSearch && <Search />}
                <button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton'

                // not sure what this type of statement is
                >{showSearch ? "Hide" : "Search Dates"}


                </button>
            </div>

            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>

                <h5>Plan a different kind of getaway to uncover the hideen gems near you</h5>


                <button variant="outlined">
                    Explore Nearby Properties
                </button>
        </div>
    </div>
    )
}

export default Banner