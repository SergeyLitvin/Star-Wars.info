import React from 'react';
import './error-indicator.css';
import imgDeathStar from './death-star.png'

const ErrorIndicator = () => {
    return (
        <React.Fragment>
            <div className="error-indicator">
                <img src={imgDeathStar} alt='Death star planet'/>
                <span className='boom'>BOOM!</span>
                <span>something has gone terribly wrong</span>
                <span>(but we already sent droids to fix it)</span>
            </div>
        </React.Fragment>
    );
}

export default ErrorIndicator;