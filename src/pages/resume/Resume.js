
import './Resume.css';
import dp from './jas.jpg';

export default function Resume() {
    return(
    <>
        <div class='card'>
            <div>
                <img src={dp} alt="Display Picture" />
            </div>
            <div>
                <h1>Jaskaran Singh</h1>
                <h3>Senior Software Engineer at Saksoft</h3>
                <h5></h5>
            </div>
        </div>
        <div class='card'>
            <div>
                <h3>About</h3>
                <p>
                    Experienced software engineer with 5+ years of experience and a passion for developing efficient software solutions. Proficient in databases such as MySQL and SQL lite, front-end technologies like JavaFX and JavaScript, and back-end technologies including Java8, Spring Web Server, JMX, ActiveMQ, nodeJS, and express. Skilled in Agile development using the Scrum methodology and familiar with GIT, Eclipse, IntelliJ, and Visual Studio Code. Strong problem-solving and ownership skills with a track record of researching, designing, implementing, and maintaining software programs. Experienced in collaborating with cross-functional teams and building user-friendly interfaces. Currently working on upgrading TMS application and adding new features for MercuryGate. Committed to continuous learning and improvement.
                </p>
            </div>

        </div>
        <div class='card'>
            <div>
                <h3>Experience</h3>

                <ul>
                    <li> <p>
                        <strong>Saksoft</strong><br />
                        - Working with MercuryGate to upgrade their TMS application to add/update new versions of third party logistics APIs like FedEx, DHL, UPS, TruckStop and Cheetah. My work involves building REST APIs , micro services for these services and also work on Improving the TMS application and adding new features according to the customer requirements.
                    </p>
                        <p>
                            <strong>Skills:</strong> Debugging  &bull; Code Design  &bull; Spring Framework  &bull; Programming  &bull; Communication  &bull; Spring Boot  &bull; Reactive Programming  &bull; Problem Solving  &bull; Computer Science  &bull; Programming Languages  &bull; Continuous Integration and Continuous Delivery (CI/CD)  &bull; Software Development  &bull; Server Side
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Stratign FZE</strong><br />
                            - Worked as a full stack developer to automate data insertion and data visualization.
                            Web Development  &#9475; Desktop Application Development  &#9475; Client Interaction  &#9475; Server Management  &#9475; Client Management  &#9475; API integration  &#9475; GIT version Controlling
                            Tech Stack: javascript, java 8, Spring Boot web server, ActiveMQ, MySQL, ElasticSearch
                        </p>
                        <p>
                            <strong>Skills:</strong> Debugging  &bull; Code Design  &bull; Spring Framework  &bull; Programming  &bull; Communication  &bull; Spring Boot  &bull; Problem Solving  &bull; Programming Languages  &bull; Continuous Integration and Continuous Delivery (CI/CD)  &bull; Software Development  &bull; Server Side  &bull; Microservices
                        </p>
                    </li>
                    <li>
                        <p>
                            <strong>Bizspice Ltd.</strong><br />
                            - Worked as a web developer on a Shopify plugin "Trackify X Facebook Pixel App"
                            Facebook API integration  &#9475; InfusionSoft API integration  &#9475; Facebook pixel implementation  &#9475; GDPR Compliance  &#9475; GIT version Controlling  &#9475; Jira
                        </p>
                        <p>
                            <strong>Skills:</strong>Debugging  &bull; Code Design  &bull; Spring Framework  &bull; Programming  &bull; Communication  &bull; Spring Boot  &bull; Problem Solving  &bull; Computer Science  &bull; Programming Languages  &bull; Continuous Integration and Continuous Delivery (CI/CD)  &bull; Software Development  &bull; Server Side
                        </p></li>
                </ul>





            </div>
        </div>
        <div class='card'>
            <div>
                <h3>Education</h3>
                <ul>
                    <li><p>
                        <strong>Dr. A.P.J. Abdul Kalam Technical UniversityDr. A.P.J. Abdul Kalam Technical University</strong></p>
                        <p>Bachelor of Technology B.Tech Computer Science and Information Technology
                            2013 - 2017</p>
                        <p><strong> Activities and societies:</strong> Member- Rotract Club  &bull; DGI chapter & Microsoft Student Associate  &bull; DGI chapterActivities and societies: Member- Rotract Club, DGI chapter  &bull; Microsoft Student Associate, DGI chapter
                            Computer Science and Software Development</p></li>
                    <li><p><strong>Christ The King College, Jhansi</strong></p>
                        <p>Higher Secondary, Science Higher Secondary, Science 2010 - 2012</p>
                    </li>
                    <li>
                        <p><strong>Rani Laxmi Bai Public School, Jhansi</strong></p>
                        <p>beginning - 2010</p>

                    </li>
                </ul>



            </div>

        </div>

    </>
    )
}
