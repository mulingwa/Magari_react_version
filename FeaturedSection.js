import React from 'react'
import './App.css'
const FeaturedSection = (props) => {
    return(
        <React.Fragment className="section_separator"> 
            <div class="center_align">
                <h3>Section className</h3>     
            </div>
            <div class="right_align">
                <a><h3>Add</h3></a>     
            </div>
        </React.Fragment>
    )
}
export default FeaturedSection