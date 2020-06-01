import React from 'react'
import Card from './Card'
import bell from './bell.svg'
import profile from './profile.png'
import dot from './dot.png'
import instagram from './instagram.png'
import twitter from './twitter.png'
import facebook from './facebook.png'
import linked from './linked.png'
import checkGreen from './check.svg'
import checkBlue from './checkBlue.svg'
import checkPurple from './checkPurple.svg'

class First extends React.Component{
    render(){
        return(
            <div className='container'>
                <div className='navbar'>
                    <div>
                        <h1>Lit</h1>
                    </div>
                    <div className='navbar-user-action'>
                        <img alt='' src={bell} width='20px'/>
                        <p>Status: Online</p>
                        <span className="status-indicator" />
                        <img alt='' src={profile} width='23px' height='22px'/>
                        <img alt='' src={dot} width='36px' height='22px'/>
                    </div>
                </div>

                <div className='our'>
                    <h1>Our pricing plan for everyone</h1>
                    <p>Packages are for individual only</p>
                </div>
                <div className='ca'>
                    <Card/>
                    <div className='table-container'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Loan</td>
                                    <td className="green-identier">50k - 150k Naira</td>
                                    <td className="blue-identier">50k - 2M Naira</td>
                                    <td className="purple-identier">50k - 4M Naira</td>
                                </tr>
                                <tr>
                                    <td>Investment</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Smarttravel Savings</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Security</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Bank Statement</td>
                                    <td className="green-identier">50k - 150k Naira</td>
                                    <td className="blue-identier">50k - 2M Naira</td>
                                    <td className="purple-identier">50k - 4M Naira</td>
                                </tr>
                                <tr>
                                    <td>Visa</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Ticket</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Escort</td>
                                    <td></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Eight Free Country Designation</td>
                                    <td className="green-identier">50k - 150k Naira</td>
                                    <td className="blue-identier">50k - 2M Naira</td>
                                    <td className="purple-identier">50k - 4M Naira</td>
                                </tr>
                                <tr>
                                    <td>Tour Package</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Hotel Reservation</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>24/7 Customer Success Expert</td>
                                    <td></td>
                                    <td></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Travel Shows</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Event</td>
                                    <td></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Games</td>
                                    <td></td>
                                    <td></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Gold Investor</td>
                                    <td></td>
                                    <td color='purple'>Silver Investor </td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Startup</td>
                                    <td></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Give a Meal</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                                <tr>
                                    <td>Cargo</td>
                                    <td><img alt='' src={checkGreen}/></td>
                                    <td><img alt='' src={checkBlue}/></td>
                                    <td><img alt='' src={checkPurple}/></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='footer'>
                    <div className="footer-logo">
                        <h1>Lit</h1>
                    </div>
                    <div className="footer-links">
                        <p>Terms & Condition <span className="separator">|</span></p>
                        <p>Career <span className="separator">|</span></p>
                        <p>Privacy Policy <span className="separator">|</span></p>
                        <p>Leapsail Copyright 2020</p>
                    </div>
                    <div className="social-icons">
                        <img alt='' src={instagram} width='25px'/>
                        <img alt='' src={twitter} width='25px'/>
                        <img alt='' src={facebook} width='25px'/>
                        <img alt='' src={linked} width='25px'/>
                    </div>
                </div>
            </div>
        )
    }
};

export default First;
