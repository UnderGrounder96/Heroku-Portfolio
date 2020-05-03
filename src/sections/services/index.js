import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BaffleText from "components/baffle-text";
import AnimationContainer from "components/animation-container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython, faJava } from "@fortawesome/free-brands-svg-icons";
import {
  faPencilRuler,
  faServer,
  faRobot,
  faSmileBeam,
  faPizzaSlice,
  faQuoteRight,
  faCode
} from "@fortawesome/free-solid-svg-icons";
import Counter from "components/counter";
import ThemeContext from "../../context";

import "./styles.scss";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.show = this.show.bind(this);
  }

  static contextType = ThemeContext;

  show() {
    this.setState({ show: true });
  }

  render() {
    return (
      <section
        id={`${this.props.id}`}
        className="services"
        style={{ height: this.context.height }}
      >
        <Row
          className="top"
          style={{
            maxHeight:
              this.context.height !== "auto"
                ? this.context.height * 0.8
                : "inherit"
          }}
        >
          <div className="content">
            <Col md={12}>
              <div className="line-text">
                <h4>Services</h4>
              </div>
              <div className="heading">
                <BaffleText
                  text="Where I can contribute"
                  revealDuration={500}
                  revealDelay={500}
                  parentMethod={this.show}
                  callMethodTime={1100}
                />
              </div>
              <div
                className="services_container"
                style={{
                  minHeight:
                    this.context.height !== "auto"
                      ? this.context.height * 0.6
                      : "inherit"
                }}
              >
                <Container>{this.services()}</Container>
              </div>
            </Col>
          </div>
        </Row>
        <Row className="bottom">{this.counters()}</Row>
      </section>
    );
  }

  services() {
    if (this.state.show || this.context.height === "auto") {
      return (
        <Row>
          <Col md={4} className="service">
            <AnimationContainer delay={200} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faReact} />
              </div>
              <h4>Frontend Development</h4>
              <p>
                Also known as client-side development. I'll be taking advantage
                of my HTML, CSS, and JavaScript knowledge to produce powerful
                websites and web applications. Developing user interface
                components and implementing them following well-known JS
                libraries and frameworks.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={400} animation="fadeInDown fast">
              <div className="icon">
                <FontAwesomeIcon icon={faJava} />
              </div>
              <h4>Backend Development</h4>
              <p>
                I'm bringing my backend knowledge which is the skill that powers
                the web with one of the following Programming languages: PHP,
                NodeJs, Java or Python. I'll be supporting the team with API
                that allows people to browse the Sites and Web Apps build by us
                with friendly feedbacks.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={600} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPython} />
              </div>
              <h4>Software QA/Tester</h4>
              <p>
                Evaluating the functionality of a software application with an
                intent to find whether the developed software met the specified
                requirements or not and to identify the defects to ensure that
                the product is defect-free in order to produce the quality
                product.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={800} animation="fadeInLeft fast">
              <div className="icon">
                <FontAwesomeIcon icon={faPencilRuler} className="solid" />
              </div>
              <h4>Software design and implementation</h4>
              <p>
                Solving complex Engineering problems and hitches in the radio
                technologies area. I will be able to create and review
                requirements for functional, design, and interface
                specifications based on system and HW specifications. The scope
                of work might include daily cooperation with project managers in
                planning activities.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service border-side">
            <AnimationContainer delay={1000} animation="fadeInUp fast">
              <div className="icon">
                <FontAwesomeIcon icon={faServer} className="solid" />
              </div>
              <h4>Database Desing and Management</h4>
              <p>
                Organization of data according to a database model. Determining
                what data must be stored and how the data elements interrelate
                and so begin to fit the data to the database model. Database
                design involves classifying data and identifying
                interrelationships.
              </p>
            </AnimationContainer>
          </Col>
          <Col md={4} className="service">
            <AnimationContainer delay={1200} animation="fadeInRight fast">
              <div className="icon">
                <FontAwesomeIcon icon={faRobot} className="solid" />
              </div>
              <h4>Machine Learning</h4>
              <p>
                Development and maintenance of machine learning algorithms for
                source code analysis. Integrating machine learning system with
                existing quality assurance solutions and tools. Prototyping
                advanced development support systems based on machine learning.
              </p>
            </AnimationContainer>
          </Col>
        </Row>
      );
    }
  }

  counters() {
    if (this.state.show || this.context.height === "auto") {
      return (
        <Container>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faSmileBeam}
                value={10}
                text="Coding Friends"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faPizzaSlice}
                value={1000}
                text="Pizzas Ordered"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faQuoteRight}
                value={50}
                text="Project ideas"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
          <Col md={3}>
            <AnimationContainer delay={100} animation="fadeIn fast">
              <Counter
                icon={faCode}
                value={50000}
                text="Lines of Code"
                symbol="+"
                duration={3}
              />
            </AnimationContainer>
          </Col>
        </Container>
      );
    }
  }
}

export default Services;
