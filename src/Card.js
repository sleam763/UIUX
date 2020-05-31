import React from 'react'

const Card=()=>{
    return(
        <div id='card'>
            <div class='row' id='plan'>
               <p>Plan features</p>
            </div>

            <div id='bronze' class='row'>
                <h5>BRONZE</h5>
                <h2>N500</h2>
                <p>Per month</p>
                <button>Activate</button>
            </div>
            <div class='row' id='silver'>
                <h5>SILVER</h5>
                <h2>N2,000</h2>
                <p>Per month</p>
                <button>Activate</button>
            </div>
            <div id='gold' class='row'>
                <h5>GOLD</h5>
                <h2>N2,500</h2>
                <p>Per month</p>
                <button>Activate</button>
            </div>

        </div>
    )
};

export default Card;
