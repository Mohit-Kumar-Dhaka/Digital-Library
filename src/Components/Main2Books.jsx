import DollsImage from './Dolls.jpg';
import MT from './MT Cicero.jpg';
import Nego from './Negociation.jpg';
import Robert from './Robert William Wood.jpg';
import AI from './AI.jpg';
import DSA1 from './DSA1.jpg';
import DSA2 from './DSA2.jpg';
import WEB from './WEB.jpg';
import React from 'react';
import './Main2.css'
export const Main2Books = () =>{
    return (
        <div className='Main2-books'>
            <div className="Main2-books-grid">
                    <img src={DollsImage} alt="Book-cover" />
                    <h3>Dolls -la destinee</h3>
                    <h4>illya C.Colin</h4>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <a href='https://www.gutenberg.org/files/1342/1342-h/1342-h.htm'>Read</a>
            </div>

            <div className="Main2-books-grid"> 
                    <img src={MT} alt="Book-cover" />
                    <h3>M.T.Cicero,His Offices</h3>
                    <h4>Marcus Tullius Cicero, William Guthrie</h4>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <a href='https://www.gutenberg.org/files/2701/2701-h/2701-h.htm'>Read</a>
            </div>
            <div className="Main2-books-grid">
                    <img src={Nego} alt="Book-cover" />
                    <h3>NEGOCIATION</h3>
                    <h4>Le Grand Livre De La</h4>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <a href='https://www.cs.cmu.edu/~rgs/alice-I.html'>Read</a>
            </div>

            <div className="Main2-books-grid">
                    <img src={Robert} alt="Book-cover" />
                    <h3>How To Tell The Birds From The Flowers,And Other Wood-Cuts</h3>
                    <h4>Robert Williams Wood</h4>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <a href='https://files.libcom.org/files/1984.pdf '>Read</a>
            </div>

             <div className="Main2-books-grid">
                    <img src={AI} alt="Book-cover" />
                    <h3>Use a public domain or generic AI-themed image since official covers are copyrighted</h3>
                    <h4>Stuart Russell & Peter Norvig</h4>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <a href='https://people.engr.tamu.edu/guni/csce625/slides/AI.pdf'>Read</a>
            </div>

             <div className="Main2-books-grid">
                    <img src={DSA1} alt="Book-cover" />
                    <h3>A simple algorithm or code illustration placeholder</h3>
                    <h4>G. Barne</h4>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <a href='https://www.mta.ca/~rrosebru/oldcourse/263114/Dsa.pdf'>Read</a>
            </div>

             <div className="Main2-books-grid">
                    <img src={DSA2} alt="Book-cover" />
                    <h3>Michael H. Goldwasser (adapted from Goodrich & Tamassia)</h3>
                    <h4>Thomas H. Cormen </h4>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <a href='https://nibmehub.com/opac-service/pdf/read/Data%20Structures%20and%20Algorithms%20in%20Python.pdf'>Read</a>
            </div>

             <div className="Main2-books-grid">
                    <img src={WEB} alt="Book-cover" />
                    <h3>Covers front-end (HTML, CSS, JS) and backend (PHP, MySQL) topics</h3>
                    <h4>Narasimha Karumanchi</h4>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <a href='https://mrce.in/ebooks/Web%20Coding%20%26%20Development%202nd%20Ed.pdf'>Read</a>
            </div>
        </div>
    )
}