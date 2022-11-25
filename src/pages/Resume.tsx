import { default as university } from "../assets/school-outline.svg";
import { default as career } from "../assets/briefcase-outline.svg";
import { default as skill } from "../assets/construct-outline.svg";

const Resume = () => {
  return (
    <div>
      <div>
        <h1>Resume</h1>
        <hr />
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
            <p className="text">Lead Fullstack Software Engineer</p>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    As the full-stack development lead, I oversee the end-to-end
                    engineering process, from application architecting,
                    components design, unit-testing, build automation,
                    integration and release planning.
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">Manulife Asia</h4>
            <p className="year">Aug, 2016 - Feb, 2019</p>
            <p className="text">Digital Engineer</p>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    As the lead in mobile apps development and key engineer in
                    backend systems, I perform system design and fast
                    prototyping on emerging cloud-native technology, collaborate
                    with external vendor's UI developer to build consistent UX
                    on Browser/Android/iOS platform, ensure timely delivery of
                    software within budget, conduct code review and enforce
                    development discipline to control quality of the software.
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">HSBC Global</h4>
            <p className="year">Sept, 2015 - Jun, 2016</p>
            <p className="text">Solution Engineer</p>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    Lead the core application enhancement to address problems
                    such as maintainability, performance, security and
                    productivity. Deliverables include performance analysis,
                    quick prototyping, code refactoring, underlying platforms,
                    libraries and toolings upgrade.
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">HSBC Global</h4>
            <p className="year">Jul, 2012 - Aug, 2015</p>
            <p className="text">Mobile Technical Lead</p>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    Key engineer to deliver mobile banking app implementation
                    work for 2 major mobile platforms: Android and iOS on
                    various smartphone and tablet devices, assist solution
                    architect on core components design. Accountable to design
                    and implement all mobile payments features.
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">HSBC Asia</h4>
            <p className="year">Jul, 2009 - Jun, 2012</p>
            <p className="text">Sr. Developer Officer</p>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    Design and implement new features for core applications on
                    all self-service banking systems. Assist the software
                    prototyping of next generation Touch Screen ATM and
                    straight-through ATM Sales campaign.
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">HSBC Asia</h4>
            <p className="year">Jun, 2006 - Jun, 2009</p>
            <p className="text">Developer Officer</p>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    Implement and support client-side systems for the 2 major
                    self-service banking systems: Java-based Automatic Teller
                    Machines (ATM) and VB6-based Bulk Cash Deposit Machine
                    (BCDM) in various Asia Pacific markets.
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">HSBC Asia</h4>
            <p className="year">Jul, 2001 - May, 2006</p>
            <p className="text">Analyst Programmer</p>
            <table>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    Implement and support of the PC/LAN infrastructure and
                    on-premise servers, ranging from client-side automation
                    (Windows-based desktop) to server-side (40% Window-based,
                    30% Linux-based and 30% Unix-based) automation.
                  </td>
                </tr>
              </tbody>
            </table>
          </li>
        </ol>
      </div>

      <div className="timeline">
        <div className="title-wrapper">
          <img src={skill} className="svg-filter"></img>
          <h3>Technical Skills</h3>
        </div>

        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="title">Core Libraries / Tools</h4>
            <p className="year">2022</p>
            <p className="timeline-text">Language / SDK</p>
            <table>
              <tbody>
                <tr>
                  <td>SpringBoot, Java, Angular, Typescript, NodeJS</td>
                </tr>
              </tbody>
            </table>

            <p className="timeline-text">Platform / Environment</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    Docker, Kubernetes, Azure Cloud, Spring Cloud, Istio, NPM,
                    Maven, GIT, JFrog Artifactory, Confluence, JIRA, SonarQube,
                    Jenkins Pipeline, Open JDK 11, IntelliJ, Visual Studio Code
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">Single Paged Apps</h4>
            <p className="year">2019 - 2021</p>
            <p className="timeline-text">Language / SDK</p>
            <table>
              <tbody>
                <tr>
                  <td>Angular, ReactJS, Typescript, NodeJS</td>
                </tr>
              </tbody>
            </table>

            <p className="timeline-text">Platform / Environment</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    Salesforce Cloud, NPM, GIT, SonarQube, Jenkins, Confluence,
                    JIRA, Jenkins, Visual Studio Code
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">Core Infrastructure Service</h4>
            <p className="year">2019 - 2021</p>
            <p className="timeline-text">Language / SDK</p>
            <table>
              <tbody>
                <tr>
                  <td>SpringBoot, Java</td>
                </tr>
              </tbody>
            </table>

            <p className="timeline-text">Platform / Environment</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    Pivotal Cloud Foundry, MongoDB, Rabbit MQ, Redis Cache,
                    Spring Cloud, Apigee, Maven, GIT, JFrog Artifactory,
                    Confluence, JIRA, SonarQube, Jenkins Pipeline, Oracle JDK 8,
                    IntelliJ, Visual Studio Code
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">Backend Microservice</h4>
            <p className="year">2017 - 2020</p>
            <p className="timeline-text">Language / SDK</p>
            <table>
              <tbody>
                <tr>
                  <td>SpringBoot, Java</td>
                </tr>
              </tbody>
            </table>

            <p className="timeline-text">Platform / Environment</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    Pivotal Cloud Foundry, Azure SQL, Rabbit MQ, Redis Cache,
                    Spring Cloud, Apigee, Maven, Gradle, GIT, Confluence, JIRA,
                    SonarQube, Jenkins, Oracle JDK 8, IntelliJ, Visual Studio
                    Code
                  </td>
                </tr>
              </tbody>
            </table>
          </li>

          <li className="timeline-item">
            <h4 className="title">Native Mobile Apps</h4>
            <p className="year">2016 - 2017</p>
            <p className="timeline-text">Language / SDK</p>
            <table>
              <tbody>
                <tr>
                  <td>iOS SDK, Swift, Android SDK, Java</td>
                </tr>
              </tbody>
            </table>

            <p className="timeline-text">Platform / Environment</p>
            <table>
              <tbody>
                <tr>
                  <td>
                    iPad, iPhone, Apple Watch, Android Phone, Android Tablet,
                    Android Wear, Salesforce Cloud, Azure AD, CocoaPods, Gradle,
                    GIT, JIRA, Jenkins, Oracle JDK 8, Android Studio, XCode
                  </td>
                </tr>
              </tbody>
            </table>
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
              <br />
              <br />
              <u>Core areas of study: </u>
              <br />
              1. Data Structure &amp; Algorithm
              <br />
              2. Distributed Computing
              <br />
              3. Software Engineering
              <br />
              4. Database Technology
              <br />
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="title">Oracle</h4>
            <p className="year">2004</p>
            <p className="timeline-text">
              Sun's Certified JAVA Programmer (SCJP)
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="title">Cisco System</h4>
            <p className="year">2001</p>
            <p className="timeline-text">
              Cisco Certified Network Associate (CCNA)
            </p>
          </li>

          <li className="timeline-item">
            <h4 className="title">Hong Kong Baptist University</h4>
            <p className="year">2000 - 2001</p>
            <p className="timeline-text">
              Professional Development Cert. in Linux System Administration
            </p>
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
};
export default Resume;
