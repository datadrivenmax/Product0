import React from 'react'
import './Banner.css'


function Banner() {
    return (
        <div className='banner'>
            <div className='banner__info'>
                <h1>Get out and stretch your imagination</h1>
                <h5>Plan a different kind of getaway to uncover the hideen gems near you</h5>
                <button variant="outlined">
                    Explore Nearby
                </button>
            </div>
        </div>
    )
}

export default Banner