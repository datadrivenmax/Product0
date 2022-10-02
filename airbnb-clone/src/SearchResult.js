import './SearchResult.css'
import React from 'react'

// technique where we pass in the arguments into the function like so is known as "destructuring props"
function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            {/* add material ui heart icon later */}
            {/* <FavoriteBorderIcon className="searchResult__heart" /> */}

            <div className='searchResult__info'>
                <div className='searchResult__infoTop'>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div>
                <div className='searchResult__infoBottom'>

                </div>


            </div>
        </div>
    )
}

export default SearchResult