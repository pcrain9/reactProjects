import React from 'react';

import classes from './MenuOverlay.module.css';
import food from './pics/food.jpg';
import text from './menu-description.js';

function  MenuOverlay() {

    return (
        
            <div className={classes.mainOverlay}>
                <img src={food} alt='null' />
                    <p className={classes.centerText}>
                        {text}
                    </p>
                
            </div >

        

    );
}

export default MenuOverlay;