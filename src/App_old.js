import React from 'react';
import logo from './logo.svg';
import './assets/scss/styles.scss';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import LanguageProvider from './providers/LanguageProvider';

class App extends React.Component {
    static propTypes = { 
        cookies: instanceOf(Cookies).isRequired
    };
    constructor(){
        super()
    }
    render() {
        return (
            <div className="">
                <h1>The site</h1>
            </div>
        )
    }
}
export default App;