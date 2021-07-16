import React, { useContext } from 'react';
import MenuContext from '../../store/handle-order';

import classes from './Button.module.css';

function Button(props){

    const addSubCtx = useContext(MenuContext);

    function evaluateClick(clicktype){
        if(props.onDisplay){
            props.onDisplay();
            return;
        }
        else if(props.onClose){
            props.onClose();
            return;
        }
        //flag for possible remove
        else if(props.onAdd){
            addSubCtx.addItem;
        }
        else return;
    }

    return(
        <button onClick={evaluateClick}
        className={`${classes.universal_button} ${props.className}`}>{props.children}</button>
    )
}

export default Button;