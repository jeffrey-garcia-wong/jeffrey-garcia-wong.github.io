import { Outlet, Link } from "react-router-dom";

import CSS from 'csstype';

import { default as sortAlgDemo } from '../assets/stats-chart-outline.svg';
import { default as interviewPrep } from '../assets/library-outline.svg';

const Portfolio = () => {
    return (
        <div>
            <div>
                <h1>Portfolio</h1>
                <hr/>
            </div>

            <div className="section">
                    <div className="row">
                        <div className="col-6 col-s-6">
                            <div className="stack"> 
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="leftcell">
                                                <img src={sortAlgDemo} className="svg-filter"></img>
                                            </td>
                                            <td className="rightcell">
                                                <h3>
                                                    <Link className="link" to="/sortAlgDemo">
                                                        Sorting Algorithm Animations
                                                    </Link>
                                                    
                                                </h3>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                Animations illustrate how effectively data sets 
                                                can be sorted using different algorithms.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                            
                        </div>

                        <div className="col-6 col-s-6">
                            
                            <div className="stack"> 
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="leftcell">
                                                <img src={interviewPrep} className="svg-filter"></img>
                                            </td>
                                            <td className="rightcell">
                                                <h3>Technical Interview Prep</h3><p/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                Learning how to write clean code and design scalable systems 
                                                to become a better software engineer.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div> 
                        </div>
                    </div>
            </div>
        </div>        
    );
};

export default Portfolio;