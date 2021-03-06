import React from   'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
    
]

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} 
                          label={ctrl.label} 
                          onIngredientAdded={() => props.onIngredientAdded(ctrl.type)}
                          onIngredientRemoved={() => props.onIngredientRemoved(ctrl.type)} 
                          disabled={props.disabledInfos[ctrl.type]} />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={props.onOrder}>ORDER NOW</button>
    </div>
)

export default BuildControls;