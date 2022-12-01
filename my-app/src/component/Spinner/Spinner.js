import React from "react";
import spinner from '../../assets/images/spinner.gif';

function Spinner() {
    return (
        <div className="container d-flex align-items-center justify-content-center">
            <img className="spinner" src={spinner} alt=""></img>
        </div>
    )
}

export default Spinner;