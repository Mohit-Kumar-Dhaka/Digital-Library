import React from "react";
import './Main.css';
export const Main = () =>{
    return (
        <div id="explore" className="Main">
            <h1>Explore Categories</h1>
            <div className="Main-book-type">
                <button className="Main-book-type-divs">Fiction </button>
                <button className="Main-book-type-divs">Non-Fiction</button>
                <button className="Main-book-type-divs">Technology</button>
                <button className="Main-book-type-divs">History</button>
                <button className="Main-book-type-divs">Science</button>
                <button className="Main-book-type-divs">Biographies</button>
            </div>
        </div>
    )
}