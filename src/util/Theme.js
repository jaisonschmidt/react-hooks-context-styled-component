import React from 'react';

import ThemeDefault from '../assets/theme/Default/Default';
import ThemeDark from '../assets/theme/Dark/Dark';

const GetTheme = theme => {
    switch(theme){
        case 'Dark':
            return <ThemeDark />;
        default:
            return <ThemeDefault />
    }
}

export { GetTheme };
