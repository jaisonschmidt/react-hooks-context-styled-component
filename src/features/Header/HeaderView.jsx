import React from 'react';

import Header from './HeaderStyle';

import Context from '../../util/Context';

const HeaderView = props => (
    <Context.Consumer>
      {context => (
        <Header>
            <div>Logomarca</div>
            <div>
                <button type="button" onClick={() => context.setTheme('Default')}>Default</button>
                <button type="button" onClick={() => context.setTheme('Dark')}>Dark</button>
            </div>
        </Header>
    )}
    </Context.Consumer>
);

export default HeaderView;
