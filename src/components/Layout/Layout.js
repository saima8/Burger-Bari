import React from 'react';


import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'


const layout = ( props ) => (
    <>
        <Toolbar />
        <main className={classes.Content}>
            {props.children}
        </main>
    </>
);

export default layout;