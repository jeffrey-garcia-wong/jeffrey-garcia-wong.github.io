import { Outlet, Link } from "react-router-dom";

import { default as email } from '../assets/mail-outline.svg';
import { default as phone } from '../assets/call-outline.svg';
import { default as birthday } from '../assets/calendar-outline.svg';
import { default as location } from '../assets/location-outline.svg';

const Layout = () => {
    return (
        <div className="center">
            <div className="row">
                <div className="col-12 col-s-12">
                    <div className="header">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div>
                                            <img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/314904876_10160352288083953_6395345698932759443_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MpD1NEg14ecAX9WFq4m&tn=1mPZwA3OgAa54hAI&_nc_ht=scontent-lhr8-1.xx&oh=00_AfCirWk0CtD0EuBbvzgjY-2mjTaGqlIclDxeyr3QqJ9d6Q&oe=6370E294" alt="Jeffrey Garcia Wong" width="80" />
                                        </div>  
                                    </td>
                                    <td>
                                        <div>
                                            <h2 className="full_name">Jeffrey Garcia Wong</h2>
                                            <p className="job_title">Fullstack Software Engineer</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <hr/>

                        <div className="personal">
                            <div className="row">
                                <div className="col-6 col-s-6">
                                    <div className="info"> 
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="leftcell">
                                                        <img src={email} className="svg-filter"></img>
                                                    </td>
                                                    <td className="rightcell">
                                                        <span className="label">EMAIL</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="rightcell">
                                                        jeffrey.garcia@gmail.com
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>  
                                </div>

                                <div className="col-6 col-s-12">
                                    <div className="info"> 
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="leftcell">
                                                        <img src={phone} className="svg-filter"></img>
                                                    </td>
                                                    <td className="rightcell">
                                                        <span className="label">PHONE</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="rightcell">
                                                        +44 (0) 7592217602
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>  
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6 col-s-6">
                                    <div className="info"> 
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="leftcell">
                                                        <img src={birthday} className="svg-filter"></img>
                                                    </td>
                                                    <td className="rightcell">
                                                        <span className="label">BIRTHDAY</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="rightcell">
                                                        8-Dec-1978
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </div>

                                <div className="col-6 col-s-12">
                                    <div className="info"> 
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td className="leftcell">
                                                        <img src={location} className="svg-filter"></img>
                                                    </td>
                                                    <td className="rightcell">
                                                        <span className="label">LOCATION</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td className="rightcell">
                                                        EN5, London,UK
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div> 
                                </div>
                            </div>                                
                        </div>
                    </div>                      
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-s-12">
                    <div className="nav">
                        <table>
                            <tbody>
                                <tr>
                                    <td><Link className="link" to="/about">About</Link></td>
                                    <td><Link className="link" to="/resume">Resume</Link></td>
                                    <td><Link className="link" to="/portfolio">Portfolio</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 col-s-12">
                    <div className="content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;