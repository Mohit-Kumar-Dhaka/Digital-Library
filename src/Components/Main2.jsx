import React from "react";
import './Main2.css';
import { Main2Books } from "./Main2Books";
export const Main2 = () =>{
    return (
        <div id="popular" className="Main2">
            <h1>Popular Books</h1>
                <Main2Books/>
        </div>
    )
}