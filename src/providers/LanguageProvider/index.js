import React, { Component } from 'react';
import { getLang } from '../../helpers';
const LanguageContext = React.createContext();
export const LanguageConsumer = LanguageContext.Consumer;

class LanguageProvider extends Component {
    constructor(){
        super();
         // Set initial lang of site.
        this.state = {
            language: getLang(),
        }
        
    }
    updateLanguage = (e) => {
        //e.preventDefault();
        //console.log('update lang ',e.target.dataset.lang);
        this.setState({ language: e.target.dataset.lang });
    }

    render() {
        return (
            <LanguageContext.Provider  value={{
                language: this.state.language,
                updateLanguage: this.updateLanguage
              }} >
                {this.props.children}
            </LanguageContext.Provider>
        );
    }
}

export default LanguageProvider;


// Set string/value of text to match currently selected language.
export const TranslatableText = props => (
            <LanguageConsumer>
                {({ language }) => props.dictionary[language]}
            </LanguageConsumer>
       );