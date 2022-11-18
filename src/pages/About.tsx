import { default as mobile } from '../assets/phone-portrait-outline.svg';
import { default as web } from '../assets/desktop-outline.svg';
import { default as service } from '../assets/server-outline.svg';
import { default as api } from '../assets/cloud-done-outline.svg';
import { default as library } from '../assets/extension-puzzle-outline.svg';
import { default as terminal } from '../assets/terminal-outline.svg';

const About = () => {
    return(
        <div>
            <div>
                <h1>About me</h1>
                <hr/>
            </div>

            <div>
                I am a fullstack software engineer from HK, currently based in London, UK. 
                I enjoy writing code very much everyday, and passionate about building
                applications up and down the stack. I am really proud of being dependable 
                to help clients / managers in solving complex problems and fulfill their 
                requirements.<p/>
            </div>

            <div>
                <h1>What I do</h1>
                <hr/>
            </div>

            <div>
                My main duty includes implementing the requirements from my clients, depending 
                on the scale of the project, business analyst maybe assigned to consolidate the 
                user requirements and I will be writing the system design, I am accountable 
                to identify what software components are needed and how they are created. 
                In many occasions if it require enhancement to an existing infrastructure 
                components, or if the system design introduce the use of a relatively new 
                technology stack, then I will work with the architect to articulate the 
                rationale behind the proposed change, or even spin off the task as a 
                separate core infrastructure enhancement and lead the development.<p/>

                The system design review stage involves me writing small prototype code and 
                driving the demonstration with core architect and delivery manager, the expected 
                deliverables are usually the performance metrics of the system, and cost estimation 
                in terms of the computation resources and programming efforts.<p/>

                As technical lead in the agile team, I am keen to enforce engineering disciplines 
                by establishing various measures, includes coding style guide, static code 
                analyzer, unit-test coverage, e2e automated test, performance load test and 
                security penetration test, such measures are then integrated with the CI pipeline 
                maintained by DevOps team and automatically fire alert if the qualifying conditions 
                cannot be met. Everyday I checkout the code from individual developers, 
                reviewing their pull requests, guiding them to resolve any defects reported by QA 
                team. But in many projects with small budgets and tight timelines, I constribute 
                largely in coding and testing rather than mentoring. At the end of each sprint, 
                the scrum master will organize the sprint demo with product owner where I present 
                the application and tackle any query/concern from the client directly.<p/>

                My favorite programming languages are Java and Typescript, I favour static-typed 
                programming languages, as they make my life easier when building large-scale and 
                long-lasting systems by catching bug in early stage.<p/>
                
                I have exposures and experiences in various technology stacks, ranging from 
                frontend client to multi-tier backend system, as listed below:<p/>

                <div className="section">
                    <div className="row">
                        <div className="col-6 col-s-6">
                            <div className="stack"> 
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="leftcell">
                                                <img src={mobile} className="svg-filter"></img>
                                            </td>
                                            <td className="rightcell">
                                                <h3>Native / Hybrid Mobile Apps</h3><p/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                Mobile apps built using native iOS / Android SDK, or 
                                                hybrid using Single-Page App embedded in local webview.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>                        
                        </div>

                        <div className="col-6 col-s-12">
                            <div className="stack">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="leftcell">
                                                <img src={web} className="svg-filter"></img>
                                            </td>
                                            <td className="rightcell">
                                                <h3>Single-Page Apps</h3><p/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                Website built using client-side javascript technology by 
                                                Angular framework or ReactJS library.
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
                                                <img src={api} className="svg-filter"></img>
                                            </td>
                                            <td className="rightcell">
                                                <h3>Backend Microservices</h3><p/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                Backend microservices services providing REST API consumed by frontend 
                                                applications, using either SpringBoot framework or NodeJS 
                                                library.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-6 col-s-12">
                            <div className="stack">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="leftcell">
                                                <img src={service} className="svg-filter"></img>
                                            </td>
                                            <td className="rightcell">
                                                <h3>Core Infrastructure Service</h3><p/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                Mission critical core infrastructure service used by 
                                                applications from various lines of business.
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
                                                <img src={library} className="svg-filter"></img>
                                            </td>
                                            <td className="rightcell">
                                                <h3>Core Libraries / Tools</h3><p/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                General purpose libraries re-usable across single-paged apps 
                                                or backend microservices.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-6 col-s-12">
                            <div className="stack">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td className="leftcell">
                                                <img src={terminal} className="svg-filter"></img>
                                            </td>
                                            <td className="rightcell">
                                                <h3>Embedded Software Application</h3><p/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                Thick client application which runs in self-service 
                                                ATM terminals.
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
    );
}

export default About;