import React from 'react';

import classes from './Button.module.css';

function Button(props){

    function evaluateClick(){
        if(props.onDisplay){
            props.onDisplay();
            return;
        }
        if(props.onClose){
            props.onClose();
            return;
        }
        if(props.onOrderWasPlaced){
            props.onOrderWasPlaced();
            return;
        }
        if(props.onOrderIsComplete){
            props.onOrderIsComplete();
            return;
        }
        else return;
    }

    return(
        <button onClick={evaluateClick}
        className={`${classes.universal_button} ${props.className}`}>{props.children}</button>
    )
}

export default Button;