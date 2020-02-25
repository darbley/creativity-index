import React from 'react';
import './style.scss';
import Navbar from '../Navbar/Navbar';
import ContainerContent from '../../templates/ContainerContent/ContainerContent';
import bookImg from './i/the-book.png';

const Header = () => (
    <div className="blockwrap header-wrap">
        <ContainerContent>
            <header>
                <img src={bookImg} className="book-img" alt="The Rethink Book" />
                <h1>How creative is your business? <br/>Take the test.</h1>
            </header>
        </ContainerContent>
    </div>
    
    
)
export default Header;