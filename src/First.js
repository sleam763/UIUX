import React from 'react'
import Card from './Card'
import bell from './bell.svg'
import online from './online.png'
import profile from './profile.png'
import dot from './dot.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import facebook from './facebook.png'
import linked from './linked.png'

class First extends React.Component{
    render(){
        return(
            <div id='first'>
                <div id='sec'>
                    <h1>lit</h1>
                    <img alt='' src={bell} width='20px'/>
                    <p>Status: Online <img alt='' src={online} width='14px' height='10px'/> </p>
                    <img alt='' src={profile} width='23px' height='22px'/>
                    <img alt='' src={dot} width='36px' height='22px'/>

                <div class='our'>
                    <h1>Our pricing plan for everyone</h1>
                    <p>Packages are for individual only</p>
                </div>
                <div id='ca'>
                    <Card/>
                    <div id='table'>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Loan</th>
                                    <th>50k - 150k Naira</th>
                                    <th>50k - 2M Naira</th>
                                    <th>50k - 4M Naira</th>
                                </tr>
                                <tr>
                                    <th>Investment</th>
                                    <th><img alt='' src=''/></th>
                                    <th>50k - 2M Naira</th>
                                    <th>50k - 4M Naira</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div id='footer'>
                    <ul>
                        <li>Terms & Condition</li> |
                        <li>Career</li> |
                        <li>Privacy policy</li> |
                        <li>leapsail Copyright 2020</li>
                        <img alt='' src={instagram} width='25px'/>
                        <img alt='' src={twitter} width='25px'/>
                        <img alt='' src={facebook} width='25px'/>
                        <img alt='' src={linked} width='25px'/>
                    </ul>
                </div>
                </div>
            </div>
        )
    }
};

export default First;
