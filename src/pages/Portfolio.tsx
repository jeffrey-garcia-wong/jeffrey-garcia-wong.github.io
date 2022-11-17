import { Outlet, Link } from "react-router-dom";

import CSS from 'csstype';

import { default as sortAlgDemo } from '../assets/stats-chart-outline.svg';
import { default as interviewPrep } from '../assets/library-outline.svg';
import { default as expenseDashboard } from '../assets/calculator-outline.svg';

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
                                                <Link className="link" to="/sortAlgDemo/quicksort">
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
                                            <h3>
                                                <a className="link" href="https://github.com/jeffrey-garcia-wong/coding-interview/tree/develop" target="_blank">
                                                    Technical Interview Prep
                                                </a>
                                            </h3>                                            
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

                <div className="row">
                    <div className="col-6 col-s-6">
                        <div className="stack"> 
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="leftcell">
                                            <img src={expenseDashboard} className="svg-filter"></img>
                                        </td>
                                        <td className="rightcell">
                                            <h3>
                                                <a className="link" href="https://stackblitz.com/edit/home-expenses-dashboard?file=index.tsx" target="_blank">
                                                    Home Expense Dashboard
                                                </a>
                                            </h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            A home expense dashboard site built with reactjs and typescript
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