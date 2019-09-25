import React, { useState, useEffect } from 'react';
import Provider from './util/Provider';

// util
import { GetTheme } from './util/Theme';

// pages
import Home from './page/Home';

const App = () => {
    const [ theme, setTheme ] = useState('Dark');

    // executado sempre que render for ser executado ou no willunmount
    useEffect(() => {
        console.log('Render Run');
        return () => { console.log('destroy?'); }
    }, []);

    useEffect(() => {
        console.log(theme);
    }, [theme])

    return (
        <Provider theme={theme} setTheme={setTheme}>
            {GetTheme(theme)}
            <Home />
        </Provider>
    )
}

export default App;
