import React from "react";
import "../Components/SearchBar.css";


export default function SearchBar(placeholder, data) {
    return (
        <>
            <div className="search">
                <div className="searchInputs">
                    <input type="text" placeholder={placeholder}/>
                    <div className="searchIcon "></div>
                </div>
                <div className="dataResult">
                    {/* {data.map((value, key) => {
                        return(
                        <a className="dataItem" target="_blank">
                            <p>{value.price}</p>
                        </a>
                        )
                        ;
                    })} */}
                </div>
            </div>
        </>
    );
}