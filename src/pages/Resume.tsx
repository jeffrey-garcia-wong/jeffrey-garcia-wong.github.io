import { default as university } from '../assets/school-outline.svg';
import { default as career } from '../assets/briefcase-outline.svg';
import { default as skill } from '../assets/construct-outline.svg';

const Resume = () => {
    return (
        <div>
            <div>
                <h1>Resume</h1>
                <hr/>
            </div>

            <div className="timeline">
                <div className="title-wrapper">
                    <img src={career} className="svg-filter"></img>
                    <h3>Job Experiences</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="title">Manulife Asia</h4>
                        <p className="year">Mar, 2019 - Jun, 2022</p>
                        <p className="timeline-text">Lead Fullstack Software Engineer</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Manulife Asia</h4>
                        <p className="year">Aug, 2016 - Feb, 2019</p>
                        <p className="text">Digital Engineer</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">HSBC Global</h4>
                        <p className="year">Jul, 2012 - Jul, 2016</p>
                        <p className="text">Technical Lead</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">HSBC Asia</h4>
                        <p className="year">Jul, 2009 - Jun, 2012</p>
                        <p className="text">Sr. Developer Officer</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">HSBC Asia</h4>
                        <p className="year">Jun, 2006 - Jun, 2009</p>
                        <p className="text">Developer Officer</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">HSBC Asia</h4>
                        <p className="year">Jul, 2001 - May, 2006</p>
                        <p className="text">Analyst Programmer</p>
                    </li>                       
                </ol>                   
            </div>

            <div className="timeline">
                <div className="title-wrapper">
                    <img src={skill} className="svg-filter"></img>
                    <h3>Work Skills</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="title">Core Libraries / Tools</h4>
                        <p className="year">2022</p>
                        <p className="timeline-text">
                            SpringBoot, Java, Angular, Typescript, NodeJS
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Single Paged Apps</h4>
                        <p className="year">2019 - 2021</p>
                        <p className="timeline-text">
                        Angular, ReactJS, Typescript, NodeJS 
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Core Infrastructure Service</h4>
                        <p className="year">2019 - 2021</p>
                        <p className="timeline-text">
                            SpringBoot, Java
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Backend Microservice</h4>
                        <p className="year">2017 - 2020</p>
                        <p className="timeline-text">
                            SpringBoot, Java
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Native Mobile Apps</h4>
                        <p className="year">2016 - 2017</p>
                        <p className="timeline-text">
                            iOS SDK, Swift, Android SDK, Java
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Hybrid Mobile Apps</h4>
                        <p className="year">2012 - 2016</p>
                        <p className="timeline-text">
                            iOS SDK, Objective-C, Android SDK, Java, JQuery, Javascript
                        </p>
                    </li>                     
                </ol>            
            </div>

            <div className="timeline">
                <div className="title-wrapper">
                    <img src={university} className="svg-filter"></img>
                    <h3>Education &amp; Professional Qualications</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="title">University of South Australia</h4>
                        <p className="year">2003 - 2007</p>
                        <p className="timeline-text">
                            Bachelor of Computing (E-Commerce)
                            <br/><br/>
                            <u>Core areas of study: </u><br/>
                            1. Data Structure &amp; Algorithm<br/>
                            2. Distributed Computing<br/>
                            3. Software Engineering<br/>
                            4. Database Technology<br/>
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Oracle</h4>
                        <p className="year">2004</p>
                        <p className="timeline-text">Sun's Certified JAVA Programmer (SCJP)</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Cisco System</h4>
                        <p className="year">2001</p>
                        <p className="timeline-text">Cisco Certified Network Associate (CCNA)</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Hong Kong Baptist University</h4>
                        <p className="year">2000 - 2001</p>
                        <p className="timeline-text">Professional Development Cert. in Linux System Administration</p>
                    </li>

                    <li className="timeline-item">
                        <h4 className="title">Hong Kong Baptist University</h4>
                        <p className="year">1999 - 2001</p>
                        <p className="timeline-text">Certificate in Computer Studies</p>
                    </li>                        
                </ol>
            </div>

        </div>
    );
}
export default Resume;