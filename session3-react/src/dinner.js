import React from 'react';

function dinner(props)
{
    return(
        <div>
            <h1>today we are serving chicken "{props.dishName}"</h1>
            <h2>We aslo have "{props.sweetDish}" in sweet dish</h2>
        </div>
    );
}

export default dinner;