import React from 'react';
import classes from './Input.css';


const Input = (props) => {
    let inputElement = null;
    switch(props.elementType) {
        case ('input'):
            inputElement = <input className={classes.InputElement} {...props.elementConfig} value={props.value} onChange={props.onChange}/>
            break;
        case ('select'):
            inputElement = <select className={classes.InputElement} value={props.value} onChange={props.onChange}>
                                {props.elementConfig.options.map(option => (<option value={option.value} key={option.value}> {option.displayValue} </option>))}
                           </select>
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} {...props} />
            break;
        default:
            inputElement = <input className={classes.InputElement} {...props} onChange={props.onchange} />
            break;

    }

    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;