import React from 'react';
import logo from '../../GitHub-Mark/PNG/GitHub-Mark-64px.png'
import './Header.css';
// import Link from '../Link/Link';

// const Header = ({logo}) => (
const Header = () => (
    <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        {/* <p>
            Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
            >
                Learn React
        </a> */}
        {/* <Link url='https://reactjs.org' title='Learn React' /> */}
        <h1>
            My Github Portfolio
        </h1>
    </header>
);

export default Header;