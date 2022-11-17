import { Outlet, Link } from "react-router-dom";

import { default as github } from '../assets/logo-github.svg';
import { default as google } from '../assets/logo-google.svg';
import { default as facebook } from '../assets/logo-facebook.svg';
import { default as twitter } from '../assets/logo-twitter.svg';
import { default as docker } from '../assets/logo-docker.svg';
import { default as linkedin } from '../assets/logo-linkedin.svg';

import Contact from '../pages/Contact';

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
                                            <img src="https://scontent-lhr8-1.xx.fbcdn.net/v/t39.30808-6/315441975_10160364874533953_5417404091494718375_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QzcEIdyrZJ0AX9OfakT&_nc_ht=scontent-lhr8-1.xx&oh=00_AfBGJBHsP5vG6ukVUGl_JKsFKEsUv8McyEP8vchrL1V6ww&oe=637773E2" alt="Jeffrey Garcia Wong" width="80" />
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
                        
                        <Contact />

                        <hr/>

                        <table>
                            <tbody>
                                <tr>
                                    <td className="leftcell">
                                        <a href="https://github.com/jeffrey-garcia-wong/" target="_blank">
                                            <img src={github} className="svg-filter" alt="github"></img>
                                        </a>
                                    </td>
                                    <td className="leftcell">
                                        <a href="https://www.facebook.com/jeffrey.garcia.792197" target="_blank">
                                            <img src={facebook} className="svg-filter" alt="facebook"></img>
                                        </a>
                                    </td>
                                    <td className="leftcell">
                                        <a href="https://hub.docker.com/u/jeffreygarcia" target="_blank">
                                            <img src={docker} className="svg-filter" alt="docker"></img>
                                        </a>
                                    </td>                                         
                                    <td className="leftcell">
                                        <a href="https://twitter.com/jeffreyklwong" target="_blank">
                                            <img src={twitter} className="svg-filter" alt="twitter"></img>
                                        </a>
                                    </td>
                                    <td className="leftcell">
                                        <a href="https://twitter.com/jeffreyklwong" target="_blank">
                                            <img src={linkedin} className="svg-filter" alt="linkedin"></img>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>                        
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