import './SearchPage.css'
import React from 'react'

import { Button } from "@material-ui/core";

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
        <p>62 stays · 26 august to 30 august · 2 guest</p>
        <h1>Stays nearby</h1>
        <button><h6>Cancellation Flexibility</h6></button>
        <button><h6>Type of Place</h6></button>
        <button><h6>Price</h6></button>
        <button><h6>Rooms and beds</h6></button>
        <button><h6>More filters</h6></button>


      </div>
    </div>
  )
}

export default SearchPage