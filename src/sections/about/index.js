import React from "react";
import Particles from "react-particles-js";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import ThemeContext from "../../context";
import Progress from "components/progress";

import "./styles.scss";

class Hero extends React.Component {
  static contextType = ThemeContext;

  render() {
    return (
      <section id={`${this.props.id}`} className="about"
        style={{ height: this.context.height }}>
        {this.particles()}
        <Row>
          <Col md={6} className="content">
            <div className="content-text">
              <div className="line-text">
                <h4>About Me</h4>
              </div>
              <h3>
                {" "}
                I'm a Computer Science Student with deep Programming Skills
              </h3>
              <div className="separator" />
              <p>
                I've got 6 months of Python / SQL Developer experience as an
                Intern. I’m open to job offers where I could contribute to
                meaningful projects with my ability to deliver clean and
                reliable code and my excellent command of Programming (Data
                structure and Algorithms). I am a very responsible person and
                involved in projects entrusted to me. I am characterized by high
                interpersonal and communication skills, willingness to learn new
                technologies, and easily acquire knowledge; additionally, I have
                the ability to work in a team, also as a leader.
              </p>
              <div className="social social_icons">
                <FontAwesomeIcon icon={faGithubSquare} className="social_icon"
                  onClick={()=>window.open("https://bit.ly/2LRZ0wn")}/>
                <FontAwesomeIcon icon={faLinkedin} className="social_icon"
                  onClick={()=>window.open("https://bit.ly/2AV9b0N")}/>
                <FontAwesomeIcon icon={faTwitterSquare} className="social_icon"
                  onClick={()=>window.open("https://bit.ly/2XnFQ6V")}/>
                <FontAwesomeIcon icon={faInstagram} className="social_icon"
                  onClick={()=>window.open("https://bit.ly/2BMGpAn")}/>
              </div>
            </div>
          </Col>
          <Col md={6} className="skills">
            <div className="line-text">
              <h4>My Skills</h4>
            </div>
            <div className="skills-container">
              <Progress name="Python" value={95} delay={1100} />
              <Progress name="MySQL" value={95} delay={1100} />
              <Progress name="PHP" value={90} delay={1100} />
              <Progress name="Javascript" value={90} delay={1100} />
              <Progress name="Java" value={85} delay={1100} />
              <Progress name="NodeJS" value={85} delay={1100} />
              <Progress name="Git" value={80} delay={1100} />
              <Progress name="Bash" value={80} delay={1100} />
              <Progress name="Linux" value={80} delay={1100} />
            </div>
          </Col>
        </Row>
      </section>
    );
  }

  particles() {
    return (
      <Particles className="particles"
        params={{
          particles: {
            number: {
              value: 50,
              density: {
                enable: false,
                value_area: 5000
              }
            },
            line_linked: {
              enable: true,
              opacity: 0.5
            },
            size: {
              value: 1
            }
          },
          retina_detect: true
        }}/>
    );
  }
}

export default Hero;
