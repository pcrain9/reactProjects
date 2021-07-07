import React from 'react';

import classes from './MenuOverlay.module.css';
import food from './food.jpg';
import Card from './UI/Card';

function Overlay() {

    return (
        
            <div className={classes.mainOverlay}>
                <img src={food} alt='null' />
                <Card className={classes.centerText}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                    </p>
                </Card>
            </div >

        

    );
}

export default Overlay;