import React from 'react';

import classes from './Button.module.css';

function Button(props){

    function evaluateClick(){
        if(props.onDisplay){
            props.onDisplay();
            return;
        }
        else if(props.onClose){
            props.onClose();
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