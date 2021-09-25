import React from "react";
import "./About.css";

function About(props){
    return(
        <div className="aboutPage">
            <span className="content">
                this is about page of movie introduction website
                using ReactJs with movie API.
                <span className="date">2021.09.25</span>
            </span>
        </div>
    );
}

export default About;