import './Search.css'
import React, {useState} from 'react'
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file (where are these files coming from??)

// DATE PICKER COMPONENT
function Search() {

    // React useState Hooks  for startDate and endDate
    const [startDate, setStartDate] = useState
        (new Date());

    const [endDate, setEndDate] = useState
        (new Date());

    // create variable selectionRange to mark startDate and endDate
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges) {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }


    return (
        <div className='search'>



        </div>
    )
}

export default Search